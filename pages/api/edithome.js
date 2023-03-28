import {edit_home} from '../../models/index'

export default async function handler(req, res) {
    switch(req.method){
         case "POST":
 
         const {name, email, phoneNumber , project , message} = JSON.parse(req.body);
 
         try {
 
             const data = await edit_hom.create({name: name, email:email, phone_number: phoneNumber, types:project, message:message})
             if(!data){
                 res.status(422).json({message: "Please try again!" , status: 422})
             }
 
             res.status(200).json({message: 'Data submitted, Thankyou!',status: 200, data: data})
            
         } catch (e) {
             res.status(503).json({message: "Internal server error!" , status: 503})
             console.log(e)
         }
 
         break;
 
         case "GET":
 
             try {
     
                 const data = await edit_hom.findAll({order: [
                     ["createdAt", "desc"]
                 ]})
                 if(data.length<1){
                     res.status(404).json({message: "No data found!" , status: 404})
                 }
     
                 res.status(200).json({message: 'Here is the data!',status: 200, data: data})
                
             } catch (e) {
                 res.status(503).json({message: "Internal server error!" , status: 503})
                 console.log(e)
             }
         break;
    }
 }