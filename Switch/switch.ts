import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

// Define the interface for NPCI_TXNS data
interface NPCI_TXN {
    DATE: string;
    AMOUNT: string | null;
    A: any;
    NPCI_CODE: any | null;
    RRN: string | null;
    EXNID: any;
    PAYEE_VPA: string;
    C: any;
    PAYER_VPA: string | null;
    D: any;
    TXNID: string;
    MCC: string | null;
}

// Generator function to create fake data
function* generateData(count: number, date: any): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        yield {
            DATE: date,
            AMOUNT: faker.finance.amount(),
            A: 'U09',
            NPCI_CODE: faker.helpers.arrayElement(['SUCCESS', 'FAILURE']),
            RRN: faker.random.numeric(12),
            EXNID: faker.string.uuid(),
            PAYEE_VPA: faker.internet.email().replace('.com', ''),
            C: '1',
            PAYER_VPA: faker.internet.email().replace('.com', ''),
            D: '0',
            TXNID: faker.string.uuid(),
            MCC: faker.random.numeric(4),
        };
    }
}

// Function to format date to 'MMDDYY'
function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}${day}${year}`;
}

// Function to format date to 'YYYY-MM-DD HH:mm' format
function formatFullDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = '00';
    const minutes = '00';
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Generate and write data for each date in the specified range
(async () => {
    const startDate = new Date(2024, 3, 1); // April 1, 2024
    const endDate = new Date(2024, 3, 30); // April 10, 2024
    const oneDay = 24 * 60 * 60 * 1000;

    for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneDay)) {
        const formattedDate = formatDate(date);
        const fullFormattedDate = formatFullDate(date);
        const fileName = `switch_${formattedDate}.csv`;

        const csvWriter = createObjectCsvWriter({
            path: fileName,
            header: [
                { id: 'DATE', title: 'DATE' },
                { id: 'AMOUNT', title: 'AMOUNT' },
                { id: 'A', title: 'A' },
                { id: 'NPCI_CODE', title: 'NPCI_CODE' },
                { id: 'RRN', title: 'RRN' },
                { id: 'EXNID', title: 'EXNID' },
                { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
                { id: 'C', title: 'C' },
                { id: 'PAYER_VPA', title: 'PAYER_VPA' },
                { id: 'D', title: 'D' },
                { id: 'TXNID', title: 'TXNID' },
                { id: 'MCC', title: 'MCC' }
            ]
        });

        const dataGenerator = generateData(500000, fullFormattedDate);
        let data = dataGenerator.next();
        while (!data.done) {
            await csvWriter.writeRecords([data.value]);
            data = dataGenerator.next();
        }
        console.log(`Data generation completed for ${fullFormattedDate}. File: ${fileName}`);
    }
})();
