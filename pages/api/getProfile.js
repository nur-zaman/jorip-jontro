import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;

  try {
    const user = await User.findOne({
      _id: _id,
    }); /* find all the data in our database */
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
