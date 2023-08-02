import * as sqlite from 'sqlite';
import sqlite3  from 'sqlite3';

console.log('START')

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

//call the query using await
// const result = await db.all(`select * from greetings`);
// console.log(result);


// //call the query using a promise
// db 
//     .all(`select * from greetings`)
//     .then(result => {
//         console.log(result)
//     })

// const countResult = await db.get(`select count(*) as count from greetings`);
// console.log(countResult.count);



//create a function that returns all the greetings from db
export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}

const result = await getGreetings()

console.log(result)

//create a function that adds a new greeting
export async function addGreeting(language, greeting) {
    //sql statement - insert
    //
    const sql = `insert into greetings (language, greeting) values(?, ?)`
    await db.run(sql, [language, greeting]);
}
//create a function that delete a specific greeting
async function deleteGreeting(id) {
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, (id));
}

//update a greeting
export async function updateGreeting(langauge, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [langauge, greeting, id])
}

const result1 = await getGreetings()
console.log(result1);
console.log('================')

//await addGreeting('Sepedi', 'Dumela');

// await deleteGreeting(4);
// await deleteGreeting(5);
// await deleteGreeting(6);

await updateGreeting('Sepedi', 'Thobela', 2)


console.log('================')

const result2 = await getGreetings()
console.log(result2);

console.log('end')