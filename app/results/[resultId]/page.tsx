"use client";
import { useEffect, useState } from "react";
import { Results } from "@prisma/client";

export default function Page(pageProp: { params: { resultId: number } }) {
	const [result, setResult] = useState<Results>();
  
	useEffect(() => {
		fetch("/api/results/" + pageProp.params.resultId, { method: "GET" })
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setResult(data.results)
			})
			.catch(console.error);
	}, [pageProp.params.resultId]);
	
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
