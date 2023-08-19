const evenOddSorter = require('./evenOddSorter'); 

describe('Even-Odd Number Sorter',()=>{
    test('Should Correctly separate even and Odd numbers',()=>{
        const numbers = [1,2,3,4,5,6,7,8,9,10]; 
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual([2,4,6,8,10]);
        expect(result.odd).toEqual([1,3,5,7,9,]); 
        expect(result.notANumber).toEqual([])
        expect(result.notInteger).toEqual([])
    });

    test('Should handle and give back an empty Array',()=>{
        const numbers = []; 
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual([]);
        expect(result.odd).toEqual([]);
        expect(result.notANumber).toEqual([])
        expect(result.notInteger).toEqual([])
    })
    test('Should handle an Array with only even Numbers', ()=>{
        const numbers = [2,4,6,8,10];
        const result = evenOddSorter(numbers);
        
        expect(result.even).toEqual([2,4,6,8,10]); 
        expect(result.odd).toEqual([]);
        expect(result.notANumber).toEqual([])
        expect(result.notInteger).toEqual([])

    })

    test('Should handle an Array with only Odd Numbers', ()=>{
        const numbers = [1,3,5,7,9];
        const result = evenOddSorter(numbers);
        
        expect(result.even).toEqual([]); 
        expect(result.odd).toEqual([1,3,5,7,9]);
        expect(result.notANumber).toEqual([])
        expect(result.notInteger).toEqual([])

    })

    test("Should Pass non Integers into the nonInteger Array",()=>{
        const numbers = [1,2,3,4,5,5.5,6,6.5,7,8,9,10];
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual([2,4,6,8,10])
        expect(result.odd).toEqual([1,3,5,7,9])
        expect(result.notInteger).toEqual([5.5,6.5])
        expect(result.notANumber).toEqual([])
        
    })

    test("0 Should be an Even number:",()=>{
        const numbers = [0];
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual([0])
        expect(result.odd).toEqual([])
        expect(result.notANumber).toEqual([])
        expect(result.notInteger).toEqual([])
    })

    test("Should be working on a Massive sized Array",()=>{
        const numbers = Array.from({ length: 1000000 }, (_, index) => index + 1);
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual(numbers.filter(num => num % 2 === 0)); 
        expect(result.odd).toEqual(numbers.filter(num => num % 2 !== 0))


    })

    test("Should Pass NaN items into the notANumber Array: STRINGS",()=>{
        const numbers = [1,2,3,4,5,6,7,8,9,10,"Saturday","Madagascar"];
        const result = evenOddSorter(numbers); 

        expect(result.even).toEqual([2,4,6,8,10])
        expect(result.odd).toEqual([1,3,5,7,9])
        expect(result.notANumber).toEqual(["Saturday","Madagascar"])
        expect(result.notInteger).toEqual([])
    })


    test("Should handle non-integer numbers correctly: BOOLEANS", () => {
        const numbers = [1, 2, '3', false, true, 5.5];
        const result = evenOddSorter(numbers);
    
        expect(result.even).toEqual([2]);
        expect(result.odd).toEqual([1]);
        expect(result.notANumber).toEqual(['3', false, true]);
        expect(result.notInteger).toEqual([5.5]);
    });

    test("Should handle non-integer numbers correctly: BOOLEANS & STRINGS only", () => {
        const numbers = [false, true,"Saturday","Madagascar",'3'];
        const result = evenOddSorter(numbers);
    
        expect(result.even).toEqual([]);
        expect(result.odd).toEqual([]);
        expect(result.notANumber).toEqual([false, true,"Saturday","Madagascar",'3']);
        expect(result.notInteger).toEqual([]);
    });

    

})