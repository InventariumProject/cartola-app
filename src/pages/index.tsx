import { Inter } from "next/font/google";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  ids: number[];
};
type TeamData = {
  time: {
    nome: string;
  };
  pontos_campeonato: number;
  pontos: number;
  patrimonio: number;
  rodada_atual: number;
};

type UpdatedTeamData = TeamData & {
  diffToLeader: number;
};
const inter = Inter({ subsets: ["latin"] });

export default function Home({ ids }: Props) {
  const [teamData, setTeamData] = useState<UpdatedTeamData[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [diffToLeaderData, setDiffToLeaderData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ids = [
        9035902, 19298673, 47629775, 47996695, 1331986, 1276535, 26328842,
        1909960, 406869, 47829504, 1614368, 19653180, 13916753, 7969983,
        1941336, 47663847, 47646361, 8631482, 1071737, 1229763, 47703776,
        1174817,
      ];

      const responses = await Promise.all(
        ids.map((id) => axios.get(`/api/${id}`))
      );

      setTeamData(
        responses
          .map((res) => res.data)
          .sort((a, b) => b.pontos_campeonato - a.pontos_campeonato)
      );
    };

    fetchData();
  }, [ids]);

  useEffect(() => {
    if (teamData.length > 0 && diffToLeaderData.length === 0) {
      const leaderScore = teamData[0].pontos_campeonato;
      const updatedDiffToLeaderData = teamData.map(
        (team) => leaderScore - team.pontos_campeonato
      );
      setDiffToLeaderData(updatedDiffToLeaderData);
    }
  }, [teamData, diffToLeaderData]);

  const handleSortByPontosCampeonato = () => {
    if (sortOrder === "asc") {
      setTeamData(
        [...teamData].sort((a, b) => a.pontos_campeonato - b.pontos_campeonato)
      );
      setSortOrder("desc");
    } else {
      setTeamData(
        [...teamData].sort((a, b) => b.pontos_campeonato - a.pontos_campeonato)
      );
      setSortOrder("asc");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
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
              <div className="flex items-center justify-between">
                Pontuação Geral
                <select
                  className="ml-2 p-1 bg-gray-900 rounded border cursor-pointer required:invalid"
                  onChange={handleSortByPontosCampeonato}
                  value={sortOrder}
                >
                  <option value="desc">Ordenar: ↑ </option>
                  <option value="asc">Ordenar: ↓ </option>
                </select>
              </div>
            </th>
            <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
              Última Rodada
            </th>
            <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
              Patrimônio
            </th>
            <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
              Média
            </th>
            <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
              Dif to lider
            </th>

            <th>
              {" "}
              <Link href="/desafio">Ir para Desafios bolas de ouro →</Link>
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
              <td className="border px-4 py-2 text-center bg-gray-500">
                {Number(data.pontos_campeonato / data.rodada_atual).toFixed(2)}
              </td>
              <td className="border px-4 py-2 text-center bg-gray-500">
                {Number(diffToLeaderData[index]).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
