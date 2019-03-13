'use strict';

const greet = require('../lib/greet.js');
const math = require('../lib/add.js');
const faker = require('faker');

describe('greet', ()=>{
    const name = faker.name.firstName();
    it('says hello when greeted', ()=>{
        expect(greet.greet(name)).toEqual(`Hello ${name}`);
    });
    it('returns null when given a non string or empthy string value',()=>{
        expect(greet.greet(7)).toBeNull();
        expect(greet.greet()).toBeNull();
        expect(greet.greet('')).toBeNull();
    });
});

describe('math',()=> {
    const allNums = new testArray(10);
    it('adds up any amount of numbers only correctly', () => {
        expect(math.plus(allNums.arr)).toEqual(allNums.expectAdd);
        expect(math.plus('q')).toBeNull();
        expect(math.plus([10])).toEqual(10);
    });

});

describe ('math',()=>{
    let allNums = new testArray(10);
    it('subtracts all numbers effectively', () => {
       expect(math.subtract(allNums.easyVal)).toEqual(-1);
       expect(math.subtract(allNums.arr)).toEqual(allNums.expectSub);
       expect(math.subtract('q')).toBeNull();
   });
});

describe('math',()=>{
    var allNums= new testArray(10);
    it('multiplies an array of all numbers correctly',() => {
        expect(math.multiply(allNums.easyVal)).toEqual(6);
        expect(math.multiply(allNums.arr)).toEqual(allNums.expectMultiply);
    })
})

function testArray (size){
    this.length = size;//this variable controls the length of the array passed in to our tests
    this.easyVal=[2,3];
    let firstRand= faker.random.number();
    this.str='im not a number';
    this.arr= [];
    this.arr.push(firstRand);
    this.expectAdd=firstRand;
    this.expectSub=firstRand;
    this.expectMultiply=firstRand;
    this.expectDivide=firstRand;

    for (let i = 0 ;i < this.length; i++) {
        let rand = faker.random.number();
        this.arr.push(rand);
        this.expectAdd+=rand;
        this.expectSub-=rand;
        this.expectMultiply*=rand;
        this.expectDivide/=rand;
    }
}