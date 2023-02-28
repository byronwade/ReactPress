import React from "react";
import "./login.css";
export function Login() {
	return (
		<div className="login js login-action-login wp-core-ui  locale-en-us">
			<div id="login">
				<h1>
					<a href="https://wordpress.org/">Powered by WordPress</a>
				</h1>
				<p className="message" id="login-message">
					{" "}
					You are now logged out.
					<br />
				</p>
				<form name="loginform" id="loginform" action="https://byronw34.sg-host.com/wp-login.php" method="post">
					<p>
						<label htmlFor="user_login">Username or Email Address</label>
						<input type="text" name="log" id="user_login" aria-describedby="login-message" className="input" defaultValue="" size={20} autoCapitalize="off" autoComplete="username" />
					</p>
					<div className="user-pass-wrap">
						<label htmlFor="user_pass">Password</label>
						<div className="wp-pwd">
							<input type="password" name="pwd" id="user_pass" aria-describedby="login-message" className="input password-input" defaultValue="" size={20} autoComplete="current-password" />
							<button type="button" className="button button-secondary wp-hide-pw hide-if-no-js" data-toggle={0} aria-label="Show password">
								<span className="dashicons dashicons-visibility" aria-hidden="true" />
							</button>
						</div>
					</div>
					<p className="forgetmenot">
						<input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <label htmlFor="rememberme">Remember Me</label>
					</p>
					<p className="submit">
						<input type="submit" name="wp-submit" id="wp-submit" className="button button-primary button-large" defaultValue="Log In" />
						<input type="hidden" name="redirect_to" defaultValue="https://byronw34.sg-host.com/wp-admin/" />
						<input type="hidden" name="testcookie" defaultValue={1} />
					</p>
				</form>
				<p id="nav">
					<a href="https://byronw34.sg-host.com/wp-login.php?action=lostpassword">Lost your password?</a>{" "}
				</p>
				<p id="backtoblog">
					<a href="https://byronw34.sg-host.com/">← Go to My WordPress</a>{" "}
				</p>
			</div>
		</div>
	);
}

export function ForgotPassword() {
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
