const {app} = require('./app');
//pas besoin d'importer express car avec l'objet au dessus a hérité de toutes les méthodes

app.listen(3000, () => 
    console.log('Server tourne sur le port 3000'))