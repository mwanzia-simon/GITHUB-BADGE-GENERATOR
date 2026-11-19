import ProfileViews from "../models/profileViews.js";
import { generateBadge } from "../services/badgeService.js";

export const getProfileBadge = async (req, res) => {
  try {
    const { username } = req.params;
    const {
      label = "PROFILE VIEWS",
      color = "blue",
      style = "gradient",
    } = req.query;

    const result = await ProfileViews.findOneAndUpdate(
      { username },
      { $inc: { views: 1 } },
      { upsert: true, new: true },
    );

    const svg = generateBadge(label, result.views, color, style);
    res.setHeader("Content-Type", "image/svg+xml");
    return res.status(200).send(svg);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error occured: ${error.message}` });
  }
};
