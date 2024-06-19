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
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddClient from "@/components/AddClient";
import AddLocation from "@/components/AddLocation";
import { Clients } from "@/db/staticFiles";
import { Locations } from "@/db/staticFiles";

export default function Home() {
  // useEffect(() => {
  //   async function fetchClient() {
  //     const res = await fetch("/api/client");
  //     const { clients } = await res.json();
  //     setClient(clients);
  //   }
  //   fetchClient();
  // }, []);

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
                {Locations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell>{location.numero}</TableCell>
                    <TableCell>{location.cost}</TableCell>
                    <TableCell>{location.capacity}</TableCell>
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
                {Clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.demand}</TableCell>
                    <TableCell>
                      <Button variant="outline">
                        <Link href={`/location/${client.id}`}>Administrar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* Agrega un nuevo cliente */}
            <AddClient />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}
