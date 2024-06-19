export const Locations = [
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
];

export const Clients = [
  {
    id: 1,
    name: "Client 1",
    demand: 100,
    locations: [
      {
        id: 1,
        numero: "Planta 1",
        cost: 100,
      },
      {
        id: 2,
        numero: "Planta 2",
        cost: 100,
      },
      {
        id: 3,
        numero: "Planta 3",
        cost: 100,
      },
    ],
  },
  {
    id: 2,
    name: "Client 2",
    demand: 200,
    locations: [
      {
        id: 1,
        numero: "Planta 1",
        cost: 100,
      },
      {
        id: 2,
        numero: "Planta 2",
        cost: 100,
      },
      {
        id: 3,
        numero: "Planta 3",
        cost: 100,
      },
    ],
  },
  {
    id: 3,
    name: "Client 3",
    demand: 300,
    locations: [
      {
        id: 1,
        numero: "Planta 1",
        cost: 100,
      },
      {
        id: 2,
        numero: "Planta 2",
        cost: 100,
      },
      {
        id: 3,
        numero: "Planta 3",
        cost: 100,
      },
    ],
  },
];
