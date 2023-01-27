import { add } from './../ts/functions';

//test(name: string, fn);
test("Should add numbers correctly", () => {
    //1. Arrange
    let small = 4;
    let big = 4711;
    let sum = 0;

    //2. Act
    sum = add(small, big);

    //3. Assert - expect(expectedValue: any).matchers(actualValue); 
    expect(sum).toBe(4715);
}); 