const thesesService = require('../services/theses.service');

const addTheses = async (req, res) => {
    try {
   
        const result = await thesesService.addTheses(req.body);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const updateTheses = async (req, res) => {
    try {
        const result = await thesesService.updateTheses(req.body, req.params.id);    
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const getOne = async (req, res) => {
    try {
        const result = await thesesService.getOne(req.params.id);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const getAll = async (req, res) => {
    try {
        const result = await thesesService.getAll();
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const deleteTheses = async (req, res) => {
    try {
        const result = await thesesService.deleteTheses(req.params.id);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

const uploadFile = async (req, res) => {
    try{
        const result = await thesesService.uploadFile(req.file, req.params.id);
        return res.json(result);
    } catch(error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = {
    addTheses,
    getAll,
    getOne,
    updateTheses,
    deleteTheses,
    uploadFile
}