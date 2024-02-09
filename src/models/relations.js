//importar todas las tablas aqui abajo
const { User } = require('./Users')
const { Publication } = require('./Publication');

function setupRelations(){
    Publication.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
        constraints: true,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        name: 'publication_userId_fkey'
    });
}

module.exports = setupRelations;