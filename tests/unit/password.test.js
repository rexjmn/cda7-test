const {verifyPassword} = require('../../app.js')

describe("Fonction verifyPassword", () => {
    test("devrait retourner true si la longueur du mot de passe est supérieure ou égale à 8", () => {
        expect((verifyPassword)('12345678')).toBe(true);
    })

    test("devrait retourner false si la longueur du mot de passe est strictement inférieure à 8", () => {
        expect((verifyPassword)('1234567')).toBe(false);
    })
})
