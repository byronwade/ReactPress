import React from "react";
export default function Plugins() {
	return (
		<>
			<div id="wpbody-content">
				<div id="screen-meta" className="metabox-prefs">
					<div id="contextual-help-wrap" className="hidden" tabIndex={-1} aria-label="Contextual Help Tab">
						<div id="contextual-help-back" />
						<div id="contextual-help-columns">
							<div className="contextual-help-tabs">
								<ul>
									<li id="tab-link-overview" className="active">
										<a href="/" aria-controls="tab-panel-overview">
											Overview
										</a>
									</li>
									<li id="tab-link-compatibility-problems">
										<a href="/" aria-controls="tab-panel-compatibility-problems">
											Troubleshooting
										</a>
									</li>
									<li id="tab-link-plugins-themes-auto-updates">
										<a href="/" aria-controls="tab-panel-plugins-themes-auto-updates">
											Auto-updates
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Managing Plugins</a>
								</p>
								<p>
									<a href="/">Learn more: Auto-updates documentation</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>Plugins extend and expand the functionality of ReactPress. Once a plugin is installed, you may activate it or deactivate it here.</p>
									<p>
										The search for installed plugins will search for terms in their name, description, or author.
										<span id="live-search-desc" className="hide-if-no-js">
											The search results will be updated as you type.
										</span>
									</p>
									<p>
										If you would like to see more plugins to choose from, click on the “Add New” button and you will be able to browse or search for additional plugins from the <a href="/">ReactPress Plugin Directory</a>. Plugins in the ReactPress Plugin Directory are designed and developed by third parties, and are compatible with the license ReactPress uses. Oh, and they&apos;re free!
									</p>
								</div>
								<div id="tab-panel-compatibility-problems" className="help-tab-content">
									<p>Most of the time, plugins play nicely with the core of ReactPress and with other plugins. Sometimes, though, a plugin&apos;s code will get in the way of another plugin, causing compatibility issues. If your site starts doing strange things, this may be the problem. Try deactivating all your plugins and re-activating them in various combinations until you isolate which one(s) caused the issue.</p>
									<p>
										If something goes wrong with a plugin and you cannot use ReactPress, delete or rename that file in the <code>/home/customer/www/byronw34.sg-host.com/public_html/wp-content/plugins</code> directory and it will be automatically deactivated.
									</p>
								</div>
								<div id="tab-panel-plugins-themes-auto-updates" className="help-tab-content">
									<p>Auto-updates can be enabled or disabled for each individual plugin. Plugins with auto-updates enabled will display the estimated date of the next auto-update. Auto-updates depends on the WP-Cron task scheduling system.</p>
									<p>Auto-updates are only available for plugins recognized by ReactPress.org, or that include a compatible update system.</p>
									<p>Please note: Third-party themes and plugins, or custom code, may override ReactPress scheduling.</p>
								</div>
							</div>
						</div>
					</div>
					<div id="screen-options-wrap" className="hidden" tabIndex={-1} aria-label="Screen Options Tab">
						<form id="adv-settings" method="post">
							<fieldset className="metabox-prefs">
								<legend>Columns</legend>
								<label>
									<input className="hide-column-tog" name="description-hide" type="checkbox" id="description-hide" defaultValue="description" defaultChecked={true} />
									Description
								</label>
								<label>
									<input className="hide-column-tog" name="auto-updates-hide" type="checkbox" id="auto-updates-hide" defaultValue="auto-updates" defaultChecked={true} />
									Automatic Updates
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="plugins_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="plugins_per_page" maxLength={3} defaultValue={999} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="plugins_per_page" />
							</fieldset>
							<p className="submit">
								<input type="submit" name="screen-options-apply" id="screen-options-apply" className="button button-primary" defaultValue="Apply" />
							</p>
							<input type="hidden" id="screenoptionnonce" name="screenoptionnonce" defaultValue="566934ee14" />
						</form>
					</div>
				</div>
				<div id="screen-meta-links">
					<div id="screen-options-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="show-settings-link" className="button show-settings" aria-controls="screen-options-wrap" aria-expanded="false">
							Screen Options
						</button>
					</div>
					<div id="contextual-help-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="contextual-help-link" className="button show-settings" aria-controls="contextual-help-wrap" aria-expanded="false">
							Help
						</button>
					</div>
				</div>
				<div className="wrap">
					<h1 className="wp-heading-inline">Plugins</h1>
					<a href="/" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter plugins list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="/" className="current" aria-current="page">
								All <span className="count">(7)</span>
							</a>
							|
						</li>
						<li className="active">
							<a href="/">
								Active <span className="count">(7)</span>
							</a>
							|
						</li>
						<li className="auto-update-enabled">
							<a href="/">
								Auto-updates Enabled <span className="count">(6)</span>
							</a>
							|
						</li>
						<li className="auto-update-disabled">
							<a href="/">
								Auto-updates Disabled <span className="count">(1)</span>
							</a>
						</li>
					</ul>
					<form className="search-form search-plugins" method="get">
						<p className="search-box">
							<label className="screen-reader-text" htmlFor="plugin-search-input">
								Search Installed Plugins:
							</label>
							<input type="search" id="plugin-search-input" className="wp-filter-search" name="s" defaultValue="" placeholder="Search installed plugins..." aria-describedby="live-search-desc" />
							<input type="submit" id="search-submit" className="button hide-if-js" defaultValue="Search Installed Plugins" />
						</p>
					</form>
					<form method="post" id="bulk-action-form">
						<input type="hidden" name="plugin_status" defaultValue="all" />
						<input type="hidden" name="paged" defaultValue={1} />
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="b93b04ef3b" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/plugins.php" />
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action" id="bulk-action-selector-top">
									<option value={-1}>Bulk actions</option>
									<option value="activate-selected">Activate</option>
									<option value="deactivate-selected">Deactivate</option>
									<option value="update-selected">Update</option>
									<option value="delete-selected">Delete</option>
									<option value="enable-auto-update-selected">Enable Auto-updates</option>
									<option value="disable-auto-update-selected">Disable Auto-updates</option>
								</select>
								<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">7 items</span>
								<span className="pagination-links">
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										«
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										‹
									</span>
									<span className="paging-input">
										<label htmlFor="current-page-selector" className="screen-reader-text">
											Current Page
										</label>
										<input className="current-page" id="current-page-selector" type="text" name="paged" defaultValue={1} size={1} aria-describedby="table-paging" />
										<span className="tablenav-paging-text">
											of <span className="total-pages">1</span>
										</span>
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										›
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
						<h2 className="screen-reader-text">Plugins list</h2>
						<table className="wp-list-table widefat plugins">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="name" className="manage-column column-name column-primary">
										Plugin
									</th>
									<th scope="col" id="description" className="manage-column column-description">
										Description
									</th>
									<th scope="col" id="auto-updates" className="manage-column column-auto-updates">
										Automatic Updates
									</th>
								</tr>
							</thead>
							<tbody id="the-list">
								<tr className="active" data-slug="custom-post-type-ui" data-plugin="custom-post-type-ui/custom-post-type-ui.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_67bda0534ec5614464a0c6298c100565">
											Select Custom Post Type UI
										</label>
										<input type="checkbox" name="checked[]" defaultValue="custom-post-type-ui/custom-post-type-ui.php" id="checkbox_67bda0534ec5614464a0c6298c100565" />
									</th>
									<td className="plugin-title column-primary">
										<strong>Custom Post Type UI</strong>
										<div className="row-actions visible">
											<span className={"0"}>
												<a href="/">About</a> |
											</span>
											<span className={"1"}>
												<a href="/">Help</a> |
											</span>
											<span className="deactivate">
												<a href="/" id="deactivate-custom-post-type-ui" aria-label="Deactivate Custom Post Type UI">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>Admin UI panel for registering custom post types and taxonomies in ReactPress</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 1.13.4 | By <a href="/">WebDevStudios</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about Custom Post Type UI" data-title="Custom Post Type UI">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active" data-slug="headless-mode" data-plugin="headless-mode/headless-mode.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_ce92bae431b7778760a6783ee8f9e563">
											Select Headless Mode
										</label>
										<input type="checkbox" name="checked[]" defaultValue="headless-mode/headless-mode.php" id="checkbox_ce92bae431b7778760a6783ee8f9e563" />
									</th>
									<td className="plugin-title column-primary">
										<strong>Headless Mode</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a href="/" id="deactivate-headless-mode" aria-label="Deactivate Headless Mode">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>This plugin disables access to the front end of your site unless the logged-in user can edit posts. It also automatically accepts requests to REST API or WP_GRAPHQL endpoints.</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 0.4.0 | By <a href="/">Josh Pollock, Jason Bahl, and Ben Meredith</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about Headless Mode" data-title="Headless Mode">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active is-uninstallable" data-slug="integrate-firebase" data-plugin="integrate-firebase/init.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_86770beedb154722620934ebd51562c2">
											Select Integrate Firebase
										</label>
										<input type="checkbox" name="checked[]" defaultValue="integrate-firebase/init.php" id="checkbox_86770beedb154722620934ebd51562c2" />
									</th>
									<td className="plugin-title column-primary">
										<strong>Integrate Firebase</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a href="/" id="deactivate-integrate-firebase" aria-label="Deactivate Integrate Firebase">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>Integrate Firebase is a plugin that helps to integrate Firebase features to ReactPress</p>
										</div>
										<div className="active is-uninstallable second plugin-version-author-uri">
											Version 0.9.1 | By <a href="/">dalenguyen</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about Integrate Firebase" data-title="Integrate Firebase">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Enable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active" data-slug="pageviews" data-plugin="pageviews/post-views-total-views-wpgraphql.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_9bab0789d807ffc4e6716b564779a13f">
											Select Post Views and Total Views for WPGraphQL
										</label>
										<input type="checkbox" name="checked[]" defaultValue="pageviews/post-views-total-views-wpgraphql.php" id="checkbox_9bab0789d807ffc4e6716b564779a13f" />
									</th>
									<td className="plugin-title column-primary">
										<strong>Post Views and Total Views for WPGraphQL</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a href="/" id="deactivate-pageviews" aria-label="Deactivate Post Views and Total Views for WPGraphQL">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>A plugin that adds view count tracking and a total post views field to WPGraphQL.</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 1.0 | By <a href="/">Your Name</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about Post Views and Total Views for WPGraphQL" data-title="Post Views and Total Views for WPGraphQL">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active" data-slug="reactpress-importer" data-plugin="reactpress-importer/reactpress-importer.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_ea0788bc52985519a71bb7f2132d3b0b">
											Select ReactPress Importer
										</label>
										<input type="checkbox" name="checked[]" defaultValue="reactpress-importer/reactpress-importer.php" id="checkbox_ea0788bc52985519a71bb7f2132d3b0b" />
									</th>
									<td className="plugin-title column-primary">
										<strong>ReactPress Importer</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a href="/" id="deactivate-reactpress-importer" aria-label="Deactivate ReactPress Importer">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>Import posts, pages, comments, custom fields, categories, tags and more from a ReactPress export file.</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 0.8 | By <a href="/">reactpressdotorg</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about ReactPress Importer" data-title="ReactPress Importer">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active" data-slug="wp-graphql" data-plugin="wp-graphql/wp-graphql.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_60530a700e687ae530ac7a3c5a0f5bfa">
											Select WP GraphQL
										</label>
										<input type="checkbox" name="checked[]" defaultValue="wp-graphql/wp-graphql.php" id="checkbox_60530a700e687ae530ac7a3c5a0f5bfa" />
									</th>
									<td className="plugin-title column-primary">
										<strong>WP GraphQL</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a className="wp-graphql-deactivate-link" href="/" id="deactivate-wp-graphql" aria-label="Deactivate WP GraphQL">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>GraphQL API for ReactPress</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 1.13.8 | By <a href="/">WPGraphQL</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about WP GraphQL" data-title="WP GraphQL">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
								<tr className="active" data-slug="wpgraphql-smart-cache" data-plugin="wpgraphql-smart-cache/wp-graphql-smart-cache.php">
									<th scope="row" className="check-column">
										<label className="screen-reader-text" htmlFor="checkbox_499a8f093548f93283c68ceafb41cde9">
											Select WPGraphQL Smart Cache
										</label>
										<input type="checkbox" name="checked[]" defaultValue="wpgraphql-smart-cache/wp-graphql-smart-cache.php" id="checkbox_499a8f093548f93283c68ceafb41cde9" />
									</th>
									<td className="plugin-title column-primary">
										<strong>WPGraphQL Smart Cache</strong>
										<div className="row-actions visible">
											<span className="deactivate">
												<a className="wpgraphql-smart-cache-deactivate-link" href="/" id="deactivate-wpgraphql-smart-cache" aria-label="Deactivate WPGraphQL Smart Cache">
													Deactivate
												</a>
											</span>
										</div>
										<button type="button" className="toggle-row">
											<span className="screen-reader-text">Show more details</span>
										</button>
									</td>
									<td className="column-description desc">
										<div className="plugin-description">
											<p>Smart Caching and Cache Invalidation for WPGraphQL</p>
										</div>
										<div className="active second plugin-version-author-uri">
											Version 1.0 | By <a href="/">WPGraphQL</a> |
											<a href="/" className="thickbox open-plugin-details-modal" aria-label="More information about WPGraphQL Smart Cache" data-title="WPGraphQL Smart Cache">
												View details
											</a>
										</div>
									</td>
									<td className="column-auto-updates">
										<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
											<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
											<span className="label">Disable auto-updates</span>
										</a>
										<div className="notice notice-error notice-alt inline hidden">
											<p />
										</div>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-2">
											Select All
										</label>
										<input id="cb-select-all-2" type="checkbox" />
									</td>
									<th scope="col" className="manage-column column-name column-primary">
										Plugin
									</th>
									<th scope="col" className="manage-column column-description">
										Description
									</th>
									<th scope="col" className="manage-column column-auto-updates">
										Automatic Updates
									</th>
								</tr>
							</tfoot>
						</table>
						<div className="tablenav bottom">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-bottom" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action2" id="bulk-action-selector-bottom">
									<option value={-1}>Bulk actions</option>
									<option value="activate-selected">Activate</option>
									<option value="deactivate-selected">Deactivate</option>
									<option value="update-selected">Update</option>
									<option value="delete-selected">Delete</option>
									<option value="enable-auto-update-selected">Enable Auto-updates</option>
									<option value="disable-auto-update-selected">Disable Auto-updates</option>
								</select>
								<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">7 items</span>
								<span className="pagination-links">
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										«
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										‹
									</span>
									<span className="screen-reader-text">Current Page</span>
									<span id="table-paging" className="paging-input">
										<span className="tablenav-paging-text">
											1 of <span className="total-pages">1</span>
										</span>
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										›
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
					</form>
					<span className="spinner" />
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
