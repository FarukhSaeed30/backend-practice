const express = require("express");
require("dotenv").config();
const productRouters = require("./routes/Product_router");
const cors = require("cors");

const app = express();
const { DEV_PORT } = process.env;

// const options = {
//   origin:true,
//   methods:["GET","POST"],
//   allowedHeaders:["Content-Type","Authorization"]
// }
// Middlewares
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/api/addProduct', (req, res) => {
//   request(
//     { url: 'http://localhost:5000/api/addProduct' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// }); // This middleware allows CROSS ORIGIN RESOURCE SHARING
app.use(express.json()); // This middleware parses incoming requests with JSON payloads

app.use((req, res, next) => {
  // module for debugging
  console.log("Request arrived to backend server");
  next();
});

app.use("/api", productRouters ); // All incoming request on /api/users, will be handled by userRouters

app.listen(DEV_PORT, () => {
  console.log(`Listening on port: ${DEV_PORT}`);
});
