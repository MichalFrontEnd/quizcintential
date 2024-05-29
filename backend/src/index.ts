import express, { Request, Response } from 'express';
import cors from 'cors';
import data from './data.json';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/questions', (req: Request, res: Response) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
