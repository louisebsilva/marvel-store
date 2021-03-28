CREATE SCHEMA MarvelStoreDB ;

CREATE TABLE MarvelStoreDB.User (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL,
  user_email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE MarvelStoreDB.Favorite (
  	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    favorite_id VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL,
    favorite_name VARCHAR (255),
    favorite_image LONGTEXT,
    FOREIGN KEY (id_user) REFERENCES User(id)
);
