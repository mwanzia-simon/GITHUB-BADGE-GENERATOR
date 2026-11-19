import mongoose from "mongoose";

const profileViewsSchema = mongoose.Schema({});

const ProfileViews = mongoose.model("ProfileView", profileViewsSchema);

export default ProfileViews;
