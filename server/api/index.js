import { Router } from "express";
const router = Router();

import users from "./users";
import  auth  from "./auth";
router.use("/users", users);
router.use("/auth",auth);

export default router;