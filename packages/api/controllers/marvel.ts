import { Request, Response } from 'express';
import axios from 'axios';
import md5 from 'md5';
import { isNil, pick } from 'ramda';

import * as dotenv from "dotenv";
dotenv.config();

const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const tsKey = new Date().toISOString();
const marvelPublicAPI = process.env.API_PUB_KEY_MARVEL;
const marvelPrivateAPI = process.env.API_PRIV_KEY_MARVEL;

const filterData = (data: any, type: string) => {
  if (type === 'characters') {
    return data.results.map((x: any) => pick(['id', 'name', 'thumbnail'], x));
  }

  if (type === 'comics') {
    return data.results.map((x: any) => pick(['id', 'title', 'thumbnail'], x));
  }
};

export const getAll = async (req: Request, resp: Response) => {
  const hashKey = md5(tsKey + marvelPrivateAPI + marvelPublicAPI);
  const { searchType } = req.query;
  const searchURLString = `${BASE_URL}/${searchType}?ts=${tsKey}&apikey=${marvelPublicAPI}&hash=${hashKey}`;

  if (isNil(searchType) || ((searchType !== 'comics') && (searchType !== 'characters'))) {
    return resp.status(400).send({
      message: 'error'
    });
  }

  try {
    const result = await axios.get(searchURLString);
    const filteredData = filterData(result.data.data, searchType.toString());

    return resp.status(200).send({
      message: 'Alejandro',
      data: filteredData
    });
  } catch (error) {
    return resp.status(400).send({
      message: error
    });
  }
};

export const MarvelData = {
  getAll
};
