"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [client, setClient] = useState([
    {
      id: 1,
      name: "Client 1",
      demand: 100,
      cost: 10,
    },
    {
      id: 2,
      name: "Client 2",
      demand: 200,
      cost: 20,
    },
    {
      id: 3,
      name: "Client 3",
      demand: 300,
      cost: 30,
    },
  ]);

  useEffect(() => {
    async function fetchClient() {
      const res = await fetch("/api/client");
      const { clients } = await res.json();
      setClient(clients);
    }
    fetchClient();
  }, []);

  return (
    <MaxWidthWrapper>
      <div>
        <p className="text-lg mt-4">
          Una empresa constructora de barcos tiene cierto número de clientes.
          Cada cliente es abastecido por exactamente una planta. A su vez, una
          planta puede abastecer a varios clientes. El problemaconsiste en
          decidir dónde establecer las plantas para abastecer a cada cliente
          minimizando el costo de construir cada planta y el costo de transporte
          para abastecer a los clientes. Para cada posible ubicación de la
          planta hay un costo fijo y una capacidad de producción. Ambos tienen
          en cuenta el país y las condiciones geográficas. Para cada cliente,
          hay una demanda y un costo de transporte con respecto a cada ubicación
          de la planta.
        </p>
        <h1 className="text-4xl font-bold">Clientes</h1>
        {
          <table className="table-auto mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Demand</th>
                <th className="px-4 py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              {client.map((c) => (
                <tr key={c.id}>
                  <Link
                    href={`location/${c.id}`}
                    className="hover:bg-slate-600"
                  >
                    <td className="border px-4 py-2">{c.name}</td>
                  </Link>
                  <td className="border px-4 py-2">{c.demand}</td>
                  <td className="border px-4 py-2">{c.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </MaxWidthWrapper>
  );
}
