import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

// Define the interface for NPCI_TXNS data
interface NPCI_TXN {
    A: any;
    DATE: string;
    AMOUNT: string | null;
    B: any;
    C: any;
    D: any | null;
    E: string;
    F: string | null;
    G: any;
    RRN: string | null;
    H: string | null;
    TXNID: string;
}

// Generator function to create fake data
function* generateData(count: number, date: string): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        yield {
            A: 'S75960940',
            DATE: date,
            AMOUNT: faker.finance.amount(),
            B: '04-04-2024',
            C: '',
            D: '2001',
            E: '2650',
            F: '20012207843065',
            G: '27111001182650',
            RRN: faker.random.numeric(12),
            H: '04-04-2024 01:38:36',
            TXNID: faker.database.mongodbObjectId(),
        };
    }
}

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

// Generate and write the data to CSV
(async () => {
    const startDate = new Date(2024, 3, 1, 10, 30, 38); // April 1, 2024, 10:30:38
    const endDate = new Date(2024, 3, 30, 10, 30, 38); // April 10, 2024, 10:30:38
    const oneDay = 24 * 60 * 60 * 1000;

    for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneDay)) {
        const formattedDate = formatDateToDDMMYYYYHHMMSS(date);
        const formattedFilenameDate = formatDateForFilename(date);
        const filename = `cbs_${formattedFilenameDate}.csv`;

        const csvWriter = createObjectCsvWriter({
            path: filename,
            header: [
                { id: 'A', title: 'A' },
                { id: 'DATE', title: 'DATE' },
                { id: 'AMOUNT', title: 'AMOUNT' },
                { id: 'B', title: 'B' },
                { id: 'C', title: 'C' },
                { id: 'D', title: 'D' },
                { id: 'E', title: 'E' },
                { id: 'F', title: 'F' },
                { id: 'G', title: 'G' },
                { id: 'RRN', title: 'RRN' },
                { id: 'H', title: 'H' },
                { id: 'TXNID', title: 'TXNID' }
            ],
        });

        const dataGenerator = generateData(500000, formattedDate);
        let data = dataGenerator.next();
        while (!data.done) {
            await csvWriter.writeRecords([data.value]);
            data = dataGenerator.next();
        }
        console.log(`Data generation completed for ${formattedDate}. File: ${filename}`);
    }
})();
