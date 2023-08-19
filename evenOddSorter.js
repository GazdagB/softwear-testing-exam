const evenOddSorter = (numbers) => {
    const evenNumbers = [];
    const oddNumbers = [];
    const notInteger = [];
    const notANumber = [];

    numbers.forEach((num) => {
        if (typeof num !== 'number' || isNaN(num)) {
            notANumber.push(num);
        } else if (!Number.isInteger(num)) {
            notInteger.push(num);
        } else if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    });

    return {
        even: evenNumbers,
        odd: oddNumbers,
        notInteger: notInteger,
        notANumber: notANumber,
    };
};

module.exports = evenOddSorter;