import connect from "../../libs/mongodb";
import User from "../../model/user-schema";

connect();

export default async function handler(req, res) {
  const { _id, points, value, add } = req.body;
  let _coins = points;
  if (add) {
    _coins = value + points;
  } else {
    _coins = points - value;
  }

  const newCoins = {
    _id: _id,
    coins: _coins,
  };
  try {
    const user = await User.update(
      { _id: _id },
      { $set: newCoins }
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
