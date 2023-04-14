import Image from "next/image";
import { Inter } from "next/font/google";
import Ranking from "./ranking";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Ranking ids={[]} />
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <table className="w-full rounded-lg overflow-hidden border-collapse">
    //       <thead>
    //         <tr className="border-b-2 border-gray-300 rounded-t-lg">
    //           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
    //             Time
    //           </th>
    //           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
    //             Total
    //           </th>
    //           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
    //             Posição
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr className="border border-gray-300 rounded-full">
    //           <td className="text-left py-3 px-4">Time 1</td>
    //           <td className="text-left py-3 px-4">464</td>
    //           <td className="text-left py-3 px-4">1</td>
    //         </tr>
    //         <tr className="border border-gray-300 rounded-full">
    //           <td className="text-left py-3 px-4">Time 2</td>
    //           <td className="text-left py-3 px-4">264</td>
    //           <td className="text-left py-3 px-4">2</td>
    //         </tr>
    //         <tr className="border border-gray-300 rounded-full">
    //           <td className="text-left py-3 px-4">Time 3</td>
    //           <td className="text-left py-3 px-4">164</td>
    //           <td className="text-left py-3 px-4">3</td>
    //         </tr>
    //         <tr className="border border-gray-300 rounded-full">
    //           <td className="text-left py-3 px-4">Time 4</td>
    //           <td className="text-left py-3 px-4">064</td>
    //           <td className="text-left py-3 px-4">4</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </main>
  );
}
