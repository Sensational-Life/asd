/**
 * populate test data:
 */

-- users:
insert into public.users (id, name, email, pwd)
values 
	('ed600136-4e64-4c1b-90f8-16fcd600538a', 'Pamela', 'p.mn@email.com', 'password'),
	('d032ef14-0049-4077-90f1-add175c23538', 'Tandy', 'tandy@sensationallife.com', 'password')
;


-- timetables:
insert into public.timetables (id, title, age_group, quantity, link )
values
	('2001b831-1419-401e-8f3f-1c8ab2b84ecb', 'Early routine cards', '1-4', 40 , 
		'https://drive.google.com/file/d/1JY-gs3S27LQGsxsN64f_JQbPJzXbHaaM/view'),
	('021b8a37-f87c-4f09-97b2-cb3fccdc0327', 'Later routine cards', '7-11', 50 , 
		'https://drive.google.com/file/d/1JY-gs3S27LQGsxsN64f_JQbPJzXbHaaM/view')
;

-- bookmarks:
insert into public.bookmarks ( user_id , resource_id , resource_type)
values
	('d032ef14-0049-4077-90f1-add175c23538', '2001b831-1419-401e-8f3f-1c8ab2b84ecb', 'timetables');
