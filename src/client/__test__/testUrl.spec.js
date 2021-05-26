import { checkForURL } from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect( checkForURL).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect( checkForURL("invalid url")).toBeFalsy()
    }),

    test('Testing the checkUrl function return true for valid url', () => {
        expect( checkForURL("https://www.youtube.com")).toBeTruthy()
    })

})
