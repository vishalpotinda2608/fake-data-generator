"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var csv_writer_1 = require("csv-writer");
var faker_1 = require("@faker-js/faker");
// Generator function to create fake data
function generateData(count, date) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < count)) return [3 /*break*/, 4];
                return [4 /*yield*/, {
                        NPCI_TXN_TYPE: 'TX',
                        NPCI_STATUS: 'U2',
                        TXNID: faker_1.faker.database.mongodbObjectId(),
                        RRN: faker_1.faker.random.numeric(12),
                        NPCI_CODE: faker_1.faker.helpers.arrayElement(['00', 'RB', 'Z9', 'Z9']),
                        DATE: date,
                        TIME: '210230',
                        AMOUNT: faker_1.faker.finance.amount(),
                        A: 'cb9274e72eb6406fba57211045db5fa5@axl',
                        B: '1',
                        C: '1',
                        D: '0',
                        PSP: faker_1.faker.company.name(),
                        E: '0',
                        PAYER_VPA: faker_1.faker.internet.email().replace('.com', ''),
                        F: 'COB',
                        PAYEE_VPA: faker_1.faker.internet.email().replace('.com', ''),
                        MCC: faker_1.faker.random.numeric(4),
                        G: 'SBI',
                        H: 'AIRP0000001',
                        I: '1',
                        J: '111',
                        K: 'AXB',
                        L: "UTIB0003966",
                        M: '1',
                        N: '1'
                    }];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
// Function to format date to 'ddmmyy'
function formatDate(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = String(date.getFullYear()).slice(-2);
    return "".concat(month).concat(day).concat(year);
}
// Generate and write data for each date from April 1 to April 10, 2024
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var startDate, endDate, oneDay, date, formattedDate, fileName, csvWriter, dataGenerator, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startDate = new Date(2024, 3, 1);
                endDate = new Date(2024, 3, 10);
                oneDay = 24 * 60 * 60 * 1000;
                date = startDate;
                _a.label = 1;
            case 1:
                if (!(date <= endDate)) return [3 /*break*/, 6];
                formattedDate = formatDate(date);
                fileName = "npcitxns_".concat(formattedDate, ".csv");
                csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
                    path: fileName,
                    header: [
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
                        { id: 'PAYEE_VPA', title: 'PAYEE_VPA' },
                        { id: 'MCC', title: 'MCC' },
                        { id: 'G', title: 'G' },
                        { id: 'H', title: 'H' },
                        { id: 'I', title: 'I' },
                        { id: 'J', title: 'J' },
                        { id: 'K', title: 'K' },
                        { id: 'L', title: 'L' },
                        { id: 'M', title: 'M' },
                        { id: 'N', title: 'N' }
                    ]
                });
                dataGenerator = generateData(10, formattedDate);
                data = dataGenerator.next();
                _a.label = 2;
            case 2:
                if (!!data.done) return [3 /*break*/, 4];
                return [4 /*yield*/, csvWriter.writeRecords([data.value])];
            case 3:
                _a.sent();
                data = dataGenerator.next();
                return [3 /*break*/, 2];
            case 4:
                console.log("Data generation completed for ".concat(formattedDate, ". File: ").concat(fileName));
                _a.label = 5;
            case 5:
                date = new Date(date.getTime() + oneDay);
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); })();
