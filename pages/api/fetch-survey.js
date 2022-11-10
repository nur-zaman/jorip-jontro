import connect from "../../libs/mongodb";
import formData from "../../model/formData-schema";

connect();

export default async function handler(req, res) {
  try {
    const forms = await formData.find(
      {}
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
