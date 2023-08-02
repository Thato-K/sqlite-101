-- create the table DDL(Database definition language)
create table greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greeting text
);

-- DML (database manipulation langauge)

select * from greetings;

select count(*) from greetings;

insert into greetings (language, greeting) values ('zulu', 'Sawubona');
insert into greetings (language, greeting) values ('sepedi', 'Dumela');
insert into greetings (language, greeting) values ('Xhosa', 'Molo');



