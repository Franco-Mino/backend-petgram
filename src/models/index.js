// aqui llamaremos a todos los modelos

const {User, UserSchema} = require('./Users')
const {Publication, PublicationSchema} = require('./Publication')
const setupRelations = require('./relations');


function setupModels(sequelize){

    //inicialización del modelo user
    User.init(UserSchema, User.config(sequelize));  
    
    //inicialización del modelo Publicacion
    Publication.init(PublicationSchema, Publication.config(sequelize));


    // configurar relaciones entre modelos
    setupRelations();
}


module.exports = setupModels;