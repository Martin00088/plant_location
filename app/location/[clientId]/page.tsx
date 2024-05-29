"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
      cost: 30,
    },
  ]);
  return (
    <MaxWidthWrapper>
      <div>
        <h1 className="text-4xl font-bold">Location</h1>
        <h1 className="text-4xl font-bold">Cliente {params.clientId}</h1>

        {
          <table className="table-auto mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              {location.map((l) => (
                <tr key={l.id}>
                  <td className="border px-4 py-2">{l.name}</td>
                  <td className="border px-4 py-2">{l.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </MaxWidthWrapper>
  );
}
