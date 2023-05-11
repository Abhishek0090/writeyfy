-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 02, 2023 at 05:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `email_otp`
--

CREATE TABLE `email_otp` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `email_otp`
--

INSERT INTO `email_otp` (`id`, `email`, `otp`, `generation`, `expiry`) VALUES
(1, 'palabhishek1029@gmail.com', 862546, '2023-04-26 16:03:35', '0000-00-00 00:00:00'),
(2, 'palabhishek1029@gmail.com', 862546, '2023-04-26 16:05:46', '2023-04-26 16:10:46');

-- --------------------------------------------------------

--
-- Table structure for table `number_otp`
--

CREATE TABLE `number_otp` (
  `id` int(11) NOT NULL,
  `number` bigint(20) NOT NULL,
  `otp` int(11) NOT NULL,
  `generation` datetime NOT NULL,
  `expiry` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `number_otp`
--

INSERT INTO `number_otp` (`id`, `number`, `otp`, `generation`, `expiry`) VALUES
(1, 9967572247, 555408, '2023-04-26 16:21:21', '2023-04-26 16:26:21'),
(2, 9967572247, 555408, '2023-04-26 16:22:53', '2023-04-26 16:27:53');

-- --------------------------------------------------------

--
-- Table structure for table `writers_art_details`
--

CREATE TABLE `writers_art_details` (
  `id` int(11) NOT NULL,
  `writer_id` int(11) NOT NULL,
  `type_of_models` text NOT NULL,
  `cost` int(11) NOT NULL,
  `sample` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_map`
--

CREATE TABLE `writers_map` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `email_verified` tinyint(4) DEFAULT NULL,
  `number` bigint(20) NOT NULL,
  `number_verified` tinyint(4) DEFAULT NULL,
  `country` text DEFAULT NULL,
  `country_code` int(11) DEFAULT NULL,
  `city` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `state` text DEFAULT NULL,
  `whatsapp_number` int(11) DEFAULT NULL,
  `pin_code` int(11) DEFAULT NULL,
  `bank_name` text DEFAULT NULL,
  `account_number` int(111) DEFAULT NULL,
  `ifsc_code` text DEFAULT NULL,
  `branch_code` text DEFAULT NULL,
  `beneficiary_name` text DEFAULT NULL,
  `pan_number` text DEFAULT NULL,
  `qualification` text NOT NULL,
  `occupation` text NOT NULL,
  `bio` text NOT NULL,
  `profile_pic` text DEFAULT NULL,
  `date_of_joining` datetime NOT NULL,
  `writing` tinyint(4) NOT NULL,
  `ppt` tinyint(4) NOT NULL,
  `technical_drawing` tinyint(4) NOT NULL,
  `art` tinyint(4) NOT NULL,
  `is_approved` tinyint(4) DEFAULT 0,
  `date_of_approval` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `writers_map`
--

INSERT INTO `writers_map` (`id`, `name`, `email`, `email_verified`, `number`, `number_verified`, `country`, `country_code`, `city`, `date_of_birth`, `state`, `whatsapp_number`, `pin_code`, `bank_name`, `account_number`, `ifsc_code`, `branch_code`, `beneficiary_name`, `pan_number`, `qualification`, `occupation`, `bio`, `profile_pic`, `date_of_joining`, `writing`, `ppt`, `technical_drawing`, `art`, `is_approved`, `date_of_approval`) VALUES
(1, 'Abhishek Pal', 'palabhishek411@gmail.com', NULL, 9967572247, NULL, NULL, NULL, 'Kalyan', '2001-07-09', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'BSC IT', 'Software Developer', 'I m a Software Developer', 'file', '2023-04-26 15:17:44', 1, 1, 1, 1, 1, '2023-04-26 15:17:44'),
(2, 'Abhishek Pal', 'palabhishek1029@gmail.com', NULL, 9967572247, NULL, NULL, NULL, 'kalyan', '2001-07-09', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'BSC IT', 'Software Developer', 'I m a  Software developer', 'file', '2023-04-26 16:36:21', 1, 1, 1, 1, 1, '2023-04-26 16:36:21'),
(3, 'undefined undefined', 'a', NULL, 0, NULL, NULL, NULL, 'aa', '0000-00-00', 'aaa', 656, 121, 'aaaaaa', 5151, 'asd', 'asd', NULL, NULL, 'asa', 'aa', 'aa', '1682620834501mobile.png', '2023-04-28 00:10:34', 0, 0, 0, 0, 0, '2023-04-28 00:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `writers_ppt_details`
--

CREATE TABLE `writers_ppt_details` (
  `id` int(11) NOT NULL,
  `writer_id` int(11) DEFAULT NULL,
  `speed` int(11) DEFAULT NULL,
  `subjects_ppt` text DEFAULT NULL,
  `level_of_ppt` text DEFAULT NULL,
  `plagiarized` tinyint(1) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `sample` varchar(121) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `writers_ppt_details`
--

INSERT INTO `writers_ppt_details` (`id`, `writer_id`, `speed`, `subjects_ppt`, `level_of_ppt`, `plagiarized`, `cost`, `sample`) VALUES
(1, 1, 12, 'Mhd', 'Bachelors', 12, 12, 'file'),
(2, 1, 12, 'Mhd', 'Bachelors', 12, 12, 'file');

-- --------------------------------------------------------

--
-- Table structure for table `writers_technical_drawing_details`
--

CREATE TABLE `writers_technical_drawing_details` (
  `id` int(11) NOT NULL,
  `writer_id` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `sample` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `writers_writing_details`
--

CREATE TABLE `writers_writing_details` (
  `id` int(11) NOT NULL,
  `writer_id` int(11) NOT NULL,
  `writing_capacity` int(11) NOT NULL,
  `short_cost` int(11) NOT NULL,
  `long_cost` int(11) NOT NULL,
  `sample` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email_otp`
--
ALTER TABLE `email_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `number_otp`
--
ALTER TABLE `number_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `writers_art_details`
--
ALTER TABLE `writers_art_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `writers_map`
--
ALTER TABLE `writers_map`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `writers_ppt_details`
--
ALTER TABLE `writers_ppt_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `writers_technical_drawing_details`
--
ALTER TABLE `writers_technical_drawing_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `writers_writing_details`
--
ALTER TABLE `writers_writing_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email_otp`
--
ALTER TABLE `email_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `number_otp`
--
ALTER TABLE `number_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `writers_art_details`
--
ALTER TABLE `writers_art_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `writers_map`
--
ALTER TABLE `writers_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `writers_ppt_details`
--
ALTER TABLE `writers_ppt_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `writers_technical_drawing_details`
--
ALTER TABLE `writers_technical_drawing_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `writers_writing_details`
--
ALTER TABLE `writers_writing_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
