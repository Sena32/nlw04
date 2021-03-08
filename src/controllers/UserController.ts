import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
        });

        try { 
            await schema.validate(request.body, {abortEarly:false});
         } catch (err) { 
             throw new AppError(err);

          }

        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.create({
            name, email
        })

        const usersAlreadyExists = await usersRepository.findOne({ email: email });

        if (usersAlreadyExists) {
            throw new AppError("User already exists!");
        }

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };
