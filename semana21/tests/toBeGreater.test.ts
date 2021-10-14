describe("Testando números com toBeGreaterThan", () => {
    test("A idade do usuário deve ser maior que 17", () => {
        const user = {
            name: "Astrodev",
            age: 18
        }

        expect(user.age).toBeGreaterThan(17)
    })
})

describe("Testando números com toBeGreaterThanOrEqual", () => {
    test("A idade do usuário deve ser maior ou igual a 18", () => {
        const user = {
            name: "Astrodev",
            age: 18
        }

        expect(user.age).toBeGreaterThanOrEqual(18)
    })
})