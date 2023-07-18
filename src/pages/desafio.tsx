import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function Match() {
  return (
    <div className="flex flex-col items-center min-w-fit bg-black">
      <div className="flex items-center space-x-6 justify-between">
        <h1 className="text-2xl font-bold m-8 text-center text-white">
          Desafios Bolas de ouro
        </h1>
      </div>
      <Link
        href="/"
        className="text-white text-sm font-bold hover:text-gray-300"
      >
        <div className="flex items-center space-x-4">
          <FaArrowLeft />
          <span>Voltar</span>
        </div>
      </Link>
      <table className="w-fit mt-6 flex items-center m-2 p-2 text-white">
        <tbody>
          <tr className="">
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center">8</td>
            <td className="text-center">x</td>
            <td className="text-center">7</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/daniel.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Tenha Calma Moreno</span>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">7</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">8</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/seringas.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Seringas F.C</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">7</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">8</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/sujismundo.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Os sujismundos</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">12</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">3</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/xandao.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Chupaku de Goianinha</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">8</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">7</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/daniel.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Tenha Calma Moreno</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">8</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/palestrino.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Palestrino ®©</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center border-b-2 rounded-l-lg p-1">
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
            <td className="text-center p-4">9</td>
            <td className="text-center p-4">x</td>
            <td className="text-center p-4">3</td>
            <td className="text-center border-b-2 rounded-l-lg p-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={"./images/xandao.svg"}
                  alt="escudo"
                  width={30}
                  height={30}
                />
                <span className="text-sm">Chupaku de Goianinha</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
