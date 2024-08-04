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
exports.generateSwitchData = void 0;
var faker_1 = require("@faker-js/faker");
var constant_1 = require("../Constants/constant");
// SWITCH
function generateSwitchData(count, date, commonData) {
    var i, _a, TXNID, AMOUNT, NPCI_CODE, PAYEE_VPA, PAYER_VPA;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < count)) return [3 /*break*/, 4];
                _a = commonData[i], TXNID = _a.TXNID, AMOUNT = _a.AMOUNT, NPCI_CODE = _a.NPCI_CODE, PAYEE_VPA = _a.PAYEE_VPA, PAYER_VPA = _a.PAYER_VPA;
                return [4 /*yield*/, {
                        'Date of txn': date,
                        Amount: AMOUNT,
                        'Resp Code': faker_1.faker.helpers.arrayElement(['S96', 'U09', 'U30', 'U31', 'U67', 'U78', '\N']),
                        'Status': NPCI_CODE[1],
                        RRN: faker_1.faker.random.numeric(12),
                        'Ext id': faker_1.faker.string.uuid(),
                        'Payee Vpa': PAYEE_VPA,
                        'Txn Note': faker_1.faker.helpers.arrayElement(['payMerchant', 'Person', 'PayMerchant']),
                        'Payer UPI ID': PAYER_VPA,
                        'PayerName': '\N',
                        "Txn Id": TXNID,
                        MCC: constant_1.MCC_CODE[PAYEE_VPA.split('.')[0]],
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
exports.generateSwitchData = generateSwitchData;
