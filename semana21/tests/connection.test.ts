import { connection } from '../src/index'

describe("Testando a connection", () => {
    const user = { name: "Astrodev" }

    beforeAll(async () => {
        await connection.raw(`CREATE TABLE testUsers (
            name VARCHAR(255) NOT NULL
        );`)
    })

    test("Deve retornar um array de tabelas", async () => {
        const [result] = await connection.raw(`SHOW TABLES;`)
        expect(result.length).toBeGreaterThan(0)
    })

    test("Deve criar usuário com sucesso", async () => {
        await connection("testUsers").insert(user)
    })

    test("Deve retornar erro quando não for passado um nome de usuário", async () => {
        expect.assertions(1)

        const body = { name: undefined }
        const user = { name: body.name }

        try {
            await connection("testUsers").insert(user)
        } catch (error) {
            const err = error as any
            expect(err.code).toBe("ER_NO_DEFAULT_FOR_FIELD")
        }
    })

    test("Não deve retornar erro quando for passado um nome de usuário válido", async () => {
        expect.assertions(0)

        const body = { name: "Fulano" }
        const user = { name: body.name }

        try {
            await connection("testUsers").insert(user)
        } catch (error) {
            const err = error as any
            expect(err.code).toBe("ER_PARSE_ERROR")
        }
    })

    afterAll(async () => {
        await connection.raw(`DROP TABLE testUsers;`)
        await connection.destroy()
    })

    // afterEach(() => {})
    // beforeEach(() => {})
})