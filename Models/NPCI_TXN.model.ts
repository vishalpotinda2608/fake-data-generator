 export interface NPCI_TXN {
    NPCI_TXN_TYPE: string | null;
    NPCI_STATUS: string;
    TXNID: string;
    RRN: string | null;
    NPCI_CODE: any | null;
    DATE: string;
    TIME: string | null;
    AMOUNT: string | number;
    A: any;
    B: any;
    C: any;
    D: any;
    PSP: string | null;
    E: any;
    PAYER_VPA: string | null;
    F: any;
    MCC: string | null;
    PAYEE_VPA: string;
    G: any;
    H: any;
    I: any;
    J: any;
    K: any;
    L: any;
    M: any;
    N: any;
}