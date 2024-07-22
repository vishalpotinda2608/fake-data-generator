import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

// Define the interface for NPCI_TXNS data
interface NPCI_TXN {
    DATE: string;
    AMOUNT: string | null;
    A:any;
    NPCI_CODE: any | null;
    RRN: string | null;
    EXNID:any;
    PAYEE_VPA: string;
    C:any;
    PAYER_VPA: string | null;
    D:any;
    TXNID: string;
    MCC: string | null;
}

// Generator function to create fake data
function* generateData(count: number,date:any): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        yield {
            DATE:date,
            AMOUNT: faker.finance.amount(),
            A:'U09',
            NPCI_CODE: faker.helpers.arrayElement(['SUCCESS','FAILURE']),
            RRN: faker.random.numeric(12),
            EXNID:faker.string.uuid(),
            PAYEE_VPA: faker.internet.email().replace('.com', ''),
            C:'1',
            PAYER_VPA: faker.internet.email().replace('.com', ''),
            D:'0',
            TXNID: faker.string.uuid(),
            MCC: faker.database.mongodbObjectId(),
        };
    }
}

// Create the CSV writer
const csvWriter = createObjectCsvWriter({
    path: 'switch.csv',
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

// Generate and write the data to CSV
(async () => {
  const date='04-04-2024 00:00'
  const dataGenerator = generateData(500,date);
  let data = dataGenerator.next();
  while (!data.done) {
      await csvWriter.writeRecords([data.value]);
      data = dataGenerator.next();
  }
  console.log('Data generation completed.');
})();