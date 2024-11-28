import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("My name is Amith!!");
});

app.get("/contact", (req: Request, res: Response) => {
  res.send("Ph Number : +91 6361670056");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});