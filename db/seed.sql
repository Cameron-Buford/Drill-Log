create table users (
    user_id serial primary key,
    username varchar(200)
    password (200)
);

create table drills (
    drill_id serial primary key, 
    name varchar(200),
    distance decimal,
    shots varchar(500),
    setup varchar(1000),
    partime decimal,
    score decimal,
    actions text,
    drill_admin boolean
    
);



create table mydrills (
    mydrill_id serial primary key,
    user_id int references users(user_id),
    drill_id int references drills(drill_id),

);



create table scores (
    score_id serial primary key, 
    mydrill_id int references mydrills(mydrill_id),
    score decimal,
    -- date_stamp int 
);

    
select * from users;
select * from drills;
select * from mydrills;
select * from scores;