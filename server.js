// import npm packages
const { json } = require('express');
const express = require('express');
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))

// connect to db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password1234',
    database: 'armor_db'
});

// post request 
// TODO hook up post request to frontside forms - look at challenge 10 or 11 for help
app.post('/api/new-armor', ({ body }, res) => {
    const sql = `INSERT INTO armor (name, armor_type, phys_defense, fire_resist, water_resist, ice_resist, thunder_resist, dragon_resist, skills, slots)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
    // figure out what you need to add here- itll be an array w name, res and whatever else, but formatting will have to happen on front end i think
    console.log(body)
    let { stats, skills, slots } = body
    console.log(stats)
    skills = JSON.parse(skills);
    slots = JSON.parse(slots)
    let { type, name, phys, fire, water, thunder, ice, dragon } = JSON.parse(stats)

    let q = [name, type, phys, fire, water, thunder, ice, dragon, skills, slots];
    let queries = q.map(entry => JSON.stringify(entry))

    console.log(JSON.stringify(q))
    db.query(sql, queries, (err, res) => {
        if(err) throw err
        console.log(res)
    })

    res.send('Posted')
});

// get request for db
app.get('/api/armor/', (req, res) => {
    const sql = "SELECT * FROM armor"

    db.query(sql, (err,res) => {
        if(err) throw err

        json.res(res)
    })
});

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})