"use client"

import { useQuery } from "@tanstack/react-query"

interface ApiResponse {
	message: string
}

async function fetchApi(): Promise<ApiResponse> {
	const response = await fetch("http://localhost:8000/")
	if (!response.ok) {
		throw new Error("Failed to fetch data")
	}
	return response.json()
}

export default function Home() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["api-root"],
		queryFn: fetchApi,
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div>
			<h1>API Response</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
