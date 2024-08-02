import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';
import {generateNpciData} from './NPCI/npci'
import {generateSwitchData} from './SWITCH/switch'
import {generateCbsData} from './CBS/cbs'
import { cbsHeaders, npciHeaders, switchHeaders } from './Constants/constant';

// Generate common TXNID and AMOUNT once and reuse
const generateCommonData = (count: number): { TXNID: string, AMOUNT: string,NPCI_CODE }[] => {
    return Array.from({ length: count }, () => ({
        TXNID: faker.database.mongodbObjectId(),
        AMOUNT: faker.finance.amount(),
        NPCI_CODE:faker.helpers.arrayElement([['00', 'SUCCESS',],['RB', 'SUCCESS'],['Z9', 'FAILURE',],['Z7', 'FAILURE']])
    }));
};
const commonData = generateCommonData(10);

// Function to format date to 'DD-MM-YYYY HH:mm:ss' format
function formatDateToDDMMYYYYHHMMSS(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Function to format date to 'YYYYMMDD' for filename
function formatDateForFilename(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}${month}${day}`;
}

async function writeDataToCSV(filename: string, headers: any[], dataGenerator: () => IterableIterator<any>) {
    const csvWriter = createObjectCsvWriter({
        path: filename,
        header: headers,
    });

    const batchSize = 1000; // Adjust batch size as needed
    let batch: any[] = [];
    const dataArray = Array.from(dataGenerator());

    for (let record of dataArray) {
        batch.push(record);
        if (batch.length >= batchSize) {
            try {
                await csvWriter.writeRecords(batch);
                console.log(`Written ${batch.length} records to ${filename}`);
            } catch (error) {
                console.error(`Error writing records to ${filename}:`, error);
            }
            batch = [];
        }
    }

    // Write any remaining records in the batch
    if (batch.length > 0) {
        try {
            await csvWriter.writeRecords(batch);
            console.log(`Written final ${batch.length} records to ${filename}`);
        } catch (error) {
            console.error(`Error writing final records to ${filename}:`, error);
        }
    }
}

// Generate date for files
const currentDate = new Date();
const formattedDate = formatDateToDDMMYYYYHHMMSS(currentDate);
const filenameDate = formatDateForFilename(currentDate);

writeDataToCSV(`npc_txns_${filenameDate}.csv`, npciHeaders, () => generateNpciData(10, formattedDate,commonData));
writeDataToCSV(`switch_txns_${filenameDate}.csv`, switchHeaders, () => generateSwitchData(10, formattedDate,commonData));
writeDataToCSV(`cbs_txns_${filenameDate}.csv`, cbsHeaders, () => generateCbsData(10, formattedDate,commonData));
