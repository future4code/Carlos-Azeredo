import { isEven } from '../src/index'

describe("Testando a função isEven", () => {
    test("Quando for passado um número inteiro par, é retornado true", () => {
        const result = isEven(2)
        expect(result).toBe(true)
    })

    test("Quando for passado um número inteiro ímpar, é retornado false", () => {
        const result = isEven(3)
        expect(result).toBe(false)
    })

    test("Quando for passado um número não-inteiro, é retornado false", () => {
        const result = isEven(4.4)
        expect(result).toBe(false)
    })

    test("Quando for passado um número não-inteiro, é retornado false", () => {
        const result = isEven(4.4)
        expect(result).not.toBe(true)
    })
})