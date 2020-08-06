-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 06, 2020 at 06:14 PM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int NOT NULL,
  `manufacturer` varchar(80) NOT NULL,
  `model` varchar(50) NOT NULL,
  `year` varchar(5) NOT NULL,
  `producing_country` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `manufacturer`, `model`, `year`, `producing_country`) VALUES
(2, 'Porchse', '2006', '2006', 'Korea'),
(3, 'Chevrolet', '2010', '2010', 'Germany'),
(4, 'Lexus', '2004', '2004', 'Japan'),
(10, 'Mercedes', '2009', '2009', 'Germany'),
(11, 'Mercedes', '2004', '2004', 'Germany'),
(12, 'Porchse', '2005', '2005', 'Germany'),
(13, 'Porchse', '2004', '2004', 'Germany'),
(14, 'Bugatti', '2019', '2019', 'German'),
(15, 'Bugatti', '2016', '2016', 'German'),
(16, 'Bugatti', '2010', '2010', 'German'),
(17, 'Bugatti', '2018', '2018', 'German'),
(18, 'Bugatti', '2020', '2020', 'German'),
(19, 'Bugatti', '2015', '2015', 'German'),
(22, 'Ferrari', '2020', '2020', 'Italy'),
(23, 'Ferrari', '2019', '2019', 'Italy'),
(24, 'Ferrari', '2018', '2018', 'Italy'),
(25, 'Ferrari', '2017', '2017', 'Italy'),
(26, 'Ferrari', '2018', '2018', 'Italy'),
(27, 'Ferrari', '2015', '2015', 'Italy'),
(28, 'Bugatti', '2016', '2016', 'German'),
(29, 'Bugatti', '2016', '2016', 'German'),
(30, 'TaTa', '2018', '2018', 'India'),
(31, 'TaTa', '2018', '2018', 'India'),
(32, 'TaTa', '2019', '2019', 'India'),
(33, 'TaTa', '2020', '2020', 'India'),
(34, 'TaTa', '2021', '2021', 'India'),
(35, 'TaTa', '2022', '2022', 'India'),
(36, 'Toyota', '2003', '2003', 'Japan'),
(37, 'Toyota', '2004', '2004', 'Japan'),
(38, 'Toyota', '2005', '2005', 'Japan'),
(39, 'Lexus', '2006', '2006', 'Japan'),
(40, 'Lexus', '2007', '2007', 'Japan'),
(41, 'Lexus', '2008', '2008', 'Japan'),
(42, 'Lexus', '2009', '2009', 'Japan'),
(43, 'Bugatti', '2019', '2019', 'German'),
(44, 'Bugatti', '2016', '2016', 'German'),
(45, 'Bugatti', '2010', '2010', 'German'),
(46, 'Bugatti', '2018', '2018', 'German');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
