import axios from "axios";
import React, { useEffect, useState } from "react";
type Props = {
  ids: number[];
};

export default function Ranking({ ids }: Props) {
  const [teamData, setTeamData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ids = [
        19653180, 13916753, 7969983, 1941336, 47663847, 47646361, 8631482,
        9035902, 19298673, 47629775, 47996695, 1331986, 1276535, 26328842,
        1071737, 1229763, 47703776, 1909960, 406869, 47829504, 1614368,
      ];
      const responses = await Promise.all(
        ids.map((id) =>
          axios.get(`https://api.cartola.globo.com/time/id/${id}`)
        )
      );
      setTeamData(responses.map((res) => res.data));
    };

    fetchData();
    console.log(teamData);
  }, []);

  return (
    <table
      id="team-scores"
      className="w-3/5 mx-auto min-h-screen border-collapse"
    >
      <thead>
        <tr>
          <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
            Time
          </th>
          <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
            Pontuação Geral
          </th>
          <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
            Rodada Atual
          </th>
          <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
            Patrimônio
          </th>
        </tr>
      </thead>
      <tbody>
        {teamData.map((data, index) => (
          <tr key={index}>
            <td className="border px-4 py-2 text-center bg-gray-500 ">
              {data.time.nome}
            </td>
            <td className="border px-4 py-2 text-center bg-gray-500 ">
              {Number(data.pontos_campeonato).toFixed(2)}
            </td>
            <td className="border px-4 py-2 text-center bg-gray-500 ">
              {Number(data.pontos).toFixed(2)}
            </td>
            <td className="border px-4 py-2 text-center bg-gray-500 ">
              {data.patrimonio}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
