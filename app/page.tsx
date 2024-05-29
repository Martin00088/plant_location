import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div>
        <h1 className="text-4xl font-bold">Plant Location</h1>
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
      </div>
    </MaxWidthWrapper>
  );
}
