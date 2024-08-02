import { faker } from '@faker-js/faker';
import { NPCI_TXN } from '../Models/NPCI_TXN.model';
//NPCI

export function* generateNpciData(count: number, date: string,commonData): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT,NPCI_CODE } = commonData[i];
        yield {
            NPCI_TXN_TYPE: 'TX',
            NPCI_STATUS: 'U2',
            TXNID: TXNID,
            RRN: faker.random.numeric(12),
            NPCI_CODE: NPCI_CODE[0],
            DATE: date,
            TIME: '210230',
            AMOUNT: AMOUNT,
            A: 'cb9274e72eb6406fba57211045db5fa5@axl',
            B: '1',
            C: '1',
            D: '0',
            PSP: faker.company.name(),
            E: '0',
            PAYER_VPA: faker.internet.email().replace('.com', ''),
            F: 'COB',
            PAYEE_VPA: faker.internet.email().replace('.com', ''),
            MCC: faker.random.numeric(4),
            G: 'SBI',
            H: 'AIRP0000001',
            I: '1',
            J: '111',
            K: 'AXB',
            L: "UTIB0003966",
            M: '1',
            N: '1'
        };
    }
}