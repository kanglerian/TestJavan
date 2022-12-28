-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2022 at 04:13 PM
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
-- Database: `javan_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Assets`
--

CREATE TABLE `Assets` (
  `id` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `nameAsset` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Assets`
--

INSERT INTO `Assets` (`id`, `idUser`, `nameAsset`, `price`, `createdAt`, `updatedAt`) VALUES
(2, 13, 'Samsung Universe 9', 1500, '2022-12-28 15:04:36', '2022-12-28 15:10:24'),
(3, 13, 'Samsung Galaxy Book', 1500, '2022-12-28 15:04:47', '2022-12-28 15:10:42'),
(4, 17, 'iPhone 9', 549, '2022-12-28 15:07:11', '2022-12-28 15:07:11'),
(5, 18, 'iPhone X', 899, '2022-12-28 15:07:52', '2022-12-28 15:07:52'),
(6, 14, 'Huawei P30', 499, '2022-12-28 15:08:05', '2022-12-28 15:08:05'),
(7, 19, 'Samsung Universe 9', 1249, '2022-12-28 15:08:18', '2022-12-28 15:08:18'),
(8, 20, 'Huawei P30', 499, '2022-12-28 15:08:31', '2022-12-28 15:08:31'),
(9, 20, 'iPhone X', 899, '2022-12-28 15:08:40', '2022-12-28 15:08:40'),
(10, 15, 'Samsung Universe 9', 1249, '2022-12-28 15:08:48', '2022-12-28 15:08:48'),
(11, 21, 'Samsung Galaxy Book', 1499, '2022-12-28 15:08:58', '2022-12-28 15:08:58'),
(12, 16, 'Huawei P30', 499, '2022-12-28 15:09:11', '2022-12-28 15:09:11'),
(13, 22, 'iPhone X', 899, '2022-12-28 15:09:20', '2022-12-28 15:09:20');

-- --------------------------------------------------------

--
-- Table structure for table `Families`
--

CREATE TABLE `Families` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `idParent` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Families`
--

INSERT INTO `Families` (`id`, `name`, `gender`, `idParent`, `createdAt`, `updatedAt`) VALUES
(12, 'Bani', 1, NULL, '2022-12-28 15:02:25', '2022-12-28 15:02:25'),
(13, 'Budi', 1, 12, '2022-12-28 15:02:42', '2022-12-28 15:02:42'),
(14, 'Nida', 0, 12, '2022-12-28 15:02:51', '2022-12-28 15:02:51'),
(15, 'Andi', 1, 12, '2022-12-28 15:02:57', '2022-12-28 15:02:57'),
(16, 'Sigit', 1, 12, '2022-12-28 15:03:01', '2022-12-28 15:03:01'),
(17, 'Hari', 1, 13, '2022-12-28 15:03:15', '2022-12-28 15:03:15'),
(18, 'Siti', 0, 13, '2022-12-28 15:03:21', '2022-12-28 15:03:21'),
(19, 'Bela', 0, 14, '2022-12-28 15:03:37', '2022-12-28 15:03:37'),
(20, 'Lesti', 0, 14, '2022-12-28 15:03:43', '2022-12-28 15:03:43'),
(21, 'Diki', 1, 15, '2022-12-28 15:03:55', '2022-12-28 15:03:55'),
(22, 'Doni', 1, 16, '2022-12-28 15:04:10', '2022-12-28 15:04:10'),
(23, 'Toni', 1, 16, '2022-12-28 15:04:14', '2022-12-28 15:04:14');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20221228142048-create-family.js'),
('20221228142139-create-asset.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Assets`
--
ALTER TABLE `Assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Families`
--
ALTER TABLE `Families`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Assets`
--
ALTER TABLE `Assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Families`
--
ALTER TABLE `Families`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
