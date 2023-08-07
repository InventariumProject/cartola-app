import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Awards() {
  return (
    <div className="flex flex-col min-w-fit items-center bg-gray-900">
      <div className="w-full bg-green-950 p-4">
        <div className="w-full container flex justify-between items-center mx-auto py-6 ">
          <Link
            href="/"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex-col">
              <span>Ver Ranking</span>
              <FaArrowLeft />
            </div>
          </Link>
          <h1 className="text-white text-center text-4xl font-bold">
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

      <div className="container flex items-center px-6">
        <table className="w-full">
          <thead className="border-b-2 border-gray-200">
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
            <tr className="bg-yellow-600">
              <td className="border px-4 py-2 text-center ">1º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 325,00</td>
            </tr>
            <tr className="bg-gray-400">
              <td className="border px-4 py-2 text-center ">2º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 220,00</td>
            </tr>
            <tr className="bg-yellow-800">
              <td className="border px-4 py-2 text-center">3º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 120,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">4º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 70,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">5º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 40,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">6º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 30,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">7º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 20,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">8º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 14,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">9º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 13,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">10º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 12,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">11º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 11,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">12º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 10,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">13º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 9,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">14º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 8,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">15º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 7,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">16º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 6,00</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2 text-center">17º lugar geral</td>
              <td className="border px-4 py-2 text-center">R$ 5,00</td>
            </tr>
            <tr className="bg-red-600">
              <td className="border px-4 py-2 text-center">
                18º a 22º lugar geral
              </td>
              <td className="border px-4 py-2 text-center">Não recebe</td>
            </tr>
            <br />
            <tr>
              <td className="border px-4 py-2 text-center bg-yellow-600 ">
                Campeão 1º turno
              </td>
              <td className="border px-4 py-2 text-center bg-yellow-600">
                R$ 50,00
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center bg-yellow-600 ">
                Campeão 2º turno
              </td>
              <td className="border px-4 py-2 text-center bg-yellow-600">
                R$ 50,00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container flex items-center p-6">
        <table className="w-full">
          <thead className="border-b-2 border-gray-200">
            <tr>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Maior pontuador em uma rodada
              </th>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Pontuação
              </th>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Rodada
              </th>
              <th className="border px-4 py-2 text-center text-white bg-gray-900 font-bold">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-yellow-600">
              <td className="border px-4 py-2 text-center">Pintão RN</td>
              <td className="border px-4 py-2 text-center">126.80</td>
              <td className="border px-4 py-2 text-center">13</td>
              <td className="border px-4 py-2 text-center">R$ 80,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
