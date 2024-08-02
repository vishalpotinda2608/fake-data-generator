import { faker } from '@faker-js/faker';
import { CBS_TXN } from '../Models/CBS_TXN.model';

// CBS
export function* generateCbsData(count: number, date: string,commonData): IterableIterator<CBS_TXN> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT } = commonData[i];
        yield {
            A: 'S75960940',
            DATE: date,
            AMOUNT: AMOUNT,
            B: '04-04-2024',
            C: '',
            D: '2001',
            E: '2650',
            F: '20012207843065',
            G: '27111001182650',
            RRN: faker.random.numeric(12),
            H: '04-04-2024 01:38:36',
            TXNID: TXNID,
        };
    }
}