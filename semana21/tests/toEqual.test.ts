describe("Testando um objeto com toEqual", () => {
    test("Quando o usuário passa o email de cadastro correto", () => {
        const userBody = {
            email: "astrodev@email.com"
        }

        const userDatabase = {
            email: "astrodev@email.com"
        }

        expect(userBody).toEqual(userDatabase)
    })
})