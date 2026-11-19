import ProfileViews from "../models/profileViews.js";

export const trackProfileViews = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await ProfileViews.findOneAndUpdate(
      { username: username },
      { $inc: { views: 1 } },
      { upsert: true, new: true },
    );

    return res.status(200).json({ success: true, message: result.views });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error occured: ${error.message}` });
  }
};
