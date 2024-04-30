## CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
	id uuid primary key,
	nome varchar(255) not null,
	email varchar(255) not null,
	senha varchar(255) not null
);

CREATE TABLE produtos (
	id uuid primary key,
	nome varchar(255) not null,
	preco NUMERIC(6,2) not null
);
