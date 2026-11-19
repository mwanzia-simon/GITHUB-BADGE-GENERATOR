import express from "express";
import { trackProfileViews } from "../controllers/profileViewController.js";

const statsRouter = express.Router();

statsRouter.route("/:username").get(trackProfileViews)

export default statsRouter;
