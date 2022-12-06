import connect from "../../libs/mongodb";
import formdatas from "../../model/formData-schema";

connect();

export default async function handler(req, res) {
  const { user } = req.body;
  try {
    const forms = await formdatas.find({
      user: user,
    });
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
