describe("Testando um array com toContain", () => {
    test("Deve passar quando existir o número 7 dentro do array", () => {
        const arr = [1, true, 3, undefined, null, "6", 7]

        expect(arr).toContain(7)
    })
})

describe("Testando um array com toContainEqual", () => {
    test("Deve passar quando existir o objeto user dentro do array", () => {
        const users = [
            {
                name: "Astrodev"
            },
            {
                name: "Bananinha"
            }
        ]

        const bananinha = {
            name: "Bananinha"
        }

        expect(users).toContainEqual(bananinha)
    })
})