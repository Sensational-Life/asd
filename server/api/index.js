import { Router } from "express";
const router = Router();
import db from "../db";

import users from "./users";
import auth  from "./auth";
import timetables from "./timetables";
router.use("/users", users);
router.use("/auth", auth);
router.use("/timetables", timetables);

router.get("/health", (request, response) => {
    db.query("select version()")
        .then((result) => {
            response.status(200).send(result.rows[0]);
        })
        .catch((err) => {
            console.error(err);
        });
});

export default router;