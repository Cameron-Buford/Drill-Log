select * from mydrills md 
left join drills d on (
    d.drill_id = md.drill_id 
)
left join user u on (
    u.user_id = md.user_id
)
left join scores s on (
    md.mydrill_id = s.mydrills
)
where u.user_id = $1;