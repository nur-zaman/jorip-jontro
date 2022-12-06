import connect from "../../libs/mongodb";
import response_data from "../../model/surveyResponse-schema";

connect();

export default async function handler(req, res) {
  const { formID } = req.body;
  try {
    const responses = await response_data.find({
      formID: formID,
    }); /* find all the data in our database */
    res.status(200).json(responses);
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
