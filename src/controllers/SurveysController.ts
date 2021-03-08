import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';


class SurveysController {
    async index(request: Request, response: Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const surveys = await surveysRepository.find();

        return response.status(200).json(surveys);
    }

    async create(request: Request, response: Response) {
        const{title, description} = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title, description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }

    // async deleteAll(req: Request,res: Response) {

    //     // const {surveys} = req.body;
    //     const surveys =  ["43f0c3c1-5423-477d-bef0-4c4dcc8d077c","1bf484ad-4c44-4547-8ff5-a388924abb7b"]

    //     const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    //     const surveys_array = await surveysUsersRepository.find();

    //     const surveys_ids = surveys_array.map(s=>([s.id]))
            

    //     surveys_ids.forEach(async id => {

    //         await surveysUsersRepository.delete(id)
            
    //     });

    //     return res.status(200).json(surveys_array); 

    

    // }

}

export { SurveysController }