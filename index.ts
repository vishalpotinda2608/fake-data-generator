import * as fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { faker } from '@faker-js/faker';

interface Device {
    deviceSrno: any;
    imei: number;
    model: any;
    simMobileNo: string;
    isLinkLocation: boolean;
    merchantId: string;
    billingId: string;
    deliveryDate: number;
    dispatchedDate: number;
    location: string;
    uploadDate: number;
}

function* generateData(count: number): IterableIterator<Device> {
    for (let i = 0; i < count; i++) {
        yield {
            deviceSrno: faker.random.alphaNumeric(8),
            imei: faker.datatype.number(),
            model: faker.vehicle.model(),
            simMobileNo: faker.phone.number(),
            isLinkLocation: faker.datatype.boolean(),
            merchantId: faker.random.alphaNumeric(8),
            billingId: faker.random.alphaNumeric(8),
            deliveryDate: faker.datatype.number(),
            dispatchedDate: faker.datatype.number(),
            location: faker.address.city(),
            uploadDate: faker.datatype.number()
        };
    }
}

const dataGenerator = generateData(100000);

const csvWriter = createObjectCsvWriter({
    path: 'data.csv',
    header: [
        { id: 'deviceSrno', title: 'DeviceSrno' },
        { id: 'imei', title: 'IMEI' },
        { id: 'model', title: 'Model' },
        { id: 'simMobileNo', title: 'SimMobileNo' },
        { id: 'isLinkLocation', title: 'IsLinkLocation' },
        { id: 'merchantId', title: 'MerchantId' },
        { id: 'billingId', title: 'BillingId' },
        { id: 'deliveryDate', title: 'DeliveryDate' },
        { id: 'dispatchedDate', title: 'DispatchedDate' },
        { id: 'location', title: 'Location' },
        { id: 'uploadDate', title: 'UploadDate' },
    ]
});

(async () => {
  let data = dataGenerator.next();
  while (!data.done) {
      await csvWriter.writeRecords([data.value]);
      data = dataGenerator.next();
  }
  console.log('Data generation completed.');
})();
