import connect from "../../libs/mongodb";
import formdatas from "../../model/formData-schema";

connect();

export default async function handler(req, res) {
  const { _id } = req.body;
  console.log(req.body);
  try {
    const form = await formdatas.findOne({
      _id: _id,
    });
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
