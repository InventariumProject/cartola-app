import Link from "next/link";

export default function Match() {
  return (
    <div className="flex flex-col items-center min-w-fit p-4">
      <h1 className="text-2xl font-bold ml-10 mb-12 text-center	">
        Desafios Bolas de ouro
      </h1>
      {/* <Link className="text-center ml-10 py-4" href="/">
        ← Voltar para ranking
      </Link> */}
      <table className="w-3/4 mt-12">
        <tbody>
          <tr>
            <td className="text-center border rounded-l-lg  py-4">
              UmPoucoDrogaUmPoucoSalada
            </td>
            <td className="text-center px-4 py-4">2</td>
            <td className="text-center px-4 py-4">x</td>
            <td className="text-center px-4 py-4">0</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Tenha Calma Moreno
            </td>
          </tr>
          <tr>
            <td className="text-center border rounded-l-lg px-4 py-4">
              HEITA BEBIM SC
            </td>
            <td className="text-center">2</td>
            <td className="text-center">x</td>
            <td className="text-center">0</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Seringas F.C
            </td>
          </tr>
          <tr>
            <td className="text-center border rounded-l-lg px-4 py-4">
              HEITA BEBIM SC
            </td>
            <td className="text-center">2</td>
            <td className="text-center">x</td>
            <td className="text-center">0</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Os sujismundos
            </td>
          </tr>
          <tr>
            <td className="text-center border rounded-l-lg px-4 py-4">
              RaffeikeFC
            </td>
            <td className="text-center">1</td>
            <td className="text-center">x</td>
            <td className="text-center">1</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Chupaku de Goianinha
            </td>
          </tr>
          <tr>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Hoje eu vou Garotear FC
            </td>
            <td className="text-center">2</td>
            <td className="text-center">x</td>
            <td className="text-center">0</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              Tenha Calma Moreno
            </td>
          </tr>
          <tr>
            <td className="text-center border rounded-l-lg px-4 py-4">
              BXUCRO
            </td>
            <td className="text-center">0</td>
            <td className="text-center">x</td>
            <td className="text-center">1</td>
            <td className="text-center border rounded-l-lg px-4 py-4">
              ABC Palestrino ®©
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
