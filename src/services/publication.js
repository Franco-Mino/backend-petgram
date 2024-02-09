const {models} = require('../libs/sequelize');


class PublicationService{
    constructor(){}

    async find(){
        const res = await models.Publication.findAll();
        return res;
    }
    async findOne(id){
        const res = await models.Publication.findByPk(id);
        return res;
    }
    
    async findAlls(id){
        const res = await models.Publication.findAll({
            where: {
                userId: id 
            }
        });
        return res;
    }
    async create(data){
        const res = await models.Publication.create(data);
        return res;
    }


    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async _deleted(id,data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res
    }
}

module.exports = PublicationService;