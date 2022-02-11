-- load uuid extention:
create extension if not exists "uuid-ossp";

-- drop existing tables:
drop table if exists public.users;

CREATE TABLE public.users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	email varchar NOT NULL,
	pwd varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

-- populate test data:
insert into public.users (id, name, email, pwd)
values (
	'ed600136-4e64-4c1b-90f8-16fcd600538a',
	'Pamela',
	'p.mn@email.com',
	'password'
);

insert into public.users (id, name, email, pwd)
values (
	'ed600136-4e64-4c1b-90f8-16fcd600538a',
	'Tandy',
	'tandy@sensationallife.com',
	'password'
);