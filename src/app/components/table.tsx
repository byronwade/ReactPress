import React from "react";

const WordpressTable = ({ showCheckbox, showSortingIndicator, columns, rows, labels }) => {
	return (
		<table className="wp-list-table widefat fixed striped table-view-list pages">
			<thead>
				<tr>
					<td id="cb" className="manage-column column-cb check-column">
						<label className="screen-reader-text" htmlFor="cb-select-all-1">
							Select All
						</label>
						<input id="cb-select-all-1" type="checkbox" />
					</td>
					<th scope="col" id="title" className="manage-column column-title column-primary sortable desc">
						<a href="/">
							<span>Title</span>
							<span className="sorting-indicator" />
						</a>
					</th>
					<th scope="col" id="author" className="manage-column column-author">
						Author
					</th>
					<th scope="col" id="comments" className="manage-column column-comments num sortable desc">
						<a href="/">
							<span>
								<span className="vers comment-grey-bubble" title="Comments" aria-hidden="true" />
								<span className="screen-reader-text">Comments</span>
							</span>
							<span className="sorting-indicator" />
						</a>
					</th>
					<th scope="col" id="date" className="manage-column column-date sortable asc">
						<a href="/">
							<span>Date</span>
							<span className="sorting-indicator" />
						</a>
					</th>{" "}
				</tr>
			</thead>
			<tbody id="the-list">
				<tr id="post-4075" className="iedit author-self level-0 post-4075 type-page status-publish hentry">
					<th scope="row" className="check-column">
						{" "}
						<label className="screen-reader-text" htmlFor="cb-select-4075">
							Select test{" "}
						</label>
						<input id="cb-select-4075" type="checkbox" name="post[]" defaultValue={4075} />
						<div className="locked-indicator">
							<span className="locked-indicator-icon" aria-hidden="true" />
							<span className="screen-reader-text">“test” is locked </span>
						</div>
					</th>
					<td className="title column-title has-row-actions column-primary page-title" data-colname="Title">
						<div className="locked-info">
							<span className="locked-avatar" /> <span className="locked-text" />
						</div>
						<strong>
							<a className="row-title" href="/" aria-label="“test” (Edit)">
								test
							</a>
						</strong>
						<div className="hidden" id="inline_4075">
							<div className="post_title">test</div>
							<div className="post_name">test</div>
							<div className="post_author">1</div>
							<div className="comment_status">closed</div>
							<div className="ping_status">closed</div>
							<div className="_status">publish</div>
							<div className="jj">16</div>
							<div className="mm">02</div>
							<div className="aa">2023</div>
							<div className="hh">19</div>
							<div className="mn">33</div>
							<div className="ss">13</div>
							<div className="post_password" />
							<div className="post_parent">0</div>
							<div className="page_template">default</div>
							<div className="menu_order">0</div>
						</div>
						<div className="row-actions">
							<span className="edit">
								<a href="/" aria-label="Edit “test”">
									Edit
								</a>{" "}
								|{" "}
							</span>
							<span className="inline hide-if-no-js">
								<button type="button" className="button-link editinline" aria-label="Quick edit “test” inline" aria-expanded="false">
									Quick&nbsp;Edit
								</button>{" "}
								|{" "}
							</span>
							<span className="trash">
								<a href="/" className="submitdelete" aria-label="Move “test” to the Trash">
									Trash
								</a>{" "}
								|{" "}
							</span>
							<span className="view">
								<a href="/" rel="bookmark" aria-label="View “test”">
									View
								</a>
							</span>
						</div>
						<button type="button" className="toggle-row">
							<span className="screen-reader-text">Show more details</span>
						</button>
					</td>
					<td className="author column-author" data-colname="Author">
						<a href="/">bcw1995@gmail.com</a>
					</td>
					<td className="comments column-comments" data-colname="Comments">
						{" "}
						<div className="post-com-count-wrapper">
							<span aria-hidden="true">—</span>
							<span className="screen-reader-text">No comments</span>
							<span className="post-com-count post-com-count-pending post-com-count-no-pending">
								<span className="comment-count comment-count-no-pending" aria-hidden="true">
									0
								</span>
								<span className="screen-reader-text">No comments</span>
							</span>{" "}
						</div>
					</td>
					<td className="date column-date" data-colname="Date">
						Published
						<br />
						2023/02/16 at 7:33 pm
					</td>{" "}
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
					<th scope="col" className="manage-column column-title column-primary sortable desc">
						<a href="/">
							<span>Title</span>
							<span className="sorting-indicator" />
						</a>
					</th>
					<th scope="col" className="manage-column column-author">
						Author
					</th>
					<th scope="col" className="manage-column column-comments num sortable desc">
						<a href="/">
							<span>
								<span className="vers comment-grey-bubble" title="Comments" aria-hidden="true" />
								<span className="screen-reader-text">Comments</span>
							</span>
							<span className="sorting-indicator" />
						</a>
					</th>
					<th scope="col" className="manage-column column-date sortable asc">
						<a href="/">
							<span>Date</span>
							<span className="sorting-indicator" />
						</a>
					</th>{" "}
				</tr>
			</tfoot>
		</table>
	);
};

export default WordpressTable;
