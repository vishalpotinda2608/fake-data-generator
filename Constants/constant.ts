// Define headers for each type of data
export const npciHeaders = [
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
    { id: 'MCC', title: 'MCC' },
    { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
    { id: 'G', title: 'G' },
    { id: 'H', title: 'H' },
    { id: 'I', title: 'I' },
    { id: 'J', title: 'J' },
    { id: 'K', title: 'K' },
    { id: 'L', title: 'L' },
    { id: 'M', title: 'M' },
    { id: 'N', title: 'N' },
];

export const switchHeaders = [
    { id: 'Date of txn', title: 'Date of txn' },
    { id: 'Amount', title: 'Amount' },
    { id: 'Resp Code', title: 'Resp Code' },
    { id: 'Status', title: 'Status' },
    { id: 'RRN', title: 'RRN' },
    { id: 'Ext id', title: 'Ext id' },
    { id: 'Payee Vpa', title: 'Payee Vpa' },
    { id: 'Txn Note', title: 'Txn Note' },
    { id: 'Payer UPI ID', title: 'Payer UPI ID' },
    { id: 'PayerName', title: 'PayerName' },
    { id: 'Txn Id', title: 'Txn Id' },
    { id: 'MCC', title: 'MCC' },
];

export const cbsHeaders = [
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
    { id: 'TXNID', title: 'TXNID' },
];

export const adjustHeaders = [
    { id: "Txnuid", title: "Txnuid" },
    { id: "Uid", title: "Uid" },
    { id: "Adjdate", title: "Adjdate" },
    { id: "Adjtype", title: "Adjtype" },
    { id: "Remitter", title: "Remitter" },
    { id: "Beneficiery", title: "Beneficiery" },
    { id: "Response", title: "Response" },
    { id: "Txndate", title: "Txndate" },
    { id: "Txntime", title: "Txntime" },
    { id: "RRN", title: "RRN" },
    { id: "Terminalid", title: "Terminalid" },
    { id: "Ben_Mobile_No", title: "Ben_Mobile_No" },
    { id: "Rem_Mobile_No", title: "Rem_Mobile_No" },
    { id: "Chbdate	Chbref", title: "Chbref" },
    { id: "Txnamount", title: "Txnamount" },
    { id: "Adjamount", title: "Adjamount" },
    { id: "Rem/PayeePSP_Fee", title: "Rem/PayeePSP_Fee" },
    { id: "Ben_Fee", title: "Ben_Fee" },
    { id: "Ben_FeeSW", title: "Ben_FeeSW" },
    { id: "Adjfee", title: "Adjfee" },
    { id: "Npcifee", title: "Npcifee" },
    { id: "Remfeetax", title: "Remfeetax" },
    { id: "Benfeetax", title: "Benfeetax" },
    { id: "Npcitax", title: "Npcitax" },
    { id: "Adjref", title: "Adjref" },
    { id: "Bankadjref", title: "Bankadjref" },
    { id: "Adjproof", title: "Adjproof" },
    { id: "Compensation amount", title: "Compensation amount" },
    { id: "Adjustment raised time", title: "time" },
    { id: "No of Days for Penalty", title: "Penalty" },
    { id: "SHDT73", title: "SHDT73" },
    { id: "SHDT74", title: "SHDT74" },
    { id: "SHDT75", title: "SHDT75" },
    { id: "SHDT76", title: "SHDT76" },
    { id: "SHDT77", title: "SHDT77" },
    { id: "Transaction_Type", title: "Transaction_Type" },
    { id: "Transaction Indicator", title: "Transaction Indicator" },
    { id: "Beneficiary Account number", title: "Beneficiary Account number" },
    { id: "Remitter Account number", title: "Remitter Account number" },
    { id: "Aadhar Number", title: "Aadhar Number" },
    { id: "Mobile Number", title: "Mobile Number" },
    { id: "Payer PSP", title: "Payer PSP" },
    { id: "Payee PSP", title: "Payee PSP" },
    { id: "UPI Transaction ID", title: "UPI Transaction ID" },
    { id: "Virtual Address", title: "Virtual Address" },
    { id: "Dispute Flag", title: "Dispute Flag" },
    { id: "Reason Code", title: "Reason Code" },
    { id: "MCC", title: "MCC" },
    { id: "Originating Channel", title: "Originating Channel" },


]

export const adjustmentType=[
    "Chargeback Acceptance",
    "Chargeback Raise",
    "Complaint Raise",
    "Credit Adjustment",
    "Debit Reversal Confirmation",
    "Differed Chargeback Raise",
    "Differed Re-presentment Raise",
    "Fraud Chargeback Raise",
    "Fraud Chargeback Representment",
    "Online Refund",
    "Refund Reversal Confirmation",
    "Re-presentment Raise",
    "Response to Complaint",
    "RET",
    "TCC",
    "Wrong Credit Chargeback Acceptance",
    "Wrong Credit Chargeback Raise",
    "Wrong credit Representment"
]

export const beneficiaryTypes=[
    "YES",
    "YBS",
    "SBI",
    "AXB",
    "HDF",
    "GTI",
    "BOB",
    "FBL",
    "UOB",
    "PNB",
    "CNB",
    "KMB",
    "ARL",
    "APP",
    "INB",
    "BOI",
    "YJU",
    "IPB",
    "ICI",
    "IIB",
    "CBI",
    "IOB",
    "UCO",
    "FIB",
    "IDB",
    "BOM",
    "KTP",
    "BOM",
    "YOM",
    "BDN",
    "KVB",
    "IDC",
    "MBK",
    "SIB"
]

export const payerVpas=[
    "@apl",
    "@yapl",
    "@rapl",
    "@abfspay",
    "@abfspay",
    "@axisb",
    "@idfcbank",
    "@fkaxis",
    "@icici",
    "@okaxis",
    "@okhdfcbank",
    "@okicici",
    "@oksbi",
    "@yesg",
    "@ybl",
    "@axl",
    "@timecosmos",
    "@paytm"
]

export function generateRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const seconds = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hours}${minutes}${seconds}`;
}

export const merchantVPAs=[
    // Digital Goods: Games-5816	
    'gaming.car@sbm',
    'gaming.bike@sbm',
    'gaming.truck@sbm',
    'gaming.boat@sbm',
    'gaming.airplane@sbm',
    'gaming.scooter@sbm',
    'gaming.helmet@sbm',
    'gaming.robot@sbm',
    'gaming.submarine@sbm',
    'gaming.drone@sbm',

    //Fast Food Restaurants-5814
    'dining.pizza@sbm',
    'dining.burger@sbm',
    'dining.sushi@sbm',
    'dining.pasta@sbm',
    'dining.tacos@sbm',
    'dining.soup@sbm',
    'dining.salad@sbm',
    'dining.steak@sbm',
    'dining.dessert@sbm',
    'dining.vegetarian@sbm',

    // Grocery Stores, Supermarkets-5411
    'grocery.freshmart@sbm',
    'grocery.marketplace@sbm',
    'grocery.sbmrite@sbm',
    'grocery.foodland@sbm',
    'grocery.greenbasket@sbm',
    'grocery.dailygrocer@sbm',
    'grocery.bulkstore@sbm',
    'grocery.organic@sbm',
    'grocery.corner@sbm',
    'grocery.town@sbm',

    // Travel Agencies - 4722
    'travel.explore@sbm',
    'travel.wander@sbm',
    'travel.adventure@sbm',
    'travel.getaway@sbm',
    'travel.destinations@sbm',
    'travel.escape@sbm',
    'travel.vacation@sbm',
    'travel.tour@sbm',
    'travel.globetrot@sbm',
    'travel.expedition@sbm',

    // Telecommunication Services-4814
   'telecom.mobile@sbm',
    'telecom.internet@sbm',
    'telecom.cable@sbm',
    'telecom.voip@sbm',
    'telecom.fiber@sbm',
    'telecom.data@sbm',
    'telecom.broadband@sbm',
    'telecom.satellite@sbm',
    'telecom.wireless@sbm',
    'telecom.convergence@sbm'
]

export const MCC_CODE={
    "gaming":"5816",
    "dining":"5814",
    "grocery":"5411",
    "travel":"4722",
    "telecom":"4814"
}

//DATE

// Function to format date to 'DD-MM-YYYY HH:mm:ss' format
export function formatDateToDDMMYYYYHHMMSS(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}${day}${year}`;
}


export function formatFullDateWithTimeSWITCH(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Function to format date to 'YYYYMMDD' for filename
export function formatDateForFilename(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}${month}${day}`;
}