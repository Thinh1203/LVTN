const userServices = require('../services/user.service');


const addUser = async (req, res) => {
    try {
    
        const result = await userServices.addUser(req.body);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const update = async (req, res) => {
    try { 
        const result = await userServices.update(req.file, req.body,req.params.id);    
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const getOne = async (req, res) => {
    try {
        const result = await userServices.getOne(req.params.id);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const getAll = async (req, res) => {
    try {
        // console.log(res.locals.user.id);
        const result = await userServices.getAll();
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const deleteOne = async (req, res) => {
    try {
        const result = await userServices.deleteOne(req.params.id);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const updatePassword = async (req, res) => {
    try {
        const result = await userServices.updatePassword(req.params.id, req.body);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}
module.exports = {
    addUser,
    getAll,
    getOne,
    update,
    deleteOne,
    updatePassword
}