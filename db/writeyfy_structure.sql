-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 11, 2023 at 05:46 AM
-- Server version: 5.7.36
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `writeyfy`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
CREATE TABLE IF NOT EXISTS `user_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `number` bigint(20) NOT NULL,
  `password` text NOT NULL,
  `location` text NOT NULL,
  `date_of_birth` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_email_otp`
--

DROP TABLE IF EXISTS `user_email_otp`;
CREATE TABLE IF NOT EXISTS `user_email_otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_number_otp`
--

DROP TABLE IF EXISTS `user_number_otp`;
CREATE TABLE IF NOT EXISTS `user_number_otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` bigint(20) NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_art_details`
--

DROP TABLE IF EXISTS `writers_art_details`;
CREATE TABLE IF NOT EXISTS `writers_art_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `writer_id` int(11) NOT NULL,
  `type_of_models` text NOT NULL,
  `cost` int(11) NOT NULL,
  `sample` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_map`
--

DROP TABLE IF EXISTS `writers_map`;
CREATE TABLE IF NOT EXISTS `writers_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `email_verified` tinyint(4) NOT NULL,
  `country_name` text NOT NULL,
  `country_code` int(11) NOT NULL,
  `number` bigint(20) NOT NULL,
  `number_verified` tinyint(4) NOT NULL,
  `whatsapp` bigint(20) NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `pin_code` int(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `qualification` text NOT NULL,
  `occupation` text NOT NULL,
  `bank_name` text NOT NULL,
  `branch_name` text NOT NULL,
  `ifsc_code` text NOT NULL,
  `account_number` text NOT NULL,
  `benificiary_name` text NOT NULL,
  `pan_number` text NOT NULL,
  `bio` text NOT NULL,
  `profile_pic` text NOT NULL,
  `date_of_joining` datetime NOT NULL,
  `writing` tinyint(4) NOT NULL,
  `ppt` tinyint(4) NOT NULL,
  `technical_drawing` tinyint(4) NOT NULL,
  `art` tinyint(4) NOT NULL,
  `is_approved` tinyint(4) NOT NULL,
  `date_of_approval` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_technical_drawing_details`
--

DROP TABLE IF EXISTS `writers_technical_drawing_details`;
CREATE TABLE IF NOT EXISTS `writers_technical_drawing_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `writer_id` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `sample` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_writing_details`
--

DROP TABLE IF EXISTS `writers_writing_details`;
CREATE TABLE IF NOT EXISTS `writers_writing_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `writer_id` int(11) NOT NULL,
  `writing_capacity` int(11) NOT NULL,
  `short_cost` int(11) NOT NULL,
  `long_cost` int(11) NOT NULL,
  `sample` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writer_email_otp`
--

DROP TABLE IF EXISTS `writer_email_otp`;
CREATE TABLE IF NOT EXISTS `writer_email_otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writer_number_otp`
--

DROP TABLE IF EXISTS `writer_number_otp`;
CREATE TABLE IF NOT EXISTS `writer_number_otp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` bigint(20) NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
