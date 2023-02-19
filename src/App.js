import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./pages/routes";

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<AllRoutes />
			</Suspense>
		</Router>
	);
};

export default App;
