import express, {Application} from "express";

const app: Application = express();
const PORT = process.env.PORT || 300;

app.use(express.json());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));