import express from "express";
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("checking");
});

app.use((req, res) => {
    res.json({
        error: "page not found"
    });
});
export default app;
