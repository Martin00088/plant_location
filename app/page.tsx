"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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
  const [location, setLocation] = useState([
    {
      id: 1,
      numero: "Planta 1",
      cost: 100,
      capacity: 10,
    },
    {
      id: 2,
      numero: "Planta 2",
      cost: 100,
      capacity: 10,
    },
    {
      id: 3,
      numero: "Planta 3",
      cost: 100,
      capacity: 10,
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

        <Tabs defaultValue="locations" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="locations">Plantas</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
          </TabsList>
          <TabsContent value="locations">
            <table className="table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Numero</th>
                  <th className="px-4 py-2">Costo Fijo</th>
                  <th className="px-4 py-2">Capacidad</th>
                </tr>
              </thead>
              <tbody>
                {location.map((c) => (
                  <tr key={c.id}>
                    <td className="border px-4 py-2">{c.numero}</td>
                    <td className="border px-4 py-2">{c.capacity}</td>
                    <td className="border px-4 py-2">{c.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Agregar Planta</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agregar Planta</DialogTitle>
                  <DialogDescription>
                    Complete la informacion requerida para añadir una nueva
                    planta.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="fixedCost"
                      placeholder="Ingrese el costo fijo..."
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="capacity"
                      placeholder="Ingrese la capacidad..."
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Agregar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>
          <TabsContent value="clients">
            <table className="table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Numero</th>
                  <th className="px-4 py-2">Demanda</th>
                  <th className="px-4 py-2">Plantas</th>
                </tr>
              </thead>
              <tbody>
                {client.map((c) => (
                  <tr key={c.id}>
                    <td className="border px-4 py-2">{c.name}</td>
                    <td className="border px-4 py-2">{c.demand}</td>
                    <td className="border px-4 py-2 hover:underline">
                      <Link href={`location/${c.id}`}>Administrar</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Agregar Cliente</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agregar Cliente</DialogTitle>
                  <DialogDescription>
                    Complete la informacion requerida para añadir un nuevo
                    cliente.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 items-center ">
                  <Input
                    id="demand"
                    placeholder="Ingrese la demanda..."
                    className=""
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Continuar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}
