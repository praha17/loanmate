import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Body parser middleware (use express built-in URL encoded parser)
app.use(express.urlencoded({ extended: true }));

// Serve static files like CSS, images, JS
app.use(express.static("public"));

// To use morgan 
app.use(morgan("tiny"));


// Serve home.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  console.log("Borroower Data:", req.body); // This should show your form data now!
  res.send("Thank you for applying!");
});
app.post("/login-lender", (req, res) => {
  console.log("Lender Data:", req.body);
  res.send("Lender login received! 💼");
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
