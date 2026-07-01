const request = require('supertest');
const {app} = require('../../app.js');

describe("tester la route login", () => {
    it("devrait retourner 200 si l'email contient @ etpassword >=8",async () => {
   
        const res = await request(app)
            .post('/login')
            .send({email: "test@exemple.fr", password: "12345678"})
            .expect(200) //expect de la requete
        expect(res.body.message).toBe("Connexion réussie !") //expect du body
    })
})