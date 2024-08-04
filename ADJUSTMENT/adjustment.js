"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdjustmentData = void 0;
var faker_1 = require("@faker-js/faker");
var constant_1 = require("../Constants/constant");
// SWITCH
function generateAdjustmentData(count, date, commonData) {
    var i, _a, TXNID, AMOUNT, NPCI_CODE, uid, adjType, rem, ben;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < count)) return [3 /*break*/, 4];
                _a = commonData[i], TXNID = _a.TXNID, AMOUNT = _a.AMOUNT, NPCI_CODE = _a.NPCI_CODE;
                if (!(NPCI_CODE[0] == 'RB' || NPCI_CODE[0] == '0')) return [3 /*break*/, 3];
                uid = faker_1.faker.random.numeric(10);
                adjType = faker_1.faker.helpers.arrayElement(constant_1.adjustmentType);
                rem = faker_1.faker.helpers.arrayElement(['SBL', constant_1.beneficiaryTypes[Math.floor(Math.random() * 20)], 'SBL']);
                ben = faker_1.faker.helpers.arrayElement(constant_1.beneficiaryTypes);
                return [4 /*yield*/, {
                        "Txnuid": faker_1.faker.random.numeric(10),
                        "Uid": uid,
                        "Adjdate": date,
                        "Adjtype": adjType,
                        "Remitter": rem,
                        "Beneficiery": ben,
                        "Response": faker_1.faker.helpers.arrayElement(['0', 'RB', 'RR', 'R9']),
                        "Txndate": date,
                        "Txntime": "".concat(new Date(date).getHours(), ":").concat(new Date(date).getMinutes(), ":").concat(new Date(date).getSeconds()),
                        "RRN": faker_1.faker.random.numeric(12),
                        "Terminalid": "159332",
                        "Ben_Mobile_No": "9".concat(faker_1.faker.random.numeric(12)),
                        "Rem_Mobile_No": "7".concat(faker_1.faker.random.numeric(12)),
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
                        "Adjref": "".concat(rem, "/").concat(ben, "/").concat(adjType, "/").concat(uid),
                        "Bankadjref": faker_1.faker.helpers.arrayElement(['DRC', 'Credit Adjustment', 'RET', 'TCC', 'UPI']),
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
                        "Transaction Indicator": faker_1.faker.helpers.arrayElement(['PAY', 'COLLECT', "PAY"]),
                        "Beneficiary Account number": "90".concat(faker_1.faker.random.numeric(17)),
                        "Remitter Account number": "93".concat(faker_1.faker.random.numeric(17)),
                        "Aadhar Number": "",
                        "Mobile Number": "93".concat(faker_1.faker.random.numeric(12)),
                        "Payer PSP": ben,
                        "Payee PSP": ben,
                        "UPI Transaction ID": TXNID,
                        "Virtual Address": "",
                        "Dispute Flag": faker_1.faker.helpers.arrayElement(['DRC', 'PBRB', 'PR2C', 'TCC', 'RRC']),
                        "Reason Code": faker_1.faker.helpers.arrayElement(['104', '102', '103', '108', '109', '501', 'U008', 'U010']),
                        "MCC": faker_1.faker.random.numeric(4),
                        "Originating Channel": faker_1.faker.helpers.arrayElement(['IDIR', 'UMOB']),
                    }];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.generateAdjustmentData = generateAdjustmentData;
