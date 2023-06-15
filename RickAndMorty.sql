CREATE TABLE characters (
  id serial PRIMARY KEY,
  name varchar(30) UNIQUE NOT NULL,
  status varchar(15),
  species varchar(30),
  type varchar(30),
  gender varchar(15),
  episodes integer,
  origin integer,
  location integer,
  imageURL varchar(100) UNIQUE NOT NULL,
  url varchar(100) UNIQUE NOT NULL,
  created timestamp
);

CREATE TABLE episodes (
  id serial PRIMARY KEY,
  name varchar(30),
  air_date timestamp,
  episode varchar(15) UNIQUE NOT NULL,
  url varchar(100) UNIQUE NOT NULL,
  created timestamp
);

CREATE TABLE users (
  id serial PRIMARY KEY,
  name varchar(30) UNIQUE NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  favorites integer UNIQUE
);

CREATE TABLE location (
  id serial PRIMARY KEY,
  name varchar(30),
  type varchar(15),
  dimension varchar(30),
  url varchar(100) UNIQUE NOT NULL,
  created timestamp
);

CREATE TABLE users_characters (
  users_id serial,
  characters_id serial,
  PRIMARY KEY (users_id, characters_id)
);

ALTER TABLE users_characters ADD FOREIGN KEY (users_id) REFERENCES users (id);

ALTER TABLE users_characters ADD FOREIGN KEY (characters_id) REFERENCES characters (id);


CREATE TABLE characters_episodes (
  characters_id serial,
  episodes_id serial,
  PRIMARY KEY (characters_id, episodes_id)
);

ALTER TABLE characters_episodes ADD FOREIGN KEY (characters_id) REFERENCES characters (id);

ALTER TABLE characters_episodes ADD FOREIGN KEY (episodes_id) REFERENCES episodes (id);


ALTER TABLE characters ADD FOREIGN KEY (id) REFERENCES location (id);
