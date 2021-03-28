import { Request, Response } from 'express';
import * as favoriteModel from '../models/favorite';
import { isEmpty } from 'ramda';

const createFavorite = async (req: Request, resp: Response) => {
  const newFavorite = req.body;

  favoriteModel.create(newFavorite, (err: Error, favoriteID: number) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    resp.status(200).json({'favoriteID': favoriteID});
  });
};

const getFavorites = async (req: Request, resp: Response) => {
  const userID = req.query;

  favoriteModel.get(userID, (err: Error, favoriteResult: any) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    if (isEmpty(favoriteResult)) {
      return resp.status(404).json({'message': 'Favorites not found!'});
    }

    resp.status(200).json({'result': favoriteResult});
  });
};

const deleteFavorite = async (req: Request, resp: Response) => {
  const favorite = req.body;

  favoriteModel.deleteFavorite(favorite, (err: Error, favoriteResult: any) => {
    if (err) {
      return resp.status(500).json({'message': err.message});
    }

    resp.status(200).json({'result': 'Success'});
  });
};

export const Favorite = {
  create: createFavorite,
  get: getFavorites,
  delete: deleteFavorite
};
