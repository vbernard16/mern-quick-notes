const Notes = require('../../models/notes')

async function create(req, res) {
        try {
            const notes = await Notes.create(req.body)
            res.status(200).json(notes) 
        } catch (error) {
            res.status(400).json(error)
        }
    }

    module.exports = { create }