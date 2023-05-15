import {Request, Response } from 'express';
import Task from '../model/Task';

export const all = async (req:Request,res:Response) =>{
    let tasks = await Task.find({});
    return res.json({tasks})
}

export const add = async (req:Request,res:Response) =>{
    let newTask = await Task.create(req.body);
    
    if(!newTask){
        return res.status(400).json("Ocorreu um erro")
    }

    return res.status(200).json(newTask);
}

export const update = async (req:Request,res:Response) =>{
   
    let updatedTask = await Task.findOneAndUpdate({
        _id:req.params.id
    }, req.body,{new:true})

    if(!updatedTask){
        console.log(updatedTask)
        return res.status(400).json("Ocorreu um erro")
    }

    return res.status(200).json(updatedTask);
}

export const remove = async (req:Request,res:Response) =>{
    let removedUser = await Task.findOneAndRemove({
        _id:req.params.id,
    });

    if(!removedUser){
        console.log(removedUser)
        return res.status(400).json("Ocorreu um erro")
    }
    return res.status(200).json("usuário removido com sucesso");

}