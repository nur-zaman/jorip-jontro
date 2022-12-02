import connect from "../../libs/mongodb";
import formdatas from "../../model/formData-schema";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  console.log(req.body);
  try {
    const form = await formdatas.create(req.body);
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
