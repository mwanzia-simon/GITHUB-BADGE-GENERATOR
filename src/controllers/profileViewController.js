import ProfileViews from "../models/profileViews.js";

export const trackProfileViews = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await ProfileViews.findOne({ username });

    return res.status(200).json({ success: true, views: result.views });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error occured: ${error.message}` });
  }
};
