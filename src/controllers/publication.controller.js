const PublicationService = require('../services/publication');
const cloudinary = require('cloudinary').v2;

const service = new PublicationService();


const create = async(req,res) =>{
    try {
        // Subir la imagen a Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Obtener la URL de la imagen cargada desde Cloudinary
        const imageUrl = result.secure_url;
        
        let {userId, description, publication_date, image_url, status} = req.body

        const response = await service.create({
            userId, 
            description, 
            publication_date, 
            image_url: imageUrl, 
            status
        });
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({success:false,message:error.message});
    }
}

const get = async (req,res) =>{
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({success:false,message:error.message});
    }
}


const getById = async (req,res) =>{
    try {
        const {id} = req.params;
        console.log(id)
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({success:false, message:error.message});
    }
}

const getByIdUserPost = async (req,res) =>{
    try {
        const {id} = req.params;
        console.log(id)
        const response = await service.findAlls(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({success:false, message:error.message});
    }
}

const update = async (req,res) =>{
    try {

        // Subir la imagen a Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Obtener la URL de la imagen cargada desde Cloudinary
        const imageUrl = result.secure_url;
        
        let {userId, description, publication_date, image_url, status} = req.body
        const {id} = req.params;

        const response= await service.update(id,{
            userId, 
            description, 
            publication_date, 
            image_url: imageUrl, 
            status
        });
        res.json(response);
    } catch (error) {
        res.status(500).send({success:false, message:error.message});
    }
}

const _delete = async (req,res) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        const response = await service.deleted(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({success:false,message:error.message});
    }
}

module.exports ={
    create,get,getById,update,_delete, getByIdUserPost
};