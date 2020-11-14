DROP TABLE IF EXISTS hero_carousel;
DROP TABLE IF EXISTS features_carousel;
DROP TABLE IF EXISTS cta;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS messages;

create table hero_carousel (
	id int(11) unsigned not null auto_increment primary key,
	heading varchar(100),
	subheading varchar(500),
	button_text varchar(100),
	button_url varchar(100)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table features_carousel (
	id int(11) unsigned not null auto_increment primary key,
	subheading varchar(500),
	image1 varchar(100),
	image2 varchar(100),
	image3 varchar(100)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table cta (
	id int(11) unsigned not null auto_increment primary key,
	heading varchar(100),
	subheading varchar(500),
	button1_text varchar(100),
	button1_url varchar(100),
	button2_text varchar(100),
	button2_url varchar(100)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table projects (
	id int(11) unsigned not null auto_increment primary key,
	title varchar(100),
    date datetime DEFAULT CURRENT_TIMESTAMP,
	description varchar(500),
	image varchar(100),
	url varchar(100),
	category varchar(100)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table contact (
	id int(11) unsigned not null auto_increment primary key,
	phone varchar(15),
	fax varchar(15),
	email varchar(100),
	address varchar(300),
	description varchar(500)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table sections (
	id int(11) unsigned not null auto_increment primary key,
	name varchar(100),
	heading varchar(100),
	subheading varchar(500),
	item1_name varchar(100),
	item1_text varchar(500),
	item2_name varchar(100),
	item2_text varchar(500),
	item3_name varchar(100),
	item3_text varchar(500),
	item4_name varchar(100),
	item4_text varchar(500),
	item5_name varchar(100),
	item5_text varchar(500),
	item6_name varchar(100),
	item6_text varchar(500)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table messages (
	id int(11) unsigned not null auto_increment primary key,
	first_name varchar(50),
	last_name varchar(50),
	email varchar(100),
	subject varchar(100),
	message text

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;