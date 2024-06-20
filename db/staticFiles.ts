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

export const Results = [
  {
    id: 1,
    name: "Result 1",
    result: "123132312",
    solutionData:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0+IHwgaSBpbiBDdXN0b21lcnN9Owp7U29sdXRpb25Mb2NhdGlvbn0gc29sdXRpb25Mb2NhdGlvbiA9IHs8b3BlbltpXSwgbG9hZFtpXT4gfCBpIGluIExvY2F0aW9uc307CgptYWluIHsKCXRoaXNPcGxNb2RlbC5nZW5lcmF0ZSgpOwoJdmFyIHNvbCA9IG5ldyBJbG9PcGxDUFNvbHV0aW9uKCk7Cglmb3IgKHZhciBjIGluIHRoaXNPcGxNb2RlbC5DdXN0b21lcnMpCgkJc29sLnNldFZhbHVlKHRoaXNPcGxNb2RlbC5jdXN0W2NdLCB0aGlzT3BsTW9kZWwuY3VzdFZhbHVlc1tjXSk7CgoJY3Auc2V0U3RhcnRpbmdQb2ludChzb2wpOwoJY3Auc29sdmUoKTsKCXRoaXNPcGxNb2RlbC5wb3N0UHJvY2VzcygpOwp9Cg==",
    inputdata:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0",
    console:
      "[2024-06-19T18:41:08.142Z, INFO]           70,836   10,000          2   17        12  = _int39",
    maxMemory: "31951",
    statusSolution: "Solved",
    processingTime: "31951",
    createdAt: "2024-06-19T18:41:08.142Z",
  },
  {
    id: 2,
    name: "Result 2",
    result: "123132312",
    solutionData:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0+IHwgaSBpbiBDdXN0b21lcnN9Owp7U29sdXRpb25Mb2NhdGlvbn0gc29sdXRpb25Mb2NhdGlvbiA9IHs8b3BlbltpXSwgbG9hZFtpXT4gfCBpIGluIExvY2F0aW9uc307CgptYWluIHsKCXRoaXNPcGxNb2RlbC5nZW5lcmF0ZSgpOwoJdmFyIHNvbCA9IG5ldyBJbG9PcGxDUFNvbHV0aW9uKCk7Cglmb3IgKHZhciBjIGluIHRoaXNPcGxNb2RlbC5DdXN0b21lcnMpCgkJc29sLnNldFZhbHVlKHRoaXNPcGxNb2RlbC5jdXN0W2NdLCB0aGlzT3BsTW9kZWwuY3VzdFZhbHVlc1tjXSk7CgoJY3Auc2V0U3RhcnRpbmdQb2ludChzb2wpOwoJY3Auc29sdmUoKTsKCXRoaXNPcGxNb2RlbC5wb3N0UHJvY2VzcygpOwp9Cg==",
    inputdata:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0",
    console:
      "[2024-06-19T18:41:08.142Z, INFO]           70,836   10,000          2   17        12  = _int39",
    maxMemory: "31951",
    statusSolution: "Solved",
    processingTime: "31951",
    createdAt: "2024-06-19T18:41:08.142Z",
  },
  {
    id: 3,
    name: "Result 3",
    result: "123132312",
    solutionData:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0+IHwgaSBpbiBDdXN0b21lcnN9Owp7U29sdXRpb25Mb2NhdGlvbn0gc29sdXRpb25Mb2NhdGlvbiA9IHs8b3BlbltpXSwgbG9hZFtpXT4gfCBpIGluIExvY2F0aW9uc307CgptYWluIHsKCXRoaXNPcGxNb2RlbC5nZW5lcmF0ZSgpOwoJdmFyIHNvbCA9IG5ldyBJbG9PcGxDUFNvbHV0aW9uKCk7Cglmb3IgKHZhciBjIGluIHRoaXNPcGxNb2RlbC5DdXN0b21lcnMpCgkJc29sLnNldFZhbHVlKHRoaXNPcGxNb2RlbC5jdXN0W2NdLCB0aGlzT3BsTW9kZWwuY3VzdFZhbHVlc1tjXSk7CgoJY3Auc2V0U3RhcnRpbmdQb2ludChzb2wpOwoJY3Auc29sdmUoKTsKCXRoaXNPcGxNb2RlbC5wb3N0UHJvY2VzcygpOwp9Cg==",
    inputdata:
      "dXNpbmcgQ1A7CgppbnQgbmJDdXN0b21lciA9IC4uLjsKaW50IG5iTG9jYXRpb24gPSAuLi47CnJhbmdlIEN1c3RvbWVycyA9IDAuLm5iQ3VzdG9tZXItMTsKcmFuZ2UgTG9jYXRpb25zID0gMC4ubmJMb2NhdGlvbi0xOwppbnQgY29zdFtDdXN0b21lcnNdW0xvY2F0aW9uc10gPSAuLi47CmludCBkZW1hbmRbQ3VzdG9tZXJzXSA9IC4uLjsKaW50IGZpeGVkQ29zdFtMb2NhdGlvbnNdID0gLi4uOwppbnQgY2FwYWNpdHlbTG9jYXRpb25zXSA9IC4uLjs7CgppbnQgY3VzdFZhbHVlc1tDdXN0b21lcnNdID0gLi4uOwoKZHZhciBpbnQgY3VzdFtDdXN0b21lcnNdIGluIExvY2F0aW9uczsKZHZhciBpbnQgb3BlbltMb2NhdGlvbnNdIGluIDAuLjE7CmR2YXIgaW50IGxvYWRbbCBpbiBMb2NhdGlvbnNdIGluIDAuLmNhcGFjaXR5W2xdOwoKZGV4cHIgaW50IG9iaiA9IHN1bShsIGluIExvY2F0aW9ucykgZml4ZWRDb3N0W2xdKm9wZW5bbF0KICArIHN1bShjIGluIEN1c3RvbWVycykgY29zdFtjXVtjdXN0W2NdXTsKCmRleHByIGZsb2F0IG9jY3VwYW5jeSA9IHN1bShjIGluIEN1c3RvbWVycykgZGVtYW5kW2NdCiAgLyBzdW0obCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0qY2FwYWNpdHlbbF07CgpkZXhwciBmbG9hdCBtaW5PY2N1cCA9IG1pbihsIGluIExvY2F0aW9ucykKICAoKGxvYWRbbF0gLyAoY2FwYWNpdHlbbF0pICsgKDEtb3BlbltsXSkpKTsKCmV4ZWN1dGUgewoJY3AuYWRkS1BJKG9jY3VwYW5jeSwgIk9jY3VwYW5jeSIpOwoJY3AuYWRkS1BJKG1pbk9jY3VwLCAiTWluIG9jY3VwYW5jeSIpOwoJY3AucGFyYW0udGltZUxpbWl0ID0gMzA7CgljcC5wYXJhbS5sb2dQZXJpb2QgPSAxMDAwMDsKfQoKbWluaW1pemUgb2JqOwoKc3ViamVjdCB0byB7Cglmb3JhbGwobCBpbiBMb2NhdGlvbnMpIG9wZW5bbF0gPT0gKGxvYWRbbF0gPiAwKTsKCXBhY2soCgkJYWxsKGwgaW4gTG9jYXRpb25zKSBsb2FkW2xdLAoJCWFsbChjIGluIEN1c3RvbWVycykgY3VzdFtjXSwKCQlhbGwoYyBpbiBDdXN0b21lcnMpIGRlbWFuZFtjXQoJKTsKfQoKZXhlY3V0ZSB7CiAgCXdyaXRlbG4oIm9iaiA9ICIgKyBvYmopOwp9Cgp0dXBsZSBTb2x1dGlvbkxvY2F0aW9uIHsKCWludCBsb2FkOwoJaW50IG9wZW47Cn0KdHVwbGUgU29sdXRpb25DdXN0b21lciB7CglpbnQgY3VzdDsKfQoKe1NvbHV0aW9uQ3VzdG9tZXJ9IHNvbHV0aW9uQ3VzdG9tZXIgPSB7PGN1c3RbaV0",
    console:
      "[2024-06-19T18:41:08.142Z, INFO]           70,836   10,000          2   17        12  = _int39",
    maxMemory: "31951",
    statusSolution: "Solved",
    processingTime: "31951",
    createdAt: "2024-06-19T18:41:08.142Z",
  },
];
