import ShoesData from "../../ShoesData";
export default function handler(req, res) {
  res.status(200).json({ shoes: ShoesData });
}
