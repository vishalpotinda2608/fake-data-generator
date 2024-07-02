import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

// Define the interface for NPCI_TXNS data
interface NPCI_TXN {
    NPCI_TXN_TYPE: string | null;
    NPCI_STATUS: string;
    TXNID: string;
    RRN: string | null;
    NPCI_CODE: any | null;
    DATE: string;
    TIME: string | null;
    AMOUNT: string | null;
    A:any;
    B:any;
    C:any;
    D:any;
    PSP: string | null;
    E:any,
    PAYER_VPA: string | null;
    F:any,
    MCC: string | null;
    PAYEE_VPA: string;
    G:any;
    H:any;
    I:any,
    J:any,
    K:any;
    L:any;
    M:any;

}

// Generator function to create fake data
function* generateData(count: number): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        yield {
            NPCI_TXN_TYPE: 'TX',
            NPCI_STATUS: 'U2',
            TXNID: faker.database.mongodbObjectId(),
            RRN: faker.random.numeric(12),
            NPCI_CODE: faker.helpers.arrayElement(['00','RB','Z9','Z9']),
            DATE:'40124',
            TIME: '210230',
            AMOUNT: faker.finance.amount(),
            A:'cb9274e72eb6406fba57211045db5fa5@axl',
            B:'1',
            C:'1',
            D:'0',
            PSP: faker.company.name(),
            E:'0',
            PAYER_VPA: faker.internet.email().replace('.com', ''),
            F:'COB',
            PAYEE_VPA: faker.internet.email().replace('.com', ''),
            MCC: faker.random.numeric(4),
            G:'SBI',
            H:'AIRP0000001',
            I:'1',
            J:'111',
            K:'AXB',
            L:"UTIB0003966",
            M:'1'

        };
    }
}

// Create the CSV writer
const csvWriter = createObjectCsvWriter({
    path: 'npcitxns.csv',
    header: [
        { id: 'NPCI_TXN_TYPE', title: 'NPCI_TXN_TYPE' },
        { id: 'NPCI_STATUS', title: 'NPCI_STATUS' },
        { id: 'TXNID', title: 'TXNID' },
        { id: 'RRN', title: 'RRN' },
        { id: 'NPCI_CODE', title: 'NPCI_CODE' },
        { id: 'DATE', title: 'DATE' },
        { id: 'TIME', title: 'TIME' },
        { id: 'AMOUNT', title: 'AMOUNT' },
        { id: 'A', title: 'A' },
        { id: 'B', title: 'B' },
        { id: 'C', title: 'C' },
        { id: 'D', title: 'D' },
        { id: 'PSP', title: 'PSP' },
        { id: 'E', title: 'E' },
        { id: 'PAYER_VPA', title: 'PAYER_VPA' },
        { id: 'F', title: 'F' },
        { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
        { id: 'MCC', title: 'MCC' },
        { id: 'G', title: 'G' },
        { id: 'H', title: 'H' },
        { id: 'I', title: 'I' },
        { id: 'J', title: 'J' },
        { id: 'K', title: 'K' },
        { id: 'L', title: 'L' },
        { id: 'M', title: 'M' },
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
