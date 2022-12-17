import connect from "../../libs/mongodb";
import externalforms from "../../model/externalForm-schema";

connect();

export default async function handler(req, res) {
  const { user } = req.body;
  try {
    const forms = await externalforms.find({
      user: user,
    });
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
