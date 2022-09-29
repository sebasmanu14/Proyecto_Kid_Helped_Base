CREATE DATABASE db_kid ;
-- TABLE USER
-- all pasword wil be encrypted using SHA1
CREATE TABLE usuarios(
  id INT(11) NOT NULL,
  user_name VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL
);
ALTER TABLE users
  ADD PRIMARY KEY (id);

