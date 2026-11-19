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
      { upsert: true, returnDocument: "after" },
    );

    const svg = generateBadge(label, result.views, color, style);
    res.setHeader("Content-Type", "image/svg+xml");

    res.setHeader(
      "Cache-Control",
      "max-age=0, no-cache, no-store, must-revalidate",
    );

    res.setHeader("Pragma", "no-cache");
    return res.status(200).send(svg);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error occured: ${error.message}` });
  }
};
