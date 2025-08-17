const pool = require('../database/db')

async function createUser(username, email, password_hash, account_type){
    try{
        const query = await pool.query("INSERT INTO users (username, email, password_hash, account_type) VALUES ($1,$2,$3,$4) RETURNING *",
        [username,email, password_hash, account_type ]);
         return query.rows[0];
    }catch(error){
        console.error("Error creating user:", error);
        throw error;
    }
}

async function getUserByemail(email) {
    try{
        const query = await pool.query("SELECT * FROM users WHERE email=$1",[email])
        return query.rows[0]
    }catch(error){
        console.error("Error fetching email", error)
    }
}
    

module.exports = { createUser, getUserByemail};

