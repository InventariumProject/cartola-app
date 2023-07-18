import { Inter } from "next/font/google";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex flex-col items-center min-w-fit m-4 p-4 dark:bg-black">
      <div className="w-full bg-black py-8 ">
        <div className="w-full container p-2 flex justify-between items-center mx-auto py-8">
          <h1 className="text-white text-center text-2xl  font-bold">
            Liga Garoteantes
          </h1>
          <Link
            href="/desafio"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex-col">
              <span>Bolas de ouro</span>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="container flex items-center m-2 py-2">
        <table id="team-scores" className="w-full shadow rounded">
          <thead>
            <tr>
              <th className="border px-1 py-1 text-center bg-gray-900 font-bold">
                Pos.
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                Time
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                <div className="flex items-center justify-between">
                  Pontuação Geral
                  {/* <select
                  className="ml-1 p-1 bg-gray-900 cursor-pointer required:invalid"
                  onChange={handleSortByPontosCampeonato}
                  value={sortOrder}
                >
                  <option value="desc">↑</option>
                  <option value="asc">↓</option>
                </select> */}
                </div>
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                Última Rodada
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                <div className="flex items-center justify-between">
                  Patrim.
                  {/* <select
                  className="ml-1 p-1 bg-gray-900 rounded cursor-pointer required:invalid"
                  onChange={handleSortByPatrimonio}
                  value={sortOrder}
                >
                  <option value="desc">↑</option>
                  <option value="asc">↓</option>
                </select> */}
                </div>
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                Média
              </th>
              <th className="border px-4 py-2 text-center bg-gray-900 font-bold">
                Dif to lider
              </th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((data, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center bg-gray-500">
                  {index + 1}
                </td>
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
                  {Number(data.pontos_campeonato / data.rodada_atual).toFixed(
                    2
                  )}
                </td>
                <td className="border px-4 py-2 text-center bg-gray-500">
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
