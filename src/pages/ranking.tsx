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
        7969983, 8025416, 8631482, 9035902, 1909960, 1229763, 1071737, 1147402,
        28258296, 1614368, 13916753, 19653180, 47629775, 406869, 47646361,
        47663847, 1941336, 47703776,
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
    <table id="team-scores">
      <thead>
        <tr>
          <th>Posição</th>
          <th>Time</th>
          <th>Pontuação Geral</th>
          <th>Rodada Atual</th>
        </tr>
      </thead>
      <tbody>
        {teamData.map((data, index) => (
          <tr key={index}>
            <td>{data.ranking.atual.posicao}</td>
            <td>{data.time.nome}</td>
            <td>{data.pontos_campeonato}</td>
            <td>{data.pontos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
