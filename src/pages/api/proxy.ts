// pages/api/proxy.js

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const response = await axios.get(
      `https://api.cartola.globo.com/time/id/${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
