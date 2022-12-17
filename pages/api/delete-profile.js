import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;
  try {
    await User.deleteOne({
      _id: _id,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
