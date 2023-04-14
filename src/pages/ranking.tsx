import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { NextPage } from "next";

interface Time {
  id: number;
  nome: string;
  escudo: string;
  pontos: number;
}

interface RankingProps {
  times: Time[];
}

const Ranking: NextPage<RankingProps> = ({ times }) => {
  return (
    <div>
      <h1>Ranking dos times</h1>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Time</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={time.id}>
              <td>{index + 1}</td>
              <td>
                <img src={time.escudo} alt={time.nome} /> {time.nome}
              </td>
              <td>{time.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.cartola.globo.com/times");
  const data = await response.json();

  const times = data.times.map((time: any) => ({
    id: time.time_id,
    nome: time.nome,
    escudo: time.url_escudo_png,
    pontos: time.pontos,
  }));

  return {
    props: {
      times,
    },
    revalidate: 60, // revalida a cada 60 segundos
  };
};

export default Ranking;
