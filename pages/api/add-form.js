import connect from "../../libs/mongodb";
import formData from "../../model/formData-schema";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  try {
    const data = await formData.create(req.body);

    if (!data) {
      return res.json({ " code": "data entry failed" });
    }
  } catch (error) {
    res.status(400).json({ status: "400 error" });
  }
}
