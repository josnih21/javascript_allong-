const randomFunct = () => 0;

const sumFunct = (firstNumber, secondNumber) => firstNumber + secondNumber;

const codeStatementWithoutReturning = () => { 2 + 2 };

const codeStatementImplicitReturn = () => 2 + 2;
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
    });

    it('A block of code returning undefined', () => {
        expect(codeStatementWithoutReturning()).toEqual(undefined);
    });

    it('One code statement return the result into arrow func', () => {
        expect(codeStatementImplicitReturn()).toEqual(4);
    });

    it('Function evaluates inner function', () => {
        expect((() => () => true)()()).toEqual(true);
    });
    it('Function argument to calculate diameter', () => {
        expect(((diameter) => diameter * 3.14159265)(2)).toEqual(6.2831853);
    });
    it('Call by value behaviour', () => {
        expect(((diameter) => diameter * 3.14159265)(1 + 1)).toEqual(6.2831853);
    });

});