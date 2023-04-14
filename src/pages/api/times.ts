// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getTeams = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() =>
        resolve([
          { id: 7969983 },
          { id: 8025416 },
          { id: 8631482 },
          { id: 9035902 },
          { id: 1909960 },
          { id: 1229763 },
          { id: 1071737 },
          { id: 1147402 },
          { id: 28258296 },
          { id: 1614368 },
          { id: 13916753 },
          { id: 19653180 },
          { id: 47629775 },
          { id: 406869 },
          { id: 47646361 },
          { id: 47663847 },
          { id: 1941336 },
          { id: 47703776 },
        ])
      );
    });
  };

  const getTeamsId = async (time: any) => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(time.id), 1000);
    });
  };

  // try {
  //   const responses = await Promise.all(
  //     idList.map((id: number) =>
  //       fetch(`https://api.cartola.globo.com/time/id/${id}`)
  //     )
  //   );
  //   const data = await Promise.all(
  //     responses.map((response) => response.json())
  //   );

  //   res.status(200).json(data);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Erro ao buscar o time" });
  // }
}
