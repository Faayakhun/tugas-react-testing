import {multiply, makeLowerCase} from './helperFunction'

test("testing function multiply", ()=> {
    expect(multiply(1,2)).toBe(2)
    expect(multiply(10,5)).toBe(50)
})

test ("Testing huruf kecil", ()=>{
    expect (makeLowerCase('Kucing')).toBe("kucing")
})