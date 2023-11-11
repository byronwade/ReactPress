import React from "react";
export default function ErasePersonalData() {
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
									<li id="tab-link-default-data">
										<a href="/" aria-controls="tab-panel-default-data">
											Default Data
										</a>
									</li>
									<li id="tab-link-plugin-data">
										<a href="/" aria-controls="tab-panel-plugin-data">
											Plugin Data
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Erase Personal Data</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>This screen is where you manage requests to erase personal data.</p>
									<p>Privacy Laws around the world require businesses and online services to delete, anonymize, or forget the data they collect about an individual. The rights those laws enshrine are sometimes called the &quot;Right to be Forgotten&quot;.</p>
									<p>The tool associates data stored in ReactPress with a supplied email address, including profile data and comments.</p>
									<p>
										<strong>Note: As this tool only gathers data from ReactPress and participating plugins, you may need to do more to comply with erasure requests. For example, you are also responsible for ensuring that data collected by or stored with the 3rd party services your organization uses gets deleted.</strong>
									</p>
								</div>
								<div id="tab-panel-default-data" className="help-tab-content">
									<p>
										ReactPress collects (but <em>never</em> publishes) a limited amount of data from logged-in users but then deletes it or anonymizes it. That data can include:
									</p>
									<p>
										<strong>Profile Information</strong> — user email address, username, display name, nickname, first name, last name, description/bio, and registration date.
									</p>
									<p>
										<strong>Community Events Location</strong> — The IP Address of the user which is used for the Upcoming Community Events shown in the dashboard widget.
									</p>
									<p>
										<strong>Session Tokens</strong> — User login information, IP Addresses, Expiration Date, User Agent (Browser/OS), and Last Login.
									</p>
									<p>
										<strong>Comments</strong> — ReactPress does not delete comments. The software does anonymize (but, again, <em>never</em> publishes) the associated Email Address, IP Address, and User Agent (Browser/OS).
									</p>
									<p>
										<strong>Media</strong> — A list of URLs for all media file uploads made by the user.
									</p>
								</div>
								<div id="tab-panel-plugin-data" className="help-tab-content">
									<p>Many plugins may collect or store personal data either in the ReactPress database or remotely. Any Erase Personal Data request should delete data from plugins as well.</p>
									<p>
										If you are a plugin author, you can
										<a href="/" target="_blank">
											learn more about how to add support for the Personal Data Eraser to a plugin here
										</a>
										.
									</p>
									<p>
										If you are not sure, check the plugin documentation or contact the plugin author to see if the plugin collects data and if it supports the Data Eraser tool. This information may be available in the <a href="/">Privacy Policy Guide</a>.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div id="screen-options-wrap" className="hidden" tabIndex={-1} aria-label="Screen Options Tab">
						<form id="adv-settings" method="post">
							<fieldset className="metabox-prefs">
								<legend>Columns</legend>
								<label>
									<input className="hide-column-tog" name="email-hide" type="checkbox" id="email-hide" defaultValue="email" defaultChecked={true} />
									Requester
								</label>
								<label>
									<input className="hide-column-tog" name="status-hide" type="checkbox" id="status-hide" defaultValue="status" defaultChecked={true} />
									Status
								</label>
								<label>
									<input className="hide-column-tog" name="created_timestamp-hide" type="checkbox" id="created_timestamp-hide" defaultValue="created_timestamp" defaultChecked={true} />
									Requested
								</label>
								<label>
									<input className="hide-column-tog" name="next_steps-hide" type="checkbox" id="next_steps-hide" defaultValue="next_steps" defaultChecked={true} />
									Next steps
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="remove_personal_data_requests_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="remove_personal_data_requests_per_page" maxLength={3} defaultValue={20} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="remove_personal_data_requests_per_page" />
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
				<div className="wrap nosubsub">
					<h1>Erase Personal Data</h1>
					<p>This tool helps site owners comply with local laws and regulations by deleting or anonymizing known data for a given user.</p>
					<hr className="wp-header-end" />
					<form action="#" method="post" className="wp-privacy-request-form">
						<h2>Add Data Erasure Request</h2>
						<div className="wp-privacy-request-form-field">
							<table className="form-table">
								<tbody>
									<tr>
										<th scope="row">
											<label htmlFor="username_or_email_for_privacy_request">Username or email address</label>
										</th>
										<td>
											<input type="text" required={false} className="regular-text ltr" id="username_or_email_for_privacy_request" name="username_or_email_for_privacy_request" />
										</td>
									</tr>
									<tr>
										<th scope="row">Confirmation email </th>
										<td>
											<label htmlFor="send_confirmation_email">
												<input type="checkbox" name="send_confirmation_email" id="send_confirmation_email" defaultValue={1} defaultChecked={true} />
												Send personal data erasure confirmation email.
											</label>
										</td>
									</tr>
								</tbody>
							</table>
							<p className="submit">
								<input type="submit" name="submit" id="submit" className="button" defaultValue="Send Request" />
							</p>
						</div>
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="ea350325c8" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/erase-personal-data.php" /> <input type="hidden" name="action" defaultValue="add_remove_personal_data_request" />
						<input type="hidden" name="type_of_action" defaultValue="remove_personal_data" />
					</form>
					<hr />
					<h2 className="screen-reader-text">Filter erase personal data list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="/" className="current" aria-current="page">
								All <span className="count">(0)</span>
							</a>
						</li>
					</ul>
					<form className="search-form wp-clearfix">
						<input type="hidden" name="filter-status" defaultValue="" />
						<input type="hidden" name="orderby" defaultValue="" />
						<input type="hidden" name="order" defaultValue="" />
					</form>
					<form method="post">
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="a7bcb863b4" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/erase-personal-data.php" />
						<div className="tablenav top">
							<div className="tablenav-pages no-pages">
								<span className="displaying-num">0 items</span>
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
											of <span className="total-pages">0</span>
										</span>
									</span>
									<a className="next-page button" href="/">
										<span className="screen-reader-text">Next page</span>
										<span aria-hidden="true">›</span>
									</a>
									<a className="last-page button" href="/">
										<span className="screen-reader-text">Last page</span>
										<span aria-hidden="true">»</span>
									</a>
								</span>
							</div>
							<br className="clear" />
						</div>
						<h2 className="screen-reader-text">Erase personal data list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list privacy_requests">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="email" className="manage-column column-email column-primary sortable desc">
										<a href="/">
											<span>Requester</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="status" className="manage-column column-status">
										Status
									</th>
									<th scope="col" id="created_timestamp" className="manage-column column-created_timestamp sortable desc">
										<a href="/">
											<span>Requested</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="next_steps" className="manage-column column-next_steps">
										Next steps
									</th>
								</tr>
							</thead>
							<tbody id="the-list" data-wp-lists="list:privacy_request">
								<tr className="no-items">
									<td className="colspanchange" colSpan={5}>
										No items found.
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
									<th scope="col" className="manage-column column-email column-primary sortable desc">
										<a href="/">
											<span>Requester</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-status">
										Status
									</th>
									<th scope="col" className="manage-column column-created_timestamp sortable desc">
										<a href="/">
											<span>Requested</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-next_steps">
										Next steps
									</th>
								</tr>
							</tfoot>
						</table>
						<div className="tablenav bottom">
							<div className="tablenav-pages no-pages">
								<span className="displaying-num">0 items</span>
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
											1 of <span className="total-pages">0</span>
										</span>
									</span>
									<a className="next-page button" href="/">
										<span className="screen-reader-text">Next page</span>
										<span aria-hidden="true">›</span>
									</a>
									<a className="last-page button" href="/">
										<span className="screen-reader-text">Last page</span>
										<span aria-hidden="true">»</span>
									</a>
								</span>
							</div>
							<br className="clear" />
						</div>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
