import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config();

export const checkJwt = (req: Request, resp: Response, next: NextFunction) => {
    //Get the jwt token from the head
    const token = <string>req.headers['token'];
    let jwtPayload;

    //Try to validate the token and get data
    try {
        jwtPayload = <any>jwt.verify(token, process.env.JWT_KEY ?? '');
        resp.locals.jwtPayload = jwtPayload;
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        resp.status(401).json({'message': 'Unauthorized'});
        return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, process.env.JWT_KEY ?? '', {
        expiresIn: '1h'
    });
    resp.setHeader('token', newToken);

    //Call the next middleware or controller
    next();
};