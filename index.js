import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';


const app = express();
const PORT = 8080;

routes(app);


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})