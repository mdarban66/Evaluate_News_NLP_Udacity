const nameChecker = require("./nameChecker")
// @ponicode
describe("nameChecker.checkForName", () => {
    test("0", () => {
        let callFunction = () => {
            nameChecker.checkForName("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            nameChecker.checkForName("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            nameChecker.checkForName("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            nameChecker.checkForName("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            nameChecker.checkForName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
