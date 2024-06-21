"use client";
import { useEffect, useState } from "react";
type PageProps = {
	params: {
		resultId: number;
	};
};

export default function Page(pageProp: { params: { resultId: number } }) {
	const [result, setResult] = useState<Result>();
  
	useEffect(() => {
		fetch("/api/results/" + pageProp.params.resultId, { method: "GET" })
			.then(res => res.json())
			.then(data => setResult(data.locations))
			.catch(console.error);
	}, [pageProp.params.resultId]);

	type Result = {
		id: string;
		name: string | null;
		solutionData: string;
		inputdata: string;
		console: string;
		createdAt: Date;
		maxMemory: number;
		statusSolution: string;
		processingTime: number;
	};

  return (
    <div>
      <h1>Result {pageProp.params.resultId}</h1>
	  {result ? (
		<div>
		  <h2>{result.name}</h2>
		  <p>{result.createdAt.toLocaleString()}</p>
		  <p>{result.solutionData}</p>
		  <p>{result.inputdata}</p>
		  <p>{result.console}</p>

		</div>
	  ) : (
		<p>Loading...</p>
	  )}
    </div>
  );
}
