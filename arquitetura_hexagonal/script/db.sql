## CREATE extension IF NOT EXISTS "uuid-ossp";a

CREATE TABLE usuarios (
	id uuid primary key,
	nome varchar(255) not null,
	email varchar(255) not null,
	senha varchar(255) not null
);

