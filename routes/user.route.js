import { Router } from "express";
import { createUSer,tom } from "../controller/user.controller.js";
import {giveDetailes,updateEmail} from "../controller/user.controller.js";
const router = Router();


router.post('/create',createUSer)
router.get('/tom',tom)
router.post('/find',giveDetailes)
router.post("/update",updateEmail)


export default router