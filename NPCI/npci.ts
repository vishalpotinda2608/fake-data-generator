import { faker } from '@faker-js/faker';
import { NPCI_TXN } from '../Models/NPCI_TXN.model';
import { beneficiaryTypes, generateRandomTime, MCC_CODE, merchantVPAs } from '../Constants/constant';
//NPCI

export function* generateNpciData(count: number, date: string,commonData): IterableIterator<NPCI_TXN> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT,NPCI_CODE ,PAYEE_VPA,PAYER_VPA} = commonData[i];
        yield {
            NPCI_TXN_TYPE: 'TX',
            NPCI_STATUS: 'U2',
            TXNID: TXNID,
            RRN: faker.random.numeric(12),
            NPCI_CODE: NPCI_CODE[0],
            DATE: date,
            TIME: generateRandomTime(),
            AMOUNT: (AMOUNT*100).toFixed(0),
            A: '',
            B: '1',
            C: '1',
            D: '0',
            PSP: faker.helpers.arrayElement(beneficiaryTypes),
            E: '0',
            PAYER_VPA:PAYER_VPA ,
            F: faker.helpers.arrayElement(beneficiaryTypes),
            MCC: MCC_CODE[PAYEE_VPA.split('.')[0]],
            PAYEE_VPA: PAYEE_VPA,
            G: 'SMB',
            H: `SBM${faker.random.numeric(7)}`,
            I: '1',
            J: `${faker.random.numeric(11)}`,
            K: faker.helpers.arrayElement(beneficiaryTypes),
            L: `${faker.helpers.arrayElement(beneficiaryTypes)}${faker.random.numeric(7)}`,
            M: '2',
            N: `${faker.random.numeric(11)}`
        };
    }
}