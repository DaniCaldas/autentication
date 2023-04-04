import { compare } from 'bcryptjs'
import { Request, Response } from 'express'
import { prisma } from '../utils/prisma'
import { sign } from 'jsonwebtoken'

interface UserType{
    username: string;
    password: string;
    id: Number;
}

export const Auth = async (req: Request, res: Response) => {
    const {username, password} = req.body

    const user:UserType | null = await prisma.users.findFirst({ 
        where:{ 
            username 
        },
    })

    if(!user){
        return res.json({error: "Usuário não encontrado!"})
    }

    const isValuePassword = await compare(password, user.password)

    if(!isValuePassword){
        return res.json({error:"Senha inválida"})
    }

    const token = sign(
        {id: user.id}, 
        "secret",
        {expiresIn: "1d"})

    const {id} = user
    return res.json({ user: { username, id }, token})
}