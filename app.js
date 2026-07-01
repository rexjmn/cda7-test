const express = require ('express')

    const app = express()  
    app.use(express.json()) // pour parser le body en json
    app.post('/login', (req,res)=>{
        //destructuration du body
        const {email,password} = req.body  //remplace les deux lignes ci-dessous
        //const email = req.body.email
        //const password = req.body.password

        if (!verifyEmail(email) || !verifyPassword(password)) {
            return res.status(400).json({message: "Email ou mot de passe invalide !"})
        }
        res.status(200).json({message: "Connexion réussie !"})
    })

// le return va retouner soit true soit false
function verifyEmail(email) {
   return email.includes('@')
}

function verifyPassword(password) {
   return password.length >= 8
}

module.exports = {verifyEmail, verifyPassword,app}