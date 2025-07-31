const pool = require('../database/db')

async function createUser(username, password_hash, email){
    try{
        const query = await pool.query("INSERT INTO users (username, password_hash, email) VALUES ($1,$2,$3) RETURNING *",
        [username, password_hash, email]);
         return query.rows[0];
    }catch(error){
        console.error("Error creating user:", error);
        throw error;
    }
}

async function getUserByemail(email) {
    try{
        const query = await pool.query("SELECT * FROM users WHERE email=$1"[email])
        return query.rows[0]
    }catch(error){
        console.error("Error fetching email", error)
    }
}
    

module.exports = { createUser, getUserByemail};

