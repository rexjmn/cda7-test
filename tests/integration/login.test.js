const request = require('supertest');
const {app} = require('../../app.js');

describe("tester la route login", () => {
    it("Devrait retourner 200 si l'email contient @ etpassword >=8",async () => {
   
        const res = await request(app)
            .post('/login')
            .send({email: "test@exemple.fr", password: "12345678"})
            .expect(200) //expect de la requete
        expect(res.body.message).toBe("Connexion réussie !") //expect du body
    })
    it("Devrait retourner 400 si l'email ne contient pas @ ou le password est <8",async () => {
        const res = await request(app)
            .post('/login')
            .send({email: "testexemple.fr", password: "1234567"})
            .expect(400) //expect de la requete
        expect(res.body.message).toBe("Email ou mot de passe invalide !") //expect du body
    })
})