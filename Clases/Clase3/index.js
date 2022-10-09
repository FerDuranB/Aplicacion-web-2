const mongoose = require('mongoose');

const ConexionUrl = "mongodb+srv://fernandoduran:<fernandoduran>@cluster0.oagknuq.mongodb.net/Prueba";

(async()=>{

    try{
       
        const stateConnection = await mongoose.connect(ConexionUrl);
       
        const Group = mongoose.model("Group", {name:String});
       
        const Permission = mongoose.model("Permission", {name:String});
       
        const User = mongoose.model("User",{
            name: String,
            idgroup: {type: mongoose.Type.ObjectId, ref:"Group"} ,
            permission:[
                {
                    permission : {type: mongoose.Schema.Type.ObjectId, ref:"Permission"},
                    state: {type:Boolean} 
                }
            ]
        });
        const group1 =  new Group({name:"Administradores"});
        const saveGroup = await  group1.save();

        const permission1 = new Permission({name:"Grabar"});
        const savePermission1= await  permission1.save();
        const permission2 = new Permission({name:"Eliminar"});
        const savePermission2 = await permission2.save();
        const user1=  new User(
            {
                name:"Usuario de prueba",
                idgroup: saveGroup._id,
                permissions: [
                    {permission: savePermission1._id , state:true},
                    {permission: savePermission2._id , state:true},
                ]
            }
            );
            const userSave=  await user1.save();

            const result =   await User.find()
            .populate("idgroup")
            .populate("permissions.permission");
        
            console.log(result[result.length-1].permissions )
    }catch(error){
        console.log(error.message);
    }
})
