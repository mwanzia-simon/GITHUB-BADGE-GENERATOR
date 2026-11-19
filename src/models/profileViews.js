import mongoose from "mongoose";

const profileViewsSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  views: {
    type: Number,
    require: true,
    default: 0,
  },
});

const ProfileViews = mongoose.model("ProfileView", profileViewsSchema);

export default ProfileViews;
