const { calc, discount } = require("../calc");
const { RatesEnum } = require("../src/service/ride/calculator/rate.enum");
const { Ride } = require("../src/service/ride/ride");


describe('calc function test', () => {
    test('calc ride with overnight rate', () => {
        const distance = 1;
        const date = new Date(2023, 1, 15, 22, 0, 0);
        
        expect(calc(distance, date)).toBe(RatesEnum.OVERNIGHT.value);
    })

    test('calc ride with sunday rate', () => {
        const distance = 1;
        const date = new Date(2023, 1, 19, 20, 0, 0);

        expect(calc(distance, date)).toBe(RatesEnum.SUNDAY.value);
    })

    test('calc ride with default rate', () => {
        const distance = 1;
        const date = new Date(2023, 1, 15, 20, 0, 0);
        
        expect(calc(distance, date)).toBe(RatesEnum.DEFAULT.value);
    })
})

describe('discount function tests', () => {
    test('discount applied in ride with overnight rate after do 10 rides', () => {
        const distance = 1;
        const date = new Date(2023, 1, 15, 22, 0, 0);
        const numRidesPerformedByCustomer = 10;
        const ride = new Ride(distance, date);
        ride.setAmount(1);
        
        expect(discount(ride, numRidesPerformedByCustomer)).toBe(0.9);
    })

    test('discount not applied in ride with overnight rate before do 10 rides', () => {
        const distance = 1;
        const date = new Date(2023, 1, 15, 22, 0, 0);
        const numRidesPerformedByCustomer = 9;
        const ride = new Ride(distance, date);
        ride.setAmount(1);
        
        expect(discount(ride, numRidesPerformedByCustomer)).toBe(1);
    })

    test('discount not applied in ride not overnight rate after do 10 rides', () => {
        const distance = 1;
        const date = new Date(2023, 1, 15, 20, 0, 0);
        const numRidesPerformedByCustomer = 10;
        const ride = new Ride(distance, date);
        ride.setAmount(1);

        expect(discount(ride, numRidesPerformedByCustomer)).toBe(1);
    })
})