let myFavorites = []

const postFav = (req, res) =>{
    if (req.body.id) {
        myFavorites.push(req.body)
        return res.status(200).json(myFavorites)
    }else{
        return res.send('No se recibió ningun personaje')
    }
}

const deleteFav = (req, res) =>{
    const {id} = req.params
    if (id) {
        let newFavs = myFavorites.filter((char) => char.id !== +id)
        if(myFavorites.length !== newFavs.length){
            myFavorites = newFavs
            return res.status(200).json(myFavorites)
        }else{
            return res.status(404).send('Este personaje no se encuentra en tus favoritos!')
        }
    }else{
        return res.status(404).send('Ingrea un Id')
    }
}

module.exports = {
    postFav,
    deleteFav
}