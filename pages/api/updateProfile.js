import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { email } = req.body;
  console.log(email);
  try {
    const user = await User.update(
      { email: email },
      { $set: req.body }
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
