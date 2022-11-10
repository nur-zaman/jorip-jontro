import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  try {
    const user = await User.create(req.body);
    res.redirect("/");
    if (!user) {
      return res.json({ " code": "User not created" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to create a new user." });
  }
}