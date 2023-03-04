"use client";
import React from "react";
import ToggleScreenOptionsAndHelp, { Help, ScreenOptions } from "../components/ToggleScreenOptionsAndHelp/ToggleScreenOptionsAndHelp";
export function MenuOptions() {
	return (
		<>
			<ToggleScreenOptionsAndHelp>
				<Help>
					<div id="contextual-help-columns">
						<div className="contextual-help-tabs">
							<ul>
								<li id="tab-link-overview" className="active">
									<a href="/" aria-controls="tab-panel-overview">
										Overview
									</a>
								</li>
								<li id="tab-link-help-navigation">
									<a href="/" aria-controls="tab-panel-help-navigation">
										Navigation
									</a>
								</li>
								<li id="tab-link-help-layout">
									<a href="/" aria-controls="tab-panel-help-layout">
										Layout
									</a>
								</li>
								<li id="tab-link-help-content">
									<a href="/" aria-controls="tab-panel-help-content">
										Content
									</a>
								</li>
							</ul>
						</div>
						<div className="contextual-help-sidebar">
							<p>
								<strong>For more information:</strong>
							</p>
							<p>
								<a href="/">Documentation on Dashboard</a>
							</p>
							<p>
								<a href="/">Support</a>
							</p>
							<p>
								<a href="/">Version 6.1.1</a>
							</p>
						</div>
						<div className="contextual-help-tabs-wrap">
							<div id="tab-panel-overview" className="help-tab-content active">
								<p>Welcome to your WordPress Dashboard!</p>
								<p>The Dashboard is the first place you will come to every time you log into your site. It is where you will find all your WordPress tools. If you need help, just click the “Help” tab above the screen title.</p>
							</div>
							<div id="tab-panel-help-navigation" className="help-tab-content">
								<p>The left-hand navigation menu provides links to all of the WordPress administration screens, with submenu items displayed on hover. You can minimize this menu to a narrow icon strip by clicking on the Collapse Menu arrow at the bottom.</p>
								<p>Links in the Toolbar at the top of the screen connect your dashboard and the front end of your site, and provide access to your profile and helpful WordPress information.</p>
							</div>
							<div id="tab-panel-help-layout" className="help-tab-content">
								<p>You can use the following controls to arrange your Dashboard screen to suit your workflow. This is true on most other administration screens as well.</p>
								<p>
									<strong>Screen Options</strong> — Use the Screen Options tab to choose which Dashboard boxes to show.
								</p>
								<p>
									<strong>Drag and Drop</strong> — To rearrange the boxes, drag and drop by clicking on the title bar of the selected box and releasing when you see a gray dotted-line rectangle appear in the location you want to place the box.
								</p>
								<p>
									<strong>Box Controls</strong> — Click the title bar of the box to expand or collapse it. Some boxes added by plugins may have configurable content, and will show a “Configure” link in the title bar if you hover over it.
								</p>
							</div>
							<div id="tab-panel-help-content" className="help-tab-content">
								<p>The boxes on your Dashboard screen are:</p>
								<p>
									<strong>Welcome</strong> — Shows links for some of the most common tasks when setting up a new site.
								</p>
								<p>
									<strong>Site Health Status</strong> — Informs you of any potential issues that should be addressed to improve the performance or security of your website.
								</p>
								<p>
									<strong>At a Glance</strong> — Displays a summary of the content on your site and identifies which theme and version of WordPress you are using.
								</p>
								<p>
									<strong>Activity</strong> — Shows the upcoming scheduled posts, recently published posts, and the most recent comments on your posts and allows you to moderate them.
								</p>
								<p>
									<strong>Quick Draft</strong> — Allows you to create a new post and save it as a draft. Also displays links to the 3 most recent draft posts you&apos;ve started.
								</p>
								<p>
									<strong>WordPress Events and News</strong> — Upcoming events near you as well as the latest news from the official WordPress project and the <a href="/">WordPress Planet</a>.
								</p>
							</div>
						</div>
					</div>
				</Help>
				<ScreenOptions>
					<form id="adv-settings" method="post">
						<fieldset className="metabox-prefs">
							<legend>Screen elements</legend>
							<p>Some screen elements can be shown or hidden by using the checkboxes. They can be expanded and collapsed by clickling on their headings, and arranged by dragging their headings or by clicking on the up and down arrows. </p>
							<label htmlFor="dashboard_site_health-hide">
								<input className="hide-postbox-tog" name="dashboard_site_health-hide" type="checkbox" id="dashboard_site_health-hide" defaultValue="dashboard_site_health" defaultChecked={true} />
								Site Health Status
							</label>
							<label htmlFor="dashboard_right_now-hide">
								<input className="hide-postbox-tog" name="dashboard_right_now-hide" type="checkbox" id="dashboard_right_now-hide" defaultValue="dashboard_right_now" defaultChecked={true} />
								At a Glance
							</label>
							<label htmlFor="dashboard_activity-hide">
								<input className="hide-postbox-tog" name="dashboard_activity-hide" type="checkbox" id="dashboard_activity-hide" defaultValue="dashboard_activity" defaultChecked={true} />
								Activity
							</label>
							<label htmlFor="dashboard_quick_press-hide">
								<input className="hide-postbox-tog" name="dashboard_quick_press-hide" type="checkbox" id="dashboard_quick_press-hide" defaultValue="dashboard_quick_press" defaultChecked={true} />
								<span className="hide-if-no-js">Quick Draft</span> <span className="hide-if-js">Your Recent Drafts</span>
							</label>
							<label htmlFor="dashboard_primary-hide">
								<input className="hide-postbox-tog" name="dashboard_primary-hide" type="checkbox" id="dashboard_primary-hide" defaultValue="dashboard_primary" defaultChecked={true} />
								WordPress Events and News
							</label>
							<label htmlFor="wp_welcome_panel-hide">
								<input type="checkbox" id="wp_welcome_panel-hide" />
								Welcome
							</label>
						</fieldset>
						<input type="hidden" id="screenoptionnonce" name="screenoptionnonce" defaultValue="566934ee14" />
					</form>
				</ScreenOptions>
			</ToggleScreenOptionsAndHelp>
		</>
	);
}
