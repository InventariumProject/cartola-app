// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idList = [
    7969983, 8025416, 8631482, 9035902, 1909960, 1229763, 1071737, 1147402,
    28258296, 1614368, 13916753, 19653180, 47629775, 406869, 47646361, 47663847,
    1941336, 47703776,
  ];

  try {
    const responses = await Promise.all(
      idList.map((id: number) =>
        fetch(`https://api.cartola.globo.com/time/id/${id}`)
      )
    );
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar o time" });
  }
}
