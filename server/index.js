import express from "express";
import rutas from "./routes/index.routes.js";
import morgan from "morgan"
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from "./database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("case sensitive routing", true);

// Middlewates
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(rutas);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname) + '/public/index.html');
});

// Server Litening
app.listen(app.get("port"));
console.log(`app listening on port ${app.get("port")}`);