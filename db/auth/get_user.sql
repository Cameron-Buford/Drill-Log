select * from users 
join users on users.user_id = drills.drill_id
where users.user_id = $1;

