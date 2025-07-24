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

async function fetchArtByCategory(category_id){
    try{
        const result = await pool.query('SELECT artworks.*, artists.name AS artist_name, categories.name AS category_name FROM artworks INNER JOIN artists ON artworks.artist_id= artists.artist_id INNER JOIN categories ON artworks.category_id = categories.category_id WHERE artworks.category_id=$1', [category_id]);
        return result.rows;
    }catch (error){
        console.error('Error fetching by category id', error)
        throw error;
    }
}

module.exports = { getCategories, fetchArtByCategory };


