const pool = require('../database/db')

async function getCategories() {
    try {
        const result = await pool.query('SELECT * FROM public.categories');
        return result.rows;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

module.exports = { getCategories };