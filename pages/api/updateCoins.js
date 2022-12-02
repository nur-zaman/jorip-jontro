import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;
  console.log(_id);
  try {
    const user = await User.update(
      { _id: _id },
      { $set: req.body }
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
