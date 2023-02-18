export default function ForgotPassword() {
	return (
		<div className="login js login-action-login wp-core-ui  locale-en-us">
			<div id="login">
				<h1>
					<a href="https://wordpress.org/">Powered by WordPress</a>
				</h1>
				<p className="message">Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>
				<form name="lostpasswordform" id="lostpasswordform" action="https://byronw34.sg-host.com/wp-login.php?action=lostpassword" method="post">
					<p>
						<label htmlFor="user_login">Username or Email Address</label>
						<input type="text" name="user_login" id="user_login" className="input" defaultValue="" size={20} autoCapitalize="off" autoComplete="username" />
					</p>
					<input type="hidden" name="redirect_to" defaultValue="" />
					<p className="submit">
						<input type="submit" name="wp-submit" id="wp-submit" className="button button-primary button-large" defaultValue="Get New Password" />
					</p>
				</form>
				<p id="nav">
					<a href="https://byronw34.sg-host.com/wp-login.php">Log in</a>
				</p>
				<p id="backtoblog">
					<a href="https://byronw34.sg-host.com/">← Go to My WordPress</a>{" "}
				</p>
			</div>
		</div>
	);
}
