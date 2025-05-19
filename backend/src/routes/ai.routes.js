import express, { Router } from "express"
// import { Router } from "express";
import aicontroller from "../controller/ai.controller.js";
const router=Router()

router.get("/get-Review",aicontroller);


export default router;

