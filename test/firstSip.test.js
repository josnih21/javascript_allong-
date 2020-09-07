const randomFunct = () => 0;

const sumFunct = (firstNumber, secondNumber) => firstNumber + secondNumber;

describe('First sip tests', () => {
    const testFunct = randomFunct;
    it('Functions testing', () => {
        expect(randomFunct).toEqual(testFunct);
    });

    it('Functions testing', () => {
        expect((() => 0) === (() => 0)).toEqual(false);
    });

    it('Sum equals', () => {
        expect(sumFunct(1, 2)).toEqual(3);
    })
});