CREATE DATABASE `starwars`;
USE `starwars`;

CREATE TABLE `characters` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `forcePoints` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);