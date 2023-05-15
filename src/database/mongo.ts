import { Console } from "console"
import { connect, ConnectOptions } from "mongoose"
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () =>{

    try {
        console.log("conectando ao mongodb...");
        await connect(process.env.MONGO_URL as string,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        } as ConnectOptions);
        console.log("MONGO DB CONECTADO COM SUCESSO")

    } catch (error) {
        console.log("ERRO MONGODB: ", error)
    }

}