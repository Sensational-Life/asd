
-- populate test user data:
insert into public.users (id, name, email, pwd)
values (
	'ed600136-4e64-4c1b-90f8-16fcd600538a',
	'Pamela',
	'p.mn@email.com',
	'password'
);

insert into public.users (id, name, email, pwd)
values (
	'd032ef14-0049-4077-90f1-add175c23538',
	'Tandy',
	'tandy@sensationallife.com',
	'password'
);


-- populate test resource data:
insert into public.timetables (id, title, age_group, quantity, link )
values
('2001b831-1419-401e-8f3f-1c8ab2b84ecb', 'Early routine cards', '1-4', 40 , 'https://drive.google.com/file/d/1JY-gs3S27LQGsxsN64f_JQbPJzXbHaaM/view');


insert into public.bookmarks ( user_id , resource_id , resource_type)
values
('d032ef14-0049-4077-90f1-add175c23538', '2001b831-1419-401e-8f3f-1c8ab2b84ecb', 'timetables');
