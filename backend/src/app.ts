import express, { type Application } from "express";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
    res.send("API funcionando con Express + TS");
});

export default app;
