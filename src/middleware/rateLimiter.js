import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const key = `badge-generator:${req.ip}`;

    const { success } = await rateLimit.limit(key);
    if (!success) {
      return res.status(429).json({
        success: false,
        message: "Too many request. Please try again later.",
      });
    }

    next();
  } catch (error) {
    console.log(`Rate limit error: ${error}`);
    next(error);
  }
};

export default rateLimiter;
