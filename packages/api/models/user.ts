/* eslint-disable @typescript-eslint/ban-types */
import { OkPacket } from 'mysql2';
import bcrypt from 'bcrypt';
import db from '../config/db';

const saltRounds = 10;

export const create = (user: any, callback: Function) => {
  const queryString = 'INSERT INTO User (name, user_email, password) VALUES (?, ?, ?)';

  try {
    bcrypt.hash(user.password, saltRounds, (err, hashPassword) => {
      db.query(
        queryString,
        [ user.userName, user.userEmail, hashPassword ],
        (err, result) => {
          if (err) {callback(err);}

          const insertId = (<OkPacket> result).insertId;
          callback(null, insertId);
        }
      );
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const get = (user: any, callback: Function) => {
  const queryString = 'SELECT * FROM User WHERE user_email=?';

  db.query(
    queryString,
    [user.userEmail],
    (err, result) => {
      if (err) {callback(err);}

      const insertId = (<OkPacket> result);
      callback(null, insertId);
    }
  );
};

export const update = (user: any, callback: Function) => {
  const queryString = 'UPDATE User SET name=?, user_email=? WHERE id=?';

  const { user: userData } = user.data;

  db.query(
    queryString,
    [ userData.userName, userData.userEmail, userData.id ],
    (err, result) => {
      if (err) {callback(err);}

      const insertId = (<OkPacket> result).insertId;
      callback(null, insertId);
    }
  );
};
