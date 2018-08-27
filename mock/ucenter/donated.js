// https://github.com/Marak/faker.js/wiki
const faker = require('faker');

let list = [];
for (let i = 0; i < 10; i++) {
  list.push({
    couponCount: faker.random.number({ max: 100 }),
    couponId: '00620180718141317223N4A6sTep068E',
    couponValue: faker.random.number({ min: 100, max: 1000, precision: 100 }),
    createTimeStamp: 1532429648000,
    createTimeStr: '2018-07-24 18:54:08',
    currency: 'USD',
    info: 'test123',
    name: 'S9矿机优惠券',
    status: '0',
    tranId: '01020180724185407817C7D6Jdsx068F',
    type: '0',
    userIdFrom: 'lovemoon@yeah.net',
    userIdTo: '18610503121@163.com',
  });
}

module.exports = {
  code: 0,
  data: { list },
};
