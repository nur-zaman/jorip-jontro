import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    // window.localStorage.setItem("userid", user.body["id"]);
    // res.status(200).json({ success: true, data: user["id"] });
    res.redirect("/dashboard?" + user["id"]);
  }
}
