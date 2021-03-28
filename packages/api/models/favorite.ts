/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import { OkPacket } from 'mysql2';
import db from '../config/db';

type FavoriteRequest = {
  userID: number;
  favoriteID: number;
  favoriteType: 'characters' | 'comics';
  favoriteName: string;
  favoriteImage: string;
};

export const create = (favorite: FavoriteRequest, callback: Function) => {
  const queryString = 'INSERT INTO Favorite (id_user, favorite_id, type, favorite_name, favorite_image) VALUES (?, ?, ?, ?, ?)';

  db.query(
    queryString,
    [ favorite.userID, favorite.favoriteID, favorite.favoriteType, favorite.favoriteName, favorite.favoriteImage ],
    (err, result) => {
      if (err) {callback(err);}

      const insertId = (<OkPacket> result).insertId;
      callback(null, insertId);
    }
  );
};

export const get = (favorite: any, callback: Function) => {
  const queryString = 'SELECT * FROM Favorite WHERE id_user=?';

  db.query(
    queryString,
    [favorite.userID],
    (err, result) => {
      if (err) {callback(err);}

      const insertId = (<OkPacket> result);
      callback(null, insertId);
    }
  );
};

export const deleteFavorite = ({favorite}: any, callback: Function) => {
  const queryString = 'DELETE FROM Favorite WHERE favorite_id=? AND id_user=?';

  db.query(
    queryString,
    [ favorite.favoriteID, favorite.userID ],
    (err, result) => {
      if (err) {callback(err);}

      const insertId = (<OkPacket> result).insertId;
      callback(null, insertId);
    }
  );
};
