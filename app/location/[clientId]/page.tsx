"use client";
import EditLocationClient from "@/components/EditLocationClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { use, useEffect, useState } from "react";

type PageProps = {
  params: {
    clientId: string;
  };
};

export default function Page({ params }: PageProps) {
  const [location, setLocation] = useState([
    {
      id: 1,
      name: "Location 1",
      cost: 10,
    },
    {
      id: 2,
      name: "Location 2",
      cost: 20,
    },
    {
      id: 3,
      name: "Location 3",
      cost: 0,
    },
  ]);
  return (
    <MaxWidthWrapper>
      <div className="my-2">
        <h1 className="text-3xl font-bold font-sans  text-slate-500">
          Cliente {params.clientId}
        </h1>
        <h1 className="text-3xl font-semibold font-sans text-slate-500">
          Plantas{" "}
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Planta</TableHead>
              <TableHead>Costo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {location.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.cost}</TableCell>
                <TableCell>
                  <EditLocationClient
                    id={location.id}
                    cost={location.cost}
                    name={location.name}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MaxWidthWrapper>
  );
}
