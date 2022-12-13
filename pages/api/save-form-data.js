import connect from "../../libs/mongodb";
import response_data from "../../model/surveyResponse-schema";
connect();

export default async function handler(req, res) {
  const { formID } = req.body;

  try {
    const form = await response_data.create(req.body);
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
