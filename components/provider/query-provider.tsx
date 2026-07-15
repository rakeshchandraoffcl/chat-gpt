"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 30 * 1000,
		},
	},
});

export default function QueryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// Provide the client to your App
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
