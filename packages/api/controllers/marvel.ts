import { Request, Response } from 'express';
import axios from 'axios';
import md5 from 'md5';
import { isNil, pick, last } from 'ramda';

import * as dotenv from 'dotenv';
dotenv.config();

const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const tsKey = new Date().toISOString();
const marvelPublicAPI = process.env.API_PUB_KEY_MARVEL;
const marvelPrivateAPI = process.env.API_PRIV_KEY_MARVEL;

const filterAllData = (data: any, type: string) => {
  if (type === 'characters') {
    return data.results.map((x: any) => pick([ 'id', 'name', 'thumbnail' ], x));
  }

  if (type === 'comics') {
    return data.results.map((x: any) => pick([ 'id', 'title', 'thumbnail' ], x));
  }
};

const getAll = async (req: Request, resp: Response) => {
  const hashKey = md5(tsKey + marvelPrivateAPI + marvelPublicAPI);
  const { searchType, textSearch } = req.query;

  if (isNil(searchType) || ((searchType !== 'comics') && (searchType !== 'characters'))) {
    return resp.status(400).send({
      message: 'error'
    });
  }

  let searchURLString = `${BASE_URL}/${searchType}?ts=${tsKey}&apikey=${marvelPublicAPI}&hash=${hashKey}`;

  if (textSearch) {
    if (searchType === 'comics') {
      searchURLString += `&title=${textSearch}&limit=100`;
    } else {
      searchURLString += `&name=${textSearch}&limit=100`;
    }
  } else {
    searchURLString += '&limit=100';
  }

  try {
    const result = await axios.get(searchURLString);
    const filteredData = filterAllData(result.data.data, searchType.toString());

    return resp.status(200).send({
      data: filteredData
    });
  } catch (error) {
    return resp.status(400).send({
      message: error
    });
  }
};

const filterItemData = (data: any, type: string) => {
  if (type === 'characters') {
    return data.results.map((x: any) => pick([ 'id', 'name', 'modified', 'description', 'comics', 'thumbnail' ], x));
  }

  if (type === 'comics') {
    return data.results.map((x: any) => pick([ 'id', 'title', 'modified', 'pageCount', 'description', 'characters', 'thumbnail' ], x));
  }
};

const getOne = async (req: Request, resp: Response) => {
  const hashKey = md5(tsKey + marvelPrivateAPI + marvelPublicAPI);
  const { searchType } = req.query;
  const searchID = last(req.url.split('?')?.[0].split('/'));

  const searchURLString = `${BASE_URL}/${searchType}/${searchID}?ts=${tsKey}&apikey=${marvelPublicAPI}&hash=${hashKey}`;

  if (isNil(searchType) || isNil(searchID) || ((searchType !== 'comics') && (searchType !== 'characters'))) {
    return resp.status(400).send({
      message: 'error'
    });
  }

  try {
    const result = await axios.get(searchURLString);
    const filteredData = filterItemData(result.data.data, searchType.toString());

    return resp.status(200).send({
      data: filteredData
    });
  } catch (error) {
    return resp.status(400).send({
      message: error
    });
  }
};

export const MarvelData = {
  getAll,
  getOne
};
