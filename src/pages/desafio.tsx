import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Match() {
  return (
    <div className="flex flex-col items-center min-w-fit bg-gray-900">
      <div className="w-full bg-green-950 p-2 flex items-center">
        <div className="w-full flex items-center py-2 justify-between">
          <Link
            href="/premiacao"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex items-center space-x-4">
              <FaArrowLeft />
              <span>Prêmios</span>
            </div>
          </Link>
          <h1 className="text-2xl text-center font-bold m-8 text-white">
            Desafios Bolas de ouro
          </h1>
          <Link
            href="/"
            className="text-white text-sm font-bold hover:text-gray-300"
          >
            <div className="flex items-center space-x-4">
              <span>Voltar</span>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <table className="w-fit mt-24 mb-72 flex items-center m-1 p-2 text-white">
        <tbody className="divide-y-2 divide-gray-800">
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="p-1 text-sm text-center text-gray-300">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/droga.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-xs">UmPouco Droga UmPouco Salada</span>
              </div>
            </td>
            <td className="text-center">10</td>
            <td className="text-center">x</td>
            <td className="text-center">7</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Tenha Calma Moreno</span>
                <Image
                  src={"./images/daniel.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/herta.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-xs">HEITA BEBIM SC</span>
              </div>
            </td>
            <td className="text-center p-4">9</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">8</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Seringas F.C</span>
                <Image
                  src={"./images/seringas.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/herta.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-xs">HEITA BEBIM SC</span>
              </div>
            </td>
            <td className="text-center p-4">8</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">9</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Os sujismundos</span>
                <Image
                  src={"./images/sujismundo.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-1">
                <Image
                  src={"./images/raffeike.svg"}
                  alt="escudo2"
                  width={30}
                  height={30}
                />
                <span className="text-sm">RaffeikeFC</span>
              </div>
            </td>
            <td className="text-center p-4">13</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">4</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Chupaku de Goianinha</span>
                <Image
                  src={"./images/xandao.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/garotear.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-xs">Hoje eu vou Garotear FC</span>
              </div>
            </td>
            <td className="text-center p-4">9</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">8</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Tenha Calma Moreno</span>
                <Image
                  src={"./images/daniel.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/bxucro.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-xs">BXUCRO </span>
              </div>
            </td>
            <td className="text-center p-4">6</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">10</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Palestrino ®©</span>
                <Image
                  src={"./images/palestrino.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
          <tr className="bg-gray-700 hover:bg-gray-800">
            <td className="text-center p-1">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/mito.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">A volta do Mito</span>
              </div>
            </td>
            <td className="text-center p-4">10</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">4</td>
            <td className="text-center p-2">
              <div className="flex items-center justify-between space-x-2">
                <span className="text-sm">Chupaku de Goianinha</span>
                <Image
                  src={"./images/xandao.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
