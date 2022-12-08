import connect from "../../libs/mongodb";
import externalforms from "../../model/externalForm-schema";

connect();

export default async function handler(req, res) {
  // console.log(req.body);
  //   const { user, link } = req.body;
  try {
    // console.log(req.body);
    const form = await externalforms.create(req.body);
    res.status(200).json({ form });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
