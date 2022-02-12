/**
 * Select queries for Data Exploration
 */

-- all bookmarks that use have, related to only type of `timetables`:
select t.*
from public.bookmarks b
inner join public.timetables t
	on t.id = b.resource_id
where b.resource_type = 'timetables'
and b.user_id = 'd032ef14-0049-4077-90f1-add175c23538' 

-- all `timetables` resources with indication of 
-- wich of them are bookmarked by the given user:
select 
	t.*, 
	case
		when b.user_id is null then 'No'
		else 'Yes'
	end as is_bookmarked
from public.timetables t
left join public.bookmarks b
	on b.resource_id = t.id 
	and b.resource_type = 'timetables'
	and b.user_id = 'd032ef14-0049-4077-90f1-add175c23538'  