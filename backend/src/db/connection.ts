import { connect, disconnect } from "mongoose";


async function connectToDatabase(){
    try{   
        await connect(process.env.MONGODB_URL);
    }catch(error){
        console.log(error);
        throw new Error("Cannot connect to mongo dbbb...");
    }
}

async function disconnectFromDatabase(){
    try{
        await disconnect();
    }catch(error){
        console.log(error);
        throw new Error("Cannot connect to mongo db");
    }
}

export {connectToDatabase, disconnectFromDatabase};