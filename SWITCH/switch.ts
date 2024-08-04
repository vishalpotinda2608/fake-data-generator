import { faker, fakerKA_GE } from '@faker-js/faker';
import { SWITCH_TXN } from '../Models/SWITCH_TXN.model';
import { MCC_CODE } from '../Constants/constant';


// SWITCH
export function* generateSwitchData(count: number, date: string,commonData): IterableIterator<SWITCH_TXN> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT ,NPCI_CODE,PAYEE_VPA,PAYER_VPA} = commonData[i];
        yield {
           'Date of txn': date,
            Amount: AMOUNT,
            'Resp Code':faker.helpers.arrayElement(['S96','U09','U30','U31','U67','U78','\N']),
            'Status':NPCI_CODE[1],
             RRN: faker.random.numeric(12),
            'Ext id': faker.string.uuid(),
            'Payee Vpa': PAYEE_VPA,
            'Txn Note': faker.helpers.arrayElement(['payMerchant','Person','PayMerchant']),
            'Payer UPI ID': PAYER_VPA,
            'PayerName': '\N',
            "Txn Id": TXNID,
            MCC: MCC_CODE[PAYEE_VPA.split('.')[0]],
        };
    }
}