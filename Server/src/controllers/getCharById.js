const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) =>{
    const {id} = req.params;
    try {
        const response = await axios(`${URL}${id}`)
        const data = response.data
        let char = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            status: data.status,
            image: data.image,
        }

        return res.status(200).json(char)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getCharById}
