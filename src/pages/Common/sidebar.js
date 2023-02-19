import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
	const location = useLocation();
	return (
		<>
			<div id="adminmenumain" role="navigation" aria-label="Main menu">
				<div id="adminmenuback" />
				<div id="adminmenuwrap">
					<ul id="adminmenu">
						<li className={`wp-first-item wp-has-submenu ${location.pathname === "/" || location.pathname === "/updates" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-top-first menu-icon-dashboard menu-top-last`} id="menu-dashboard">
							<NavLink to="/" exact className={location.pathname === "/" || location.pathname === "/updates" ? "wp-has-current-submenu wp-has-current-submenu" : "wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-dashboard" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Dashboard</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Dashboard
								</li>
								<li className={location.pathname === "/" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Home
									</NavLink>
								</li>
								<li className={location.pathname === "/updates" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/updates" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Updates{" "}
										<span className="update-plugins count-0">
											<span className="update-count">0</span>
										</span>
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						<li className={`wp-has-submenu ${location.pathname.includes("/edit/posts") || location.pathname.includes("/post-new/tags") || location.pathname.includes("/post-new/category") || location.pathname.includes("/post-new/posts") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-posts">
							<NavLink to="/edit/posts" className={location.pathname.includes("/edit/posts") || location.pathname.includes("/post-new/tags") || location.pathname.includes("/post-new/category") || location.pathname.includes("/post-new/posts") ? "wp-has-current-submenu wp-menu-open" : "wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-post" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Posts</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Posts
								</li>
								<li className={location.pathname === "/edit/posts" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/edit/posts" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										All Posts
									</NavLink>
								</li>
								<li className={location.pathname === "/post-new/posts" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/post-new/posts" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Add New
									</NavLink>
								</li>
								<li className={location.pathname === "/post-new/category" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/post-new/category" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Categories
									</NavLink>
								</li>
								<li className={location.pathname === "/post-new/tags" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/post-new/tags" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Tags
									</NavLink>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.pathname.includes("/upload") || location.pathname.includes("/media-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-media">
							<NavLink to="/upload" className={`wp-has-submenu ${location.pathname.includes("/upload") || location.pathname.includes("/media-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-media" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Media</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className={location.pathname === "/upload" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/upload" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Library
									</NavLink>
								</li>
								<li className={location.pathname === "/media-new" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/media-new" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Add New
									</NavLink>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.pathname.includes("/edit/pages") || location.pathname.includes("/post-new/pages") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-pages">
							<NavLink to="/edit/pages" className={`wp-has-submenu ${location.pathname.includes("/edit/pages") || location.pathname.includes("/post-new/pages") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="false">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-page" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Pages</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Pages
								</li>
								<li className={location.pathname === "/edit/pages" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/edit/pages" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										All Pages
									</NavLink>
								</li>
								<li className={location.pathname === "/post-new/pages" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/post-new/pages" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Add New
									</NavLink>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.pathname.includes("/edit-comments") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-comments">
							<NavLink to="/edit-comments" className={`wp-has-submenu ${location.pathname.includes("/edit-comments") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`}>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-comments" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">
									Comments{" "}
									<span className="awaiting-mod count-0">
										<span className="pending-count" aria-hidden="true">
											0
										</span>
										<span className="comments-in-moderation-text screen-reader-text">0 Comments in moderation</span>
									</span>
								</div>
							</NavLink>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						{/* <li className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first" id="menu-appearance">
							<NavLink to="/" className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first" aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-appearance" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Appearance</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Appearance
								</li>
								<li className="wp-first-item">
									<a href="/" className="wp-first-item">
										Themes{" "}
										<span className="update-plugins count-0">
											<span className="theme-count">0</span>
										</span>
									</a>
								</li>
								<li className="hide-if-no-customize">
									<a href="/" className="hide-if-no-customize">
										Customize
									</a>
								</li>
								<li>
									<a href="/">Menus</a>
								</li>
								<li>
									<a href="/">Theme File Editor</a>
								</li>
							</ul>
						</li>
						<li className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins" id="menu-plugins">
							<a href="/" className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins" aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-plugins" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">
									Plugins{" "}
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Plugins{" "}
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</li>
								<li className="wp-first-item">
									<a href="/" className="wp-first-item">
										Installed Plugins
									</a>
								</li>
								<li>
									<a href="/">Add New</a>
								</li>
								<li>
									<a href="/">Plugin File Editor</a>
								</li>
							</ul>
						</li> */}
						<li className={`wp-has-submenu ${location.pathname.includes("/users") || location.pathname.includes("/user-new") || location.pathname.includes("/profile") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-users">
							<NavLink to="/users" className={`wp-has-submenu ${location.pathname.includes("/users") || location.pathname.includes("/user-new") || location.pathname.includes("/profile") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-users" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Users</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Users
								</li>
								<li className={location.pathname === "/users" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/users" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										All Users
									</NavLink>
								</li>
								<li className={location.pathname === "/user-new" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/user-new" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Add New
									</NavLink>
								</li>
								<li className={location.pathname === "/profile" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/profile" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Profile
									</NavLink>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.pathname === "/site-health" || location.pathname === "/tools" || location.pathname === "/import" || location.pathname === "/export" || location.pathname === "/export-personal-data" || location.pathname === "/erase-personal-data" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-tools">
							<NavLink to="/tools" className={`wp-has-submenu ${location.pathname === "/site-health" || location.pathname === "/tools" || location.pathname === "/import" || location.pathname === "/export" || location.pathname === "/export-personal-data" || location.pathname === "/erase-personal-data" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-tools" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Tools</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Tools
								</li>
								<li className={location.pathname === "/tools" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink href="/tools" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Available Tools
									</NavLink>
								</li>
								<li className={location.pathname === "/import" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/import" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Import
									</NavLink>
								</li>
								<li className={location.pathname === "/export" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/export" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Export
									</NavLink>
								</li>
								<li className={location.pathname === "/site-health" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/site-health" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Site Health{" "}
										<span className="menu-counter site-health-counter count-0">
											<span className="count">0</span>
										</span>
									</NavLink>
								</li>
								<li className={location.pathname === "/export-personal-data" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/export-personal-data" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Export Personal Data
									</NavLink>
								</li>
								<li className={location.pathname === "/erase-personal-data" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/erase-personal-data" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Erase Personal Data
									</NavLink>
								</li>
							</ul>
						</li>
						<li
							className={`wp-has-submenu ${
								location.pathname === "/options-privacy" || location.pathname === "/options-permalink" || location.pathname === "/options-media" || location.pathname === "/options-discussion" || location.pathname === "/options-general" || location.pathname === "/options-reading" || location.pathname === "/options-reading" || location.pathname === "/options-writing" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"
							} menu-top menu-icon-post open-if-no-js menu-top-first`}
							id="menu-settings"
						>
							<NavLink
								to="/options-general"
								className={`wp-has-submenu ${
									location.pathname === "/options-privacy" || location.pathname === "/options-permalink" || location.pathname === "/options-media" || location.pathname === "/options-discussion" || location.pathname === "/options-general" || location.pathname === "/options-reading" || location.pathname === "/options-reading" || location.pathname === "/options-writing" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"
								} menu-top menu-icon-post open-if-no-js menu-top-first`}
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-settings" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Settings</div>
							</NavLink>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Settings
								</li>
								<li className={location.pathname === "/options-general" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-general" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										General
									</NavLink>
								</li>
								<li className={location.pathname === "/options-writing" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-writing" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Writing
									</NavLink>
								</li>
								<li className={location.pathname === "/options-reading" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-reading" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Reading
									</NavLink>
								</li>
								<li className={location.pathname === "/options-discussion" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-discussion" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Discussion
									</NavLink>
								</li>
								<li className={location.pathname === "/options-media" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-media" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Media
									</NavLink>
								</li>
								<li className={location.pathname === "/options-permalink" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-permalink" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Permalinks
									</NavLink>
								</li>
								<li className={location.pathname === "/options-privacy" ? "wp-first-item current" : "wp-first-item"}>
									<NavLink to="/options-privacy" className={({ isActive }) => (isActive ? "wp-first-item current active" : "wp-first-item")}>
										Privacy
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						<li id="collapse-menu" className="hide-if-no-js">
							<button type="button" id="collapse-button" aria-label="Collapse Main menu" aria-expanded="true">
								<span className="collapse-button-icon" aria-hidden="true" />
								<span className="collapse-button-label">Collapse menu</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
