import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

// Define the interface for NPCI_TXNS data
interface NPCI_TXN {
    A:any;
    DATE: string;
    AMOUNT: string | null;
    B:any;
    C:any;
    D: any | null;
    E: string;
    F: string | null;
    G:any;
    RRN: string | null;
    H: string | null;
    TXNID: string;
}

// Generator function to create fake data
function* generateData(count: number): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        yield {
            A:'S75960940',
            DATE:'01-04-2024',
            AMOUNT: faker.finance.amount(),
            B:'01-04-2024',
            C:'',
            D:'2001',
            E: '2650',
            F: '20012207843065',
            G: '27111001182650',
            RRN: faker.random.numeric(12),
            H: '01-04-2024 01:38:36',
            TXNID: faker.database.mongodbObjectId(),
        };
    }
}

// Create the CSV writer
const csvWriter = createObjectCsvWriter({
    path: 'cbs.csv',
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
    ]
});

// Generate and write the data to CSV
(async () => {
  const dataGenerator = generateData(200000);
  let data = dataGenerator.next();
  while (!data.done) {
      await csvWriter.writeRecords([data.value]);
      data = dataGenerator.next();
  }
  console.log('Data generation completed.');
})();
