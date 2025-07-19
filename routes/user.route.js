import { Router } from "express";
import { createUSer,tom,giveDetailes,updateEmail,anyOther,lihoda} from "../controller/user.controller.js";


const router = Router();

router.post('/create',createUSer)
router.get('/tom',tom)
router.post('/find',giveDetailes)
router.post("/update",updateEmail)
router.get("/{*any}",anyOther)
router.get("/lihoda",lihoda)


export default router