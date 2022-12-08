import connect from "../../libs/mongodb";
import externalforms from "../../model/externalForm-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;
  try {
    await externalforms.deleteOne({
      _id: _id,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
