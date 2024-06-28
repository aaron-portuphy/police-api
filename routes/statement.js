import { Router } from 'express';

//Create a router
const statementRouter = Router();

//Define routes
statementRouter.get('/statement',(req ,res)=>{
    res.json('Statement logged');
});

statementRouter.post('/statement', (req, res)=>{
    res.json('Statement Updated');
});

export default statementRouter;