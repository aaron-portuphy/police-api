import { StatementModel } from "../models/statement_model.js";

//Add Statement
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body);
        const addData = await StatementModel.create(req.body);
        res.status(200).send(addData)
    } catch (error) {
        console.log(error)
    };
}

//function to store data in the database
export const getStatements = async (req, res) => {

    try{
        console.log('request', req.body);
    const getData = await StatementModel.find();
    {
        res.status(200).json(getData);
    }
    
    } catch (error){
        next(error);
    }
}

//How to get a single data by id

export const getStatement = async (req, res) =>{
try {
        const getSingleData = await StatementModel.findById(req.params.id)
        {
            res.status(200).json(getSingleData)
        }
} catch (error) {
    next(error)
    
}
}

// Update a statement
export const updateStatement = async (req, res) =>{
    try {
        const status = req.params.caseStatus;
        console.log(status);
        const updateData = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus:status})
        {
            res.status(200).json(updateData)
        }
    } catch (error) {
        next(error)
    }
}

// Delete a Statement

export const deleteStatement = async (req, res) => {
    try {
        const deleteData = await StatementModel.findByIdAndDelete(req.params.id)
        {
            res.status(200).json(`Statement with the ID ${req.params.id} has been deleted`)
        }
    } catch (error) {
        next(error)
        
    }
}