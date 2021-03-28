const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('bodegas/add');
});


// CREATE

router.post('/add', async (req, res) => {
    const { name, headquarters_number} = req.body;
    const newBodega = {
        name,
        headquarters_number
    };
    // console.log(newBodega);
    await pool.query('INSERT INTO warehouse set ?', [newBodega]);
    const { phone, city, address } = req.body;
    const newBodegaDescription = {
        phone,
        city,
        address
    };
    // console.log(newBodegaDescription);
    await pool.query('INSERT INTO warehouse_description set ?', [newBodegaDescription]);

    req.flash('success', 'Bodega agregada con exito!')
    res.redirect('/bodegas');
});



// READ
router.get('/', async (req, res) => {
    const bodegas = await pool.query('SELECT * from warehouse inner join warehouse_description on warehouse.id = warehouse_description.id;');
    res.render('bodegas/list', {bodegas} )
});



// DELETE

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM warehouse WHERE ID = ?', [id]);
    await pool.query('DELETE FROM warehouse_description WHERE ID = ?', [id]);
    req.flash('success', 'Bodega eliminada con exito!');
    res.redirect('/bodegas');
});




// UPDATE
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const bodegas = await pool.query('SELECT * from warehouse inner join warehouse_description on warehouse.id = warehouse_description.id WHERE warehouse.id = ?', [id]);
    res.render('bodegas/edit', {bodega: bodegas[0]} )
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, headquarters_number} = req.body;
    const newBodega = {
        name,
        headquarters_number
    };
    await pool.query('UPDATE warehouse set ? WHERE id = ?', [newBodega, id]);
    const { phone, city, address } = req.body;
    const newBodegaDescription = {
        phone,
        city,
        address
    };
    await pool.query('UPDATE warehouse_description set ? WHERE id = ?', [newBodegaDescription, id]);
    req.flash('success', 'Bodega actualizada con exito!');
    res.redirect('/bodegas');
});



module.exports = router;