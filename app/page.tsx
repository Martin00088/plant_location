"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddClient from "@/components/AddClient";
import AddLocation from "@/components/AddLocation";
import Resolve from "@/components/Resolve";
import { useEffect, useState } from "react";

function deleteResult(id: string, setResults: any) {
	return async () => {
		const response = await fetch("/api/results/" + id, {
			method: "DELETE",
		});

		if (response.ok) {
			const newResults = await fetch("/api/results")
				.then(res => res.json())
				.then(data => data.results)
				.catch(console.error);
			setResults(newResults);
		}
	};
}

export default function Home() {
  const [locations, setLocations] = useState<LocationA[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [results, setResults] = useState<Result[]>([]);

	useEffect(() => {
		fetch("/api/location")
			.then(res => res.json())
			.then(data => setLocations(data.locations))
			.catch(console.error);
  	}, []);
	
	useEffect(() => {
		fetch("/api/client")
			.then(res => res.json())
			.then(data => setClients(data.clients))
			.catch(console.error);
  	}, []);

	useEffect(() => {
		fetch("/api/results")
			.then(res => res.json())
			.then(data => setResults(data.results))
			.catch(console.error);
  	}, []);

  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col items-center justify-center w-full h-full p-4 space-y-4">
        {/* <p className="text-lg my-4">
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
        </p> */}

        <Tabs defaultValue="locations" className="w-full">
          <TabsList className="flex items-center">
            <TabsTrigger value="locations" className="w-1/2">
              Plantas
            </TabsTrigger>
            <TabsTrigger value="clients" className="w-1/2">
              Clientes
            </TabsTrigger>
            <TabsTrigger value="results" className="w-1/2">
              Resultados
            </TabsTrigger>
          </TabsList>
          <TabsContent value="locations">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numero</TableHead>
                  <TableHead>Costo Fijo</TableHead>
                  <TableHead>Capacidad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {locations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell>{location.id}</TableCell>
                    <TableCell>{location.fixedCost}</TableCell>
                    <TableCell>{location.capacity}</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* Agrega una nueva planta */}
            <AddLocation />
          </TabsContent>
          <TabsContent value="clients">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numero</TableHead>
                  <TableHead>Demanda</TableHead>
                  <TableHead>Plantas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.demand}</TableCell>
                    <TableCell>
                      <Button variant="outline">
                        <Link href={`/location/${client.id}`}>Administrar</Link>
                      </Button>
                    </TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* Agrega un nuevo cliente */}
            <AddClient />
          </TabsContent>
          <TabsContent value="results">
            <Resolve />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Resultado</TableHead>
                  <TableHead>Estado de la Solucion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell>{result.name}</TableCell>
                    <TableCell>{JSON.parse(result.solutionData).solutionValues[0].obj}</TableCell>
                    <TableCell>{result.statusSolution}</TableCell>
                    <TableCell>{new Date(result.createdAt).toLocaleString()}</TableCell>
                    <TableCell>
                      <Link
                        key={result.id}
                        href={`/results/${result.id}`}
                        className="hover:cursor-pointer"
                      >
                        <Button>Ver Detalles</Button>
                      </Link>
                    </TableCell>
                    <TableCell>
						<Button onClick={deleteResult(result.id, setResults)}>
						Delete
						</Button>
					</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}
