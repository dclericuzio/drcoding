import {user_drcoding} from '../../models/index'
import bcrypt from 'bcrypt'

export default async function handler(req,res){
    switch(req.method){
        case "POST":

        const {identifier, password} = JSON.parse(req.body);

        try {
            const user = await user_drcoding.findOne({where: {username: identifier.toLowerCase()}})
            
            if(user < 1){
                res.status(404).json({message: "User not found!" , status: 404})
            }

            const decodePassword = bcrypt.compareSync(password, user.password)
            if(!decodePassword){
                res.status(401).json({message: "Password is wrong!" , status: 401})
            }

            res.status(200).json({message: 'Login Success, Welcome!',status: 200, data:user })
        } catch (e) {
            res.status(503).json({message: "Internal server error!" , status: 503})
            console.log(e)
        }

        break;
    }
}