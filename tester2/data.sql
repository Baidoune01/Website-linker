CREATE DATABASE IF NOT EXISTS `phpnewsfeed`;
USE `phpnewsfeed`;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `url_link` varchar(255) NOT NULL,
  `published_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `event_date` DATE NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `events` (`title`, `event_date`, `start_time`, `end_time`, `description`)
VALUES
('Meeting with team', '2024-01-15', '10:00:00', '11:00:00', 'Team meeting to discuss project status.'),
('Project deadline', '2024-01-20', '00:00:00', '23:59:59', 'Deadline for project submission.');
