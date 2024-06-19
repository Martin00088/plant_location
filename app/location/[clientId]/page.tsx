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
import { Clients } from "@/db/staticFiles";

type PageProps = {
  params: {
    clientId: number;
  };
};

export default function Page({ params }: PageProps) {
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
            {Clients.map((client) => {
              if (client.id == params.clientId) {
                return client.locations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell>{location.numero}</TableCell>
                    <TableCell>{location.cost}</TableCell>
                    <TableCell>
                      <EditLocationClient
                        id={location.id}
                        cost={location.cost}
                        name={location.numero}
                      />
                    </TableCell>
                  </TableRow>
                ));
              }
            })}
          </TableBody>
        </Table>
      </div>
    </MaxWidthWrapper>
  );
}
