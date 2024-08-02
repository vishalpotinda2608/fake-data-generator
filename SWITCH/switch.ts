import { faker } from '@faker-js/faker';
import { SWITCH_TXN } from '../Models/SWITCH_TXN.model';


// SWITCH
export function* generateSwitchData(count: number, date: string,commonData): IterableIterator<SWITCH_TXN> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT ,NPCI_CODE} = commonData[i];
        yield {
            A: 'U09',
            DATE: date,
            AMOUNT: AMOUNT,
            NPCI_CODE:NPCI_CODE[1],
            RRN: faker.random.numeric(12),
            EXNID: faker.string.uuid(),
            PAYEE_VPA: faker.internet.email().replace('.com', ''),
            C: '1',
            PAYER_VPA: faker.internet.email().replace('.com', ''),
            D: '0',
            TXNID: TXNID,
            MCC: faker.random.numeric(4),
        };
    }
}