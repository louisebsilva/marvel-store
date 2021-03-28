import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userModel from '../models/user';
import { isEmpty } from 'ramda';

const login = async (req: Request, resp: Response) => {
  const { userEmail, password } = req.body;

  if (!(userEmail && password)) {
    resp.status(400).json();
  }

  userModel.get({ userEmail }, (err: Error, userResult: any) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    if (isEmpty(userResult)) {
      return resp.status(404).json({'message': 'User not found'});
    }

    bcrypt.compare(password, userResult?.[0]?.password, (error, res) => {
      if (error){
        return resp.status(500).json({'message': error.message});
      }

      if (res) {
        const token = jwt.sign(
          { userId: userResult.id, username: userResult.name },
          process.env.JWT_KEY ?? '',
          { expiresIn: '1h' }
        );

        const { password, ...userWithoutPassword} = userResult[0];
        return resp.status(200).json({'token': token, 'user': userWithoutPassword});
      }

      return resp.status(409).json({success: false, message: 'Passwords do not match'});
    });
  });
};

export const Auth = {
  login
};
