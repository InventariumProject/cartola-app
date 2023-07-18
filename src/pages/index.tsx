import { Inter } from "next/font/google";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  // const handleSortByPontosCampeonato = () => {
  //   if (sortOrder === "asc") {
  //     setTeamData(
  //       [...teamData].sort((a, b) => a.pontos_campeonato - b.pontos_campeonato)
  //     );
  //     setSortOrder("desc");
  //   } else {
  //     setTeamData(
  //       [...teamData].sort((a, b) => b.pontos_campeonato - a.pontos_campeonato)
  //     );
  //     setSortOrder("asc");
  //   }
  // };

  // const handleSortByPatrimonio = () => {
  //   if (sortOrder === "asc") {
  //     setTeamData([...teamData].sort((a, b) => a.patrimonio - b.patrimonio));
  //     setSortOrder("desc");
  //   } else {
  //     setTeamData([...teamData].sort((a, b) => b.patrimonio - a.patrimonio));
  //     setSortOrder("asc");
  //   }
  // };

  return (
    <div className="flex flex-col items-center min-w-fit p-4 bg-black">
      <div className="w-full bg-black py-6">
        <div className="w-full container p-2 flex justify-between items-center mx-auto py-6 ">
          <Link
            href="/premiacao"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex-col">
              <span>Ver Premiações</span>
              <FaArrowLeft />
            </div>
          </Link>
          <h1 className="text-white text-center text-2xl font-bold">
            Liga Garoteantes
          </h1>

          <Link
            href="/desafio"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex-col">
              <span>Ver Desafios</span>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="container flex items-center">
        <table id="team-scores" className="w-full">
          <thead className="border-b-2 border-gray-200">
            <tr className="text-gray-200">
              <th className="p-3 text-sm font-semibold tracking-wide">Pos.</th>
              <th className="p-3 text-sm font-semibold tracking-wide">Time</th>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Pontuação Geral
                {/* <select
                  className="ml-1 p-1 bg-gray-900 cursor-pointer required:invalid"
                  onChange={handleSortByPontosCampeonato}
                  value={sortOrder}
                >
                  <option value="desc">↑</option>
                  <option value="asc">↓</option>
                </select> */}
              </th>
              <th className="p-3 text-sm  font-semibold tracking-wide">
                Última Rodada
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Patrim.
                {/* <select
                  className="ml-1 p-1 bg-gray-900 rounded cursor-pointer required:invalid"
                  onChange={handleSortByPatrimonio}
                  value={sortOrder}
                >
                  <option value="desc">↑</option>
                  <option value="asc">↓</option>
                </select> */}
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide">Média</th>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Dif to lider
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {teamData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-3 text-sm text-center text-gray-300">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-center text-gray-300 ">
                  {data.time.nome}
                </td>
                <td className="p-3 text-sm text-center text-gray-300 ">
                  {Number(data.pontos_campeonato).toFixed(2)}
                </td>
                <td className="p-3 text-sm text-center text-gray-300 ">
                  {Number(data.pontos).toFixed(2)}
                </td>
                <td className="p-3 text-sm text-center text-gray-300 ">
                  {data.patrimonio}
                </td>
                <td className="p-3 text-sm text-center text-gray-300">
                  {Number(data.pontos_campeonato / data.rodada_atual).toFixed(
                    2
                  )}
                </td>
                <td className="p-3 text-center text-sm text-gray-300">
                  {Number(diffToLeaderData[index]).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
