-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 24. 13:19
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `shoes`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shoes_table`
--

CREATE TABLE `shoes_table` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `release_date` date NOT NULL,
  `available` tinyint(1) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `shoes_table`
--

INSERT INTO `shoes_table` (`id`, `price`, `release_date`, `available`, `name`) VALUES
(1, 140, '1985-04-01', 0, 'Air Max 95'),
(4, 170, '2004-01-01', 0, 'Air Jordan 2'),
(32, 120, '2024-02-28', 1, 'Nike Air Force 1\'07');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `shoes_table`
--
ALTER TABLE `shoes_table`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `shoes_table`
--
ALTER TABLE `shoes_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
