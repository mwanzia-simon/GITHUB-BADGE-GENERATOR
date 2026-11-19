import express from "express"
import { getProfileBadge } from "../controllers/badgeController.js"

const badgeRouter = express.Router()

badgeRouter.route("/:username").get(getProfileBadge)

export default badgeRouter