const { calc, discount } = require('../calc');
const { DefaultRate } = require('../src/ride/calculator/rate/rules/default.rate');
const { OvernightRate } = require('../src/ride/calculator/rate/rules/overnight.rate');
const { SundayRate } = require('../src/ride/calculator/rate/rules/sunday.rate');
const { Ride } = require('../src/ride/ride');

describe('calc function test', () => {
  test('calc ride with overnight rate', () => {
    const distance = 1;
    const date = new Date(2023, 1, 15, 22, 0, 0);
    const rate = new OvernightRate();
    expect(calc(distance, date)).toBe(rate.value);
  });

  test('calc ride with sunday rate', () => {
    const distance = 1;
    const date = new Date(2023, 1, 19, 20, 0, 0);
    const rate = new SundayRate();

    expect(calc(distance, date)).toBe(rate.value);
  });

  test('calc ride with default rate', () => {
    const distance = 1;
    const date = new Date(2023, 1, 15, 20, 0, 0);
    const rate = new DefaultRate();

    expect(calc(distance, date)).toBe(rate.value);
  });
});

describe('discount function tests', () => {
  test('discount applied in ride with overnight rate after do 10 rides', () => {
    const distance = 1;
    const date = new Date(2023, 1, 15, 22, 0, 0);
    const numRidesPerformedByCustomer = 10;
    const ride = new Ride(distance, date);
    ride.setAmount(1);
    discount(ride, numRidesPerformedByCustomer);

    expect(ride.getTotal()).toBe(0.9);
  });

  test('discount not applied in ride with overnight rate before do 10 rides', () => {
    const distance = 1;
    const date = new Date(2023, 1, 15, 22, 0, 0);
    const numRidesPerformedByCustomer = 9;
    const ride = new Ride(distance, date);
    ride.setAmount(1);
    discount(ride, numRidesPerformedByCustomer);

    expect(ride.getTotal()).toBe(1);
  });

  test('discount not applied in ride not overnight rate after do 10 rides', () => {
    const distance = 1;
    const date = new Date(2023, 1, 15, 20, 0, 0);
    const numRidesPerformedByCustomer = 10;
    const ride = new Ride(distance, date);
    ride.setAmount(1);
    discount(ride, numRidesPerformedByCustomer);

    expect(ride.getTotal()).toBe(1);
  });
});
