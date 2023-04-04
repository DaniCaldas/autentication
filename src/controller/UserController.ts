import { Response, Request } from "express";
import { prisma } from "../utils/prisma";
import { hash } from 'bcryptjs'

interface UserType{
    username: string;
    password: string;
}

export const createUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;

    const userExists:UserType | null = await prisma.users.findFirst({ 
        where:{
                username
            },
    });

    if(userExists){
        return res.json({error:"Usuário já existe!"})
    }

    const hashPassword = await hash(password, 10)

    const create:UserType = await prisma.users.create({
        data:{
            username,
            password: hashPassword
        }
    })
    return res.json({create})
} 

export const getUsers = async (req: Request, res: Response) => {

    const Users = await prisma.users.findMany() 
    return res.json({Users})
}