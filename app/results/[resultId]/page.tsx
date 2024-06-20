type PageProps = {
  params: {
    resultId: number;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Result {params.resultId}</h1>
    </div>
  );
}
