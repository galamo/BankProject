-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: bank_db
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1111,'refa23@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 17:02:08'),(11111,'refat@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 17:05:24'),(111111,'refsat@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 17:10:04'),(777777,'refaat1123@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 16:38:14'),(1112222,'no111am111@gmail.com','noam','noam','1212',5088717473,NULL,12,'2021-02-07 16:37:09'),(3333333,'dev@gmail.com','dev','dev','2222',NULL,NULL,12,'2021-02-07 17:01:28'),(7757777,'refaatss1ssdd123@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 16:48:41'),(11234566,'refaat@gmail.com','refaat','mulla','aaa',NULL,NULL,12,'2021-02-03 16:32:15'),(111111111,'refsatsa@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 17:13:01'),(303232222,'sapiro@gmail.com','sapiro','sapiro','fff',NULL,NULL,33,'2021-02-03 15:38:50'),(303236111,'noam@gmail.com','noam','noam','1212',NULL,NULL,33,'2021-02-03 15:38:50'),(303236533,'galamo@gmail.com','gal','amouyal','1212',NULL,NULL,33,'2021-02-03 15:38:50'),(775771177,'refaatss1ssdd11123@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 16:49:13'),(1111111111,'refsatsdda@gmail.com','refaat','mulla','1212',508877473,NULL,12,'2021-02-03 17:13:07'),(1234333222,'noam1@gmail.com','noam','noam','aaa',5088717473,NULL,12,'2021-02-03 17:15:49'),(7757712177,'refaatss1ssdd11111123@gmail.com','refaat','dev','1212',508877473,NULL,12,'2021-02-03 17:00:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-07 21:27:29
