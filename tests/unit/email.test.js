const {verifyEmail} = require('../../app.js')

describe("Fonction verifyEmail", () => {
    it("devrait retourner true si email contient un '@'", () => {
        expect((verifyEmail)('test@exemple.fr')).toBe(true);
    })

    it("devrait retourner false si email ne contient pas un '@'", () => {
        expect((verifyEmail)('testexemple.fr')).toBe(false);
    })
})

