import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Awards() {
  return (
    <div className="flex flex-col items-center min-w-fit m-2 p-2 bg-black text-white">
      <div className="flex justify-between space-x-24">
        <Link className="text-center text-md p-4" href="/desafio">
          Desafios
          <FaArrowLeft />
        </Link>
        <Link className="text-center text-md p-4" href="/">
          Ranking
          <FaArrowRight />
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-center">
        Tabela de Valores das Premiações
      </h1>
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Campeão 1o turno
            </th>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Campeão 2o turno
            </th>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Maior pontuação em rodada
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center bg-yellow-600 ">
              R$ 50,00
            </td>
            <td className="border px-4 py-2 text-center bg-yellow-600">
              R$ 50,00
            </td>
            <td className="border px-4 py-2 text-center bg-yellow-800">
              R$ 80,00 - Pintão 126.80 rodada 13
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Posição
            </th>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <td className="border px-4 py-2 text-center bg-yellow-500 ">
            1º lugar Geral
          </td>
          <td className="border px-4 py-2 text-center bg-yellow-500 ">
            R$ 325,00
          </td>
          <tr>
            <td className="border px-4 py-2 text-center bg-gray-600 ">
              2º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-gray-600 ">
              R$ 220,00
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center bg-yellow-700 ">
              3º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-yellow-700 ">
              R$ 120,00
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="flex">
        <table className="mx-2 border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Posição
              </th>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Valor
              </th>
              <th className=""> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                4º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 70,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                5º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 40,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                6º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 30,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                7º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 20,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                8º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 14,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                9º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 13,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                10º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 12,00
              </td>
            </tr>
          </tbody>
        </table>

        <table className="mx-2 border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Posição
              </th>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                11º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 11,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                12º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 10,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                13º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 9,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                14º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 8,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                15º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 7,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                16º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 6,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                17º lugar Geral
              </td>
              <td className="border px-4 py-2 text-center bg-gray-400 ">
                R$ 5,00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Posição
            </th>
            <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              18º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              Não recebe
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              19º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              Não recebe
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              20º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              Não recebe
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              21º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              Não recebe
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              22º lugar Geral
            </td>
            <td className="border px-4 py-2 text-center bg-red-500 ">
              Não recebe
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
