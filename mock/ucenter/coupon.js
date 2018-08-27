// https://github.com/Marak/faker.js/wiki
const faker = require('faker');

let list = [];
for (let i = 0; i < 10; i++) {
  list.push({
    available: 1,
    couponCount: 1000,
    couponId: '00620180718141317223N4A6sTep068E',
    couponRemainCount: 1000,
    couponValid: '',
    couponValue: faker.random.number({ max: 1000 }),
    currency: 'USD',
    info: 'test123',
    name: 'S9矿机优惠券',
    offerType: faker.random.arrayElement([0, 1]),
    regionTypeStr: 'Abroad sales',
    ruleId: '10620180716111028957jgUB6i700670',
    timeInfo: 'None',
    useCount: 0,
  });
}

module.exports = {
  code: 0,
  data: { list },
};
