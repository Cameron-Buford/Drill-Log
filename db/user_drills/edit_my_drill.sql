update scores 
set (score) = ($2)
where mydrill_id = $1;

select * from scores;