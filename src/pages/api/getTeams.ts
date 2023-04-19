import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get(
      `https://api.cartola.globo.com/time/id/${req.query.path}`
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).end("An error occurred");
  }
}
