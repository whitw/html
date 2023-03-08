const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { pool } = require("./db");

const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false
    });
  }
});

app.get("/api/menus/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const data = await pool.query("SELECT * FROM menus WHERE id=?", id);
    if(data[0][0]){
      return res.json(data[0][0]);
    }
    else{
      return res.json({
        success: false,
        message: "Cannot find such id"
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
    });
  } 
});

app.post("/api/menus", async(req, res) => {
  const body = req.body;
  const name = body.menu_name;
  const desc = body.menu_description;
  const img_link = body.menu_img_link;
  if(!name || !desc || !img_link){
    return res.json({status: 'wrong body format: {menu_name, menu_description, menu_img_link} are needed'});
  }
  try{
    const data = await pool.query(`
    INSERT INTO menus (name, description, image_src)
    VALUES (?,?,?)`,
    [name, desc, img_link]);
    console.log(data);
    if(data[0].affectedRows === 1){
      try{
        const data = await pool.query(`
          SELECT * FROM menus
        `);
        return res.json(data[0]);
      } catch(error) {
        return res.json({success: true,});
      }
    }
    return res.json({
      success: false,
    });
  }
  catch (error){
    console.log(error);
    return res.json({
      success: false
    });
  }
});

app.patch("/api/menus/:id", async (req, res) => {
  const body = req.body;
  const name = body.menu_name;
  const desc = body.menu_description;
  const img_link = body.menu_img_link;
  if(!name || !desc || !img_link){
    return res.json({status: 'wrong body format: {menu_name, menu_description, menu_img_link} are needed'});
  }
  try{
    const data = await pool.query(`
    UPDATE menus SET name = ?, description = ?, image_src = ?
    WHERE id = ? 
    `,
    [name, desc, img_link, req.params.id]);
    if(data[0].affectedRows === 1){
      return res.json({
        success: true,
      });
    }
    else{
      return res.json({
        success: false,
        message: "cannot find such id",
      });
    }
  }
  catch (error){
    console.log(error);
    return res.json({
      success: false
    });
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const data = await pool.query(`
      DELETE FROM menus WHERE id = ?
    `,
    [id]);
    if(data[0].affectedRows === 1){
      return res.json({success: true});
    }
    else{
      return res.json({
        success: false,
        message: "cannot find such id"
      });
    }
  } catch(error){
    console.log(error);
    return res.json({success: false});
  }
});

app.get("/api/orders", async (req, res) =>{
  try{
    const data = await pool.query(`
      SELECT o.id, quantity, name, request_detail
      FROM orders AS o
      INNER JOIN menus AS m
      ON o.menus_id = m.id
      ORDER BY o.id ASC
    `)
    if(data[0]){
      return res.json(data[0]);
    }
    else{
      return res.json({success: false});
    }
  } catch(error){
    console.log(error);
    return res.json({success: false});
  }
});

app.get("/api/orders/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const data = await pool.query(`
    SELECT o.id, quantity, name, request_detail
    FROM orders AS o
    INNER JOIN menus AS m
    ON o.menus_id = m.id
    WHERE o.id = ?
    `, [id]);
    console.log(data[0][0]);
    if(data[0][0]){
      return res.json(data[0][0]);
    }
    else{
      return res.json({
        success: false,
        message: "cannot find such an id",
      });
    }
  }
  catch (error) {
    console.log(error);
    return res.json({success: false});
  }
});

app.post("/api/orders", async (req, res) => {
  const body = req.body;
  const id = body.menus_id;
  const quantity = body.quantity;
  const detail = body.request_detail;
  if(!id || !quantity || !detail){
    return res.json({
      success: false,
      message: 'wrong body format: {menus_id, quantity, request_detail} are needed'});
  }
  try{
    const data = await pool.query(`
      INSERT INTO orders (quantity, request_detail, menus_id)
      VALUES (?, ?, ?)
    `, [quantity, detail, id]);
    console.log(data);
    if(data[0].affectedRows == 1){
      return res.json({
        success: true,
        id: data[0].insertId,
      });
    }
    else{
      return res.json({
        success: false,
      });
    }
  } catch(error) {
    console.log(error);
    return res.json({success: false});
  }
});

app.patch("/api/orders/:id", async (req, res) => {
  const body = req.body;
  const menus_id = body.menus_id;
  const quantity = body.quantity;
  const detail = body.request_detail;
  const id = req.params.id;
  if(!menus_id || !quantity || !detail){
    return res.json({
      success: false,
      message: 'wrong body format: {menus_id, quantity, request_detail} are needed'});
  }
  try{
    const data = await pool.query(`
      UPDATE orders
      SET quantity = ?, request_detail = ?, menus_id = ?
      WHERE id = ?
    `, [quantity, detail, menus_id, id]);
    console.log(data);
    if(data[0].affectedRows == 1){
      return res.json({
        success: true,
      });
    }
    else{
      return res.json({
        success: false,
        message: "cannot find such id"
      });
    }
  } catch(error) {
    console.log(error);
    return res.json({success: false});
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const data = await pool.query(`
      DELETE FROM orders WHERE id = ?
    `, [id]);
    if(data[0].affectedRows == 1){
      return res.json({
        success: true
      })
    }
    else{
      return res.json({
        success: false,
        message: "cannot find such id"
      })
    }
  } catch (error) {
    return res.json({
      success: false,
    })
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
