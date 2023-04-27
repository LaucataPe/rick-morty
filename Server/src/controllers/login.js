const credentials = require('../utils/users')

const login = (req, res) =>{
    console.log(credentials);
    let {email, password} = req.query

    if(email && password){
        if(credentials.email === email && credentials.password === password){
            return res.status(200).json({access: true})
        }else{
           return res.json({access: false})
        }
    }else{
        return res.send('Ingresa los datos correctos')
    }
}

module.exports = {login}