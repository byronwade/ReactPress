import React from "react";

export default function EditComments() {
	return (
		<div id="wpbody-content" className="p-4">
			<div id="screen-meta" className="hidden">
				{/* Screen meta content */}
			</div>
			<div id="screen-meta-links" className="flex justify-end mb-4">
				<div id="screen-options-link-wrap" className="mr-2">
					<button type="button" id="show-settings-link" className="px-3 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
						Screen Options
					</button>
				</div>
				<div id="contextual-help-link-wrap">
					<button type="button" id="contextual-help-link" className="px-3 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
						Help
					</button>
				</div>
			</div>

			<div className="wrap">
				<h1 className="mb-4 text-2xl font-normal wp-heading-inline">Comments</h1>
				<hr className="my-4 border-t border-gray-300 wp-header-end" />

				<h2 className="sr-only screen-reader-text">Filter comments list</h2>
				<ul className="flex flex-wrap mb-4 text-sm subsubsub">
					<li className="mr-3">
						<a href="/" className="font-medium text-blue-500 hover:underline">
							All <span className="text-gray-500 count">(<span className="all-count">0</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Mine <span className="text-gray-500 count">(<span className="mine-count">0</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Pending <span className="text-gray-500 count">(<span className="pending-count">0</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Approved <span className="text-gray-500 count">(<span className="approved-count">0</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Spam <span className="text-gray-500 count">(<span className="spam-count">0</span>)</span>
						</a> |
					</li>
					<li>
						<a href="/" className="text-blue-500 hover:underline">
							Trash <span className="text-gray-500 count">(<span className="trash-count">0</span>)</span>
						</a>
					</li>
				</ul>

				<form id="comments-form" method="get" className="mb-4">
					<input type="hidden" name="comment_status" defaultValue="all" />
					<input type="hidden" name="pagegen_timestamp" defaultValue="2023-02-17 10:07:38" />
					<input type="hidden" name="_total" defaultValue={0} />
					<input type="hidden" name="_per_page" defaultValue={20} />
					<input type="hidden" name="_page" defaultValue={1} />
					<input type="hidden" id="_ajax_fetch_list_nonce" name="_ajax_fetch_list_nonce" defaultValue="5aa80d7c1b" />
					<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit-comments.php" />

					<div className="overflow-x-auto">
						<table className="fixed w-full border-collapse wp-list-table widefat striped table-view-list comments">
							<thead>
								<tr className="bg-white">
									<td id="cb" className="w-8 p-2 manage-column column-cb check-column">
										<label className="sr-only screen-reader-text" htmlFor="cb-select-all-1">Select All</label>
										<input id="cb-select-all-1" type="checkbox" className="border-gray-300 rounded" />
									</td>
									<th scope="col" id="author" className="p-2 text-left manage-column column-author sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Author</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" id="comment" className="p-2 text-left manage-column column-comment column-primary">
										<span className="text-gray-700">Comment</span>
									</th>
									<th scope="col" id="response" className="p-2 text-left manage-column column-response sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>In response to</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" id="date" className="p-2 text-left manage-column column-date sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Submitted on</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
								</tr>
							</thead>

							<tbody id="the-comment-list" data-wp-lists="list:comment">
								<tr className="no-items">
									<td className="colspanchange" colSpan={5}>
										<p className="my-4 text-center text-gray-500">No comments found.</p>
									</td>
								</tr>
							</tbody>

							<tbody id="the-extra-comment-list" data-wp-lists="list:comment" className="hidden">
								<tr className="no-items">
									<td className="colspanchange" colSpan={5}>
										<p className="my-4 text-center text-gray-500">No comments found.</p>
									</td>
								</tr>
							</tbody>

							<tfoot>
								<tr className="bg-white">
									<td className="w-8 p-2 manage-column column-cb check-column">
										<label className="sr-only screen-reader-text" htmlFor="cb-select-all-2">Select All</label>
										<input id="cb-select-all-2" type="checkbox" className="border-gray-300 rounded" />
									</td>
									<th scope="col" className="p-2 text-left manage-column column-author sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Author</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-comment column-primary">
										<span className="text-gray-700">Comment</span>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-response sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>In response to</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-date sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Submitted on</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</form>

				{/* Replybox */}
				<form method="get" className="hidden">
					<table>
						<tbody id="com-reply">
							<tr id="replyrow" className="hidden">
								<td colSpan={5}>
									<fieldset className="space-y-4">
										{/* Replybox content */}
									</fieldset>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div id="ajax-response"></div>

				<div id="trash-undo-holder" className="hidden">
					<div className="p-2 bg-white border border-gray-300 rounded trash-undo-inside">
						Comment by <strong /> moved to the Trash.
						<span className="ml-2 undo untrash">
							<a href="/" className="text-blue-500 hover:underline">Undo</a>
						</span>
					</div>
				</div>

				<div id="spam-undo-holder" className="hidden">
					<div className="p-2 bg-white border border-gray-300 rounded spam-undo-inside">
						Comment by <strong /> marked as spam.
						<span className="ml-2 undo unspam">
							<a href="/" className="text-blue-500 hover:underline">Undo</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}