-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 29 jan. 2020 à 22:53
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetmet`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `nomPhoto` varchar(500) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `adresse` varchar(200) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`idUser`, `nomPhoto`, `nom`, `prenom`, `adresse`, `mail`, `tel`, `prix`, `pseudo`, `mdp`) VALUES
(1, '84167597_508511089862401_6005138984534016000_n.jpg', 'L\'étudiant', 'Jo', '20 rue du CFAI', 'JoEtudiant@chipo.fr', '0669941001', '89.00', 'JeanMi', '123'),
(5, 'jo_moto.jpg', 'Le motard', 'Jo', 'adresse', 'JoLeMotard@mail.com', '07799879', '99.00', 'Pseudo', '123'),
(11, 'jo_trotinette.jpg', 'Le Rider', 'Jo', '45 rue du skate park', 'JoLeRider@gmail.com', 'vhgjb@gvhb', '79.00', 'vgh', 'll');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
