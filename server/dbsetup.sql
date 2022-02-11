-- load uuid extention:
create extension if not exists "uuid-ossp";

-- drop existing tables:
drop table if exists public.users cascade;
drop table if exists public.patients;
-- JUST WILL COMMENT OUT THE  EXTRA FEILDS IN CASE WE NEEDED IT IN THE FUTURE
CREATE TABLE public.users (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	-- last_name varchar NOT NULL,
	-- user_name varchar NULL,
	-- dob date NOT NULL,
	email varchar NOT NULL,
	pwd varchar NOT NULL
	-- mobile varchar NULL,
	-- address varchar NULL,
	-- CONSTRAINT users_pk PRIMARY KEY (id)
);

-- CREATE TABLE public.patients (
-- 	id uuid NOT NULL DEFAULT uuid_generate_v4(),
-- 	first_name varchar NOT NULL,
-- 	last_name varchar NOT NULL,
-- 	dob date NOT NULL,
-- 	user_id uuid NOT NULL,
-- 	CONSTRAINT patients_pk PRIMARY KEY (id),
-- 	CONSTRAINT patients_fk FOREIGN KEY (user_id) 
-- 		REFERENCES public.users(id) ON DELETE CASCADE
-- 		DEFERRABLE INITIALLY deferred
-- );

-- populate test data:
insert into public.users
(name,email,pwd)
values (
	-- 'ed600136-4e64-4c1b-90f8-16fcd600538a', -- id
	'Pamela',
	-- 'McNeil',
	-- 'Pam',
	-- '1999-01-31',
	'p.mn@email.com',
	'password'
	-- '0123 456 7890',
	-- 'Somewhere in Scotland'
);
insert into public.users
(name,email,pwd)
values (
	-- 'ed600136-4e64-4c1b-90f8-16fcd600538a', -- id
	'tandy',
	-- 'McNeil',
	-- 'Pam',
	-- '1999-01-31',
	'tandy@sensationallife.com',
	'password'
	-- '0123 456 7890',
	-- 'Somewhere in Scotland'
);


-- insert into public.patients 
-- values (
-- 	'd7c99a3a-6dfb-4ff4-99fb-b87bda8de383', -- id
-- 	'Miky',
-- 	'McNeil',
-- 	'1999-01-31',
-- 	'ed600136-4e64-4c1b-90f8-16fcd600538a' -- user_id
-- );