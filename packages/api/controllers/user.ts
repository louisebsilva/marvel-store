import { Request, Response } from 'express';
import * as userModel from '../models/user';
import { isEmpty } from 'ramda';

const createUser = async (req: Request, resp: Response) => {
  const newUser = req.body;

  userModel.create(newUser, (err: Error, userID: number) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    resp.status(200).json({'userID': userID});
  });
};

const getUser = async (req: Request, resp: Response) => {
  const user = req.query;

  userModel.get(user, (err: Error, userResult: any) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    if (isEmpty(userResult)) {
      return resp.status(404).json({'message': 'User not found!'});
    }

    const { password, ...userWithoutPassword} = userResult[0];

    resp.status(200).json({'result': userWithoutPassword});
  });
};

const updateUser = async (req: Request, resp: Response) => {
  const user = req.body;

  userModel.update(user, (err: Error, userResult: any) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    resp.status(200).json({'result': 'Success'});
  });
};

export const User = {
  create: createUser,
  get: getUser,
  update: updateUser
}
