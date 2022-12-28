CREATE DATABASE `javans_db`;

CREATE TABLE `Families` (
    `id` int(11) NOT NULL,
    `name` varchar(255) NOT NULL,
    `gender` tinyint(1) NOT NULL,
    `idParent` int(11) DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
);

CREATE TABLE `Assets` (
    `id` int(11) NOT NULL,
    `idUser` int(11) NOT NULL,
    `nameAsset` varchar(255) NOT NULL,
    `price` int(11) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
);

ALTER TABLE `Assets`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `Assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `Families`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `Families`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
