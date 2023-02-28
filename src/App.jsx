import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./pages/routes";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
	link: createHttpLink({ uri: "https://reactpressgraphql-development.up.railway.app/graphql" }),
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<AllRoutes />
				</Suspense>
			</Router>
		</ApolloProvider>
	);
};

export default App;
