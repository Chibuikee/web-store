import ShoeData from "../../ShoeData";
export default function handler(req, res) {
  res.status(200).json({ shoes: ShoeData });
}
