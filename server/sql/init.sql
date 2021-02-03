CREATE SCHEMA `bank_db` ;

--- Create Users Table

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `bankBranch` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--- create users data
INSERT INTO `bank_db`.`users` (`id`, `email`, `firstName`, `lastName`, `password`, `bankBranch`) VALUES ('303236533', 'galamo@gmail.com', 'gal', 'amouyal', '1212', '033');
INSERT INTO `bank_db`.`users` (`id`, `email`, `firstName`, `lastName`, `password`, `bankBranch`) VALUES ('303232222', 'sapiro@gmail.com', 'sapiro', 'sapiro', '1212', '033');
INSERT INTO `bank_db`.`users` (`id`, `email`, `firstName`, `lastName`, `password`, `bankBranch`) VALUES ('303236111', 'noam@gmail.com', 'noam', 'noam', '1212', '033');

