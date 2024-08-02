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
var npci_1 = require("./NPCI/npci");
var switch_1 = require("./SWITCH/switch");
var cbs_1 = require("./CBS/cbs");
var constant_1 = require("./Constants/constant");
// Generate common TXNID and AMOUNT once and reuse
var generateCommonData = function (count) {
    return Array.from({ length: count }, function () { return ({
        TXNID: faker_1.faker.database.mongodbObjectId(),
        AMOUNT: faker_1.faker.finance.amount(),
        NPCI_CODE: faker_1.faker.helpers.arrayElement([['00', 'SUCCESS',], ['RB', 'SUCCESS'], ['Z9', 'FAILURE',], ['Z7', 'FAILURE']])
    }); });
};
var commonData = generateCommonData(10);
// Function to format date to 'DD-MM-YYYY HH:mm:ss' format
function formatDateToDDMMYYYYHHMMSS(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    return "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
// Function to format date to 'YYYYMMDD' for filename
function formatDateForFilename(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return "".concat(year).concat(month).concat(day);
}
function writeDataToCSV(filename, headers, dataGenerator) {
    return __awaiter(this, void 0, void 0, function () {
        var csvWriter, batchSize, batch, dataArray, _i, dataArray_1, record, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
                        path: filename,
                        header: headers,
                    });
                    batchSize = 1000;
                    batch = [];
                    dataArray = Array.from(dataGenerator());
                    _i = 0, dataArray_1 = dataArray;
                    _a.label = 1;
                case 1:
                    if (!(_i < dataArray_1.length)) return [3 /*break*/, 7];
                    record = dataArray_1[_i];
                    batch.push(record);
                    if (!(batch.length >= batchSize)) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, csvWriter.writeRecords(batch)];
                case 3:
                    _a.sent();
                    console.log("Written ".concat(batch.length, " records to ").concat(filename));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error writing records to ".concat(filename, ":"), error_1);
                    return [3 /*break*/, 5];
                case 5:
                    batch = [];
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7:
                    if (!(batch.length > 0)) return [3 /*break*/, 11];
                    _a.label = 8;
                case 8:
                    _a.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, csvWriter.writeRecords(batch)];
                case 9:
                    _a.sent();
                    console.log("Written final ".concat(batch.length, " records to ").concat(filename));
                    return [3 /*break*/, 11];
                case 10:
                    error_2 = _a.sent();
                    console.error("Error writing final records to ".concat(filename, ":"), error_2);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
// Generate date for files
var currentDate = new Date();
var formattedDate = formatDateToDDMMYYYYHHMMSS(currentDate);
var filenameDate = formatDateForFilename(currentDate);
writeDataToCSV("npc_txns_".concat(filenameDate, ".csv"), constant_1.npciHeaders, function () { return (0, npci_1.generateNpciData)(10, formattedDate, commonData); });
writeDataToCSV("switch_txns_".concat(filenameDate, ".csv"), constant_1.switchHeaders, function () { return (0, switch_1.generateSwitchData)(10, formattedDate, commonData); });
writeDataToCSV("cbs_txns_".concat(filenameDate, ".csv"), constant_1.cbsHeaders, function () { return (0, cbs_1.generateCbsData)(10, formattedDate, commonData); });
