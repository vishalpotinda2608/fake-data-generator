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
                        A: 'S75960940',
                        DATE: date,
                        AMOUNT: faker_1.faker.finance.amount(),
                        B: '04-04-2024',
                        C: '',
                        D: '2001',
                        E: '2650',
                        F: '20012207843065',
                        G: '27111001182650',
                        RRN: faker_1.faker.random.numeric(12),
                        H: '04-04-2024 01:38:36',
                        TXNID: faker_1.faker.database.mongodbObjectId(),
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
// Generate and write the data to CSV
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var startDate, endDate, oneDay, date, formattedDate, formattedFilenameDate, filename, csvWriter, dataGenerator, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startDate = new Date(2024, 3, 1, 10, 30, 38);
                endDate = new Date(2024, 3, 2, 10, 30, 38);
                oneDay = 24 * 60 * 60 * 1000;
                date = startDate;
                _a.label = 1;
            case 1:
                if (!(date <= endDate)) return [3 /*break*/, 6];
                formattedDate = formatDateToDDMMYYYYHHMMSS(date);
                formattedFilenameDate = formatDateForFilename(date);
                filename = "cbs_".concat(formattedFilenameDate, ".csv");
                csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
                    path: filename,
                    header: [
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
                        { id: 'TXNID', title: 'TXNID' }
                    ],
                });
                dataGenerator = generateData(500, formattedDate);
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
                console.log("Data generation completed for ".concat(formattedDate, ". File: ").concat(filename));
                _a.label = 5;
            case 5:
                date = new Date(date.getTime() + oneDay);
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); })();
