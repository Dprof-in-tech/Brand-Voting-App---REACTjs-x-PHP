-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2024 at 11:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pollingapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `login_check` tinyint(1) DEFAULT 0,
  `login_time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `login_check`, `login_time`) VALUES
(1, 'Isaac', 'amaechiisaac450@gmail.com', 'Isaac', '$2y$10$YJ3uibBAfi/YWb2D2fppx.PzU1LnnMTf2EI1KXHdg8hR1nlfK5Hwi', 1, '2024-01-21 08:44:20'),
(5, 'peter', 'amaechiisaac@gmail.com', 'peter', '$2y$10$MUEHp5y04a7S2Mw5YnZ72.Le0FQETHcMXFpUl.vc5Ge4fHZ5Z2frO', 1, '2024-01-21 09:34:13'),
(6, 'John', 'John@gmail.com', 'John', '$2y$10$8/gfeF0lPtVXLbfqaTH8a.5FnCmPAB/QIfFg93zBmcVbFNKmCrJMu', 1, '2024-01-21 08:50:34'),
(7, 'James', 'james@gmail.com', 'James', '$2y$10$pIgf2BUeyEb6Lnzvo2ZF1O9cQOxPZ8XnGtlBPb3pq4ERY4mufLCEa', 1, '2024-01-21 08:16:48'),
(8, 'Emmanuel', 'emmanuel@gmail.com', 'Emmanuel', '$2y$10$9lFZ2vpWdIeJruXicFvC4uf0BTXS8CMWzmkp27qWz/Msu3hes4zfC', 1, '2024-01-21 11:15:34');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `voter` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `vote_quantity` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `voter`, `brand`, `vote_quantity`) VALUES
(1, 'peter', 'Nike', 1),
(2, 'james', 'Jordans', 1),
(3, 'john', 'Nike', 1),
(4, 'Isaac', 'Nike', 1),
(5, 'Emmanuel', 'Nike', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
