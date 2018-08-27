// https://github.com/Marak/faker.js/wiki
const faker = require('faker');

module.exports = {
  code: '0',
  message: '',
  isError: 'false',
  data: {
    subId: '0012017120700001', //订单号
    payCurrency: 'USD', //支付币种
    payStatus: 'Pending', //支付状态
    lastPayTime: 1534041180781, //最后一次付款时间 空的时候表示未曾付款
    expireTime: Date.now() + 1000 * 60, //过期时间  空的时候代表不过期
    orderAmount: faker.commerce.price(), //订单应付总金额
    minDownAmount: faker.commerce.price(), //最小应付金额
    paidAmount: faker.commerce.price(), //已付款
    balanceAmount: faker.commerce.price(), //剩余支付金额
    showPaypal: false, // 是否支持paypal支付
    fee: faker.commerce.price(), // paypal费用
    legalCurrency: 'USD', // 订单语言环境对应的法定货币
  },
};
