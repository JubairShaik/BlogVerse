import mongoose from "mongoose"


const Connection =  async (URL) => {
    
    // const URL = `mongodb+srv://${username}:${password}@cluster0.ignzpqv.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{ useNewUrlParser:true });
       console.log("DataBase Connected Succcessfully")
    }
    catch(error){
        console.log("error Occured Broo",error)
    }
}

export default Connection ;