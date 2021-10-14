import { isEven } from '.'

const testIsEven = (input: number, expected: boolean): any => {
    const result = isEven(input)
    if (result === expected) {
        console.log("Teste passou!")
    } else {
        console.log("Teste falhou!")
    }

    return {
        input,
        result,
        expected
    }
}

console.log("====== TEST SUITE (testando isEven) ===========")
console.log(testIsEven(2, true))
console.log(testIsEven(4, true))
console.log(testIsEven(3, false))
console.log(testIsEven(5, false))
console.log(testIsEven(4.4, false))
console.log("====== TEST SUITE ===========")