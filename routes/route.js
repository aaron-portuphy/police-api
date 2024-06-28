import { Router } from "express";
import { addStatement, deleteStatement, getStatement, getStatements, updateStatement } from "../controllers/statement_controllers.js";

export const router = Router()

router.post('/statement', addStatement)
router.get('/statement', getStatements)
router.get('/statement/:id', getStatement)
router.patch('/statement/:id/:caseStatus', updateStatement)
router.delete('/statement/:id', deleteStatement)