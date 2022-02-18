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
		'https://drive.google.com/file/d/1JY-gs3S27LQGsxsN64f_JQbPJzXbHaaM/view'),
	('199e246d-6739-43ff-8a81-f7927e285d9e','Homework cards','3-5',54,
		'https://drive.google.com/file/d/10usfMuYAVesK8Hbt8N8zmH_BjYl8eNi7/view'),
	('bb385e29-acb2-43d0-9941-c38fae750e2c','Organisational cards','9-14',45,
		'https://drive.google.com/file/d/113EgZb-o2v0KWSjV1QOXlNJzk9feYn5x/view'),
	('2e576946-e038-4f78-9a03-328d04e8d085','Mix & Match routine cards','all ages',5,
		'https://drive.google.com/file/d/1Zh_HZwedmiHphlQs5fJtPiEc7PKfk4GW/view');


-- bookmarks:
insert into public.bookmarks ( user_id , resource_id , resource_type)
values
	('d032ef14-0049-4077-90f1-add175c23538', '2001b831-1419-401e-8f3f-1c8ab2b84ecb', 'timetables');
