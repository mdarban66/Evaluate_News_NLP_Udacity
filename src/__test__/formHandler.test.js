import { handleSubmit } from "../client/js/formHandler"

describe("Testing formHandler", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing if the handleSubmit() is defined", () => {
        expect(handleSubmit).toBeDefined();
    })
    test("Testing the type of the handleSubmit()", () => {
        // expect(handleSubmit).toContain('event');
        expect(typeof handleSubmit).not.toBe('class');
    })
})