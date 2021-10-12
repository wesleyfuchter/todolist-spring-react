create table tasks (
    id numeric not null primary key,
    title text not null,
    done boolean not null default false
);