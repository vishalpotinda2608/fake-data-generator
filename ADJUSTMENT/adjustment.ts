import { Faker, faker } from '@faker-js/faker';
import { ADJUSTMENT } from '../Models/ADJUSTMENT.model';
import { adjustmentType, beneficiaryTypes } from '../Constants/constant';


// SWITCH
export function* generateAdjustmentData(count: number, date: string,commonData): IterableIterator<ADJUSTMENT> {
    for (let i = 0; i < count; i++) {
        const { TXNID, AMOUNT ,NPCI_CODE} = commonData[i];
        if(NPCI_CODE[0]=='RB' || NPCI_CODE[0]=='0'){
            const uid=faker.random.numeric(10);
            const adjType=faker.helpers.arrayElement(adjustmentType)
            const rem=faker.helpers.arrayElement(['SBL',beneficiaryTypes[Math.floor(Math.random()*20)],'SBL']);
            const ben=faker.helpers.arrayElement(beneficiaryTypes);
            yield {
                "Txnuid":faker.random.numeric(10),
                "Uid": uid,
                "Adjdate":date,
                "Adjtype": adjType,
                "Remitter":rem,
                "Beneficiery": ben,
                "Response": faker.helpers.arrayElement(['0','RB','RR','R9']),
                "Txndate": date,
                "Txntime": `${new Date(date).getHours()}:${new Date(date).getMinutes()}:${new Date(date).getSeconds()}`,
                "RRN": faker.random.numeric(12),
                "Terminalid": "159332",
                "Ben_Mobile_No": `9${faker.random.numeric(12)}`,
                "Rem_Mobile_No": `7${faker.random.numeric(12)}`,
                "Chbdate": "-",
                "Chbref": "-",
                "Txnamount": AMOUNT,
                "Adjamount": AMOUNT,
                "Rem/PayeePSP_Fee": "0",
                "Ben_Fee": "0",
                "Ben_FeeSW": "0",
                "Adjfee": "0",
                "Npcifee": "0",
                "Remfeetax": "0",
                "Benfeetax": "0",
                "Npcitax": "0",
                "Adjref": `${rem}/${ben}/${adjType}/${uid}`,
                "Bankadjref": faker.helpers.arrayElement(['DRC','Credit Adjustment','RET','TCC','UPI']),
                "Adjproof": "DRC_20240402_83.CSV",
                "Compensation amount": "0",
                "Adjustment raised time": "",
                "No of Days for Penalty": "0",
                "SHDT73": "",
                "SHDT74": "",
                "SHDT75": "",
                "SHDT76": "",
                "SHDT77": "",
                "Transaction_Type": "U2",
                "Transaction Indicator": faker.helpers.arrayElement(['PAY','COLLECT',"PAY"]),
                "Beneficiary Account number": `90${faker.random.numeric(17)}`,
                "Remitter Account number": `93${faker.random.numeric(17)}`,
                "Aadhar Number": "",
                "Mobile Number":`93${faker.random.numeric(12)}`,
                "Payer PSP": ben,
                "Payee PSP":ben,
                "UPI Transaction ID": TXNID,
                "Virtual Address": "",
                "Dispute Flag": faker.helpers.arrayElement(['DRC','PBRB','PR2C','TCC','RRC']),
                "Reason Code": faker.helpers.arrayElement(['104','102','103','108','109','501','U008','U010']),
                "MCC": faker.random.numeric(4),
                "Originating Channel": faker.helpers.arrayElement(['IDIR','UMOB']),
            
            }
        }
    }
}