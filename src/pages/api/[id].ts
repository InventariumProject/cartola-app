import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface TeamData {
  time: {
    nome: string;
  };
  pontos_campeonato: number;
  pontos: number;
  patrimonio: number;
  rodada_atual: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const ids = [
      9035902, 19298673, 47629775, 47996695, 1331986, 1276535, 26328842,
      1909960, 406869, 47829504, 1614368, 19653180, 13916753, 7969983, 1941336,
      47663847, 47646361, 8631482, 1071737, 1229763, 47703776, 1174817,
    ];

    const { id } = req.query;
    const selectedId = parseInt(id as string, 10);

    if (!ids.includes(selectedId)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const response = await axios.get<TeamData>(
      `https://api.cartola.globo.com/time/id/${selectedId}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
