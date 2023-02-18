import Toolbar from "./toolbar";
import { Outlet } from "react-router";
// Footer
import Footer from "./footer";

//test components
//import WordpressTable from "./components/table";

export default function Layout() {
	return (
		<>
			<div id="wpcontent">
				<Toolbar />
				<div id="wpbody" role="main">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}
