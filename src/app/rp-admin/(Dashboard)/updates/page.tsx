import React from "react";
import { MenuOptions } from "./MenuOptions";

export default function Update() {
	return (
		<>
			<div className="text-foreground">
				<MenuOptions />
				<div className="wrap">
					<h1 className="mb-4 text-2xl font-bold">ReactPress Updates</h1>
					<p className="mb-4">Here you can find information about updates, set auto-updates and see what plugins or themes need updating.</p>
					<h2 className="mb-2 text-xl font-semibold wp-current-version">Current version: 6.1.1</h2>
					<p className="mb-2 update-last-checked">
						Last checked on February 17, 2023 at 9:43 am GMT+0000. <a href="/" className="text-primary hover:underline">Check again.</a>
					</p>
					<p className="mb-4 auto-update-status">This site will not receive automatic updates for new versions of ReactPress. </p>
					<h2 className="mb-4 text-xl font-semibold response">You have the latest version of ReactPress.</h2>
					<ul className="mb-6 core-updates">
						<li>
							<p></p>
							<form method="post" action="#" name="upgrade" className="upgrade">
								<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="01913a925f" />
									<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/update-core.php" />
								<p>
									<input name="version" defaultValue="6.1.1" type="hidden" />
									<input name="locale" defaultValue="en_US" type="hidden" />
									<input type="submit" name="upgrade" id="upgrade" className="px-4 py-2 rounded cursor-pointer button bg-primary text-primary-foreground hover:bg-primary/90" defaultValue="Re-install version 6.1.1" />
								</p>
							</form>
						</li>
					</ul>
					<h2 className="mb-2 text-xl font-semibold">Plugins</h2>
					<p className="mb-4">Your plugins are all up to date.</p>
					<h2 className="mb-2 text-xl font-semibold">Themes</h2>
					<p className="mb-4">Your themes are all up to date.</p>
				</div>
				<div className="clear"></div>
			</div>
		</>
	);
}
