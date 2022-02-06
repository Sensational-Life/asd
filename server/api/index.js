import { Router } from "express";
const router = Router();



import users from "./users";
import general from "./general";





router.use("/users", users);
router.use("/", general);

export default router;
