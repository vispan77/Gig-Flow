// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");


// //dotenv for environment
// dotenv.config();


// const cors = require("cors");

// app.use(
//     cors({
//         origin: ["http://localhost:5173"], 
//         credentials: true,
//     })
// );



// //middleware
// app.use(express.json());
// app.use(cookieParser());

// //database connection
// const dbConnect = require("../config/dbConnect");
// dbConnect();

// //router
// const authRouter = require("../routes/auth");
// const gigsRouter = require("../routes/gigsRoutes");
// const bidRouter = require("../routes/bidroutes");

// app.use("/api", authRouter);
// app.use("/api", gigsRouter);
// app.use("/api", bidRouter);


// const PORT = process.env.PORT || 3000;

// //connecting to the server
// app.listen(PORT, () => {
//     console.log(`Server is listening at Port ${PORT}`);
// })

// //home page 
// app.get("/", (req, res) => {
//     res.send("Welcome to the server");
// })





const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app" // update later
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// DB
const dbConnect = require("../config/dbConnect");
dbConnect();

// Routes
const authRouter = require("../routes/auth");
const gigsRouter = require("../routes/gigsRoutes");
const bidRouter = require("../routes/bidroutes");

app.use("/api", authRouter);
app.use("/api", gigsRouter);
app.use("/api", bidRouter);

// test
app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

module.exports = app;



