import connect from "../../libs/mongodb";
import formdatas from "../../model/formData-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;
  try {
    await formdatas.deleteOne({
      _id: _id,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
