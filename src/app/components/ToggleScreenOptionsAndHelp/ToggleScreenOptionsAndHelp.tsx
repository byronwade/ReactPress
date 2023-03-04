"use client";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function ToggleScreenOptionsAndHelp({ children }) {
	const [showScreenOptions, setShowScreenOptions] = useState(false);
	const [showHelp, setShowHelp] = useState(false);
	const drawerSpring = useSpring({
		maxHeight: showHelp || showScreenOptions ? 500 : 0,
		display: "block",
		config: { duration: 500 },
		overflow: "hidden",
	});
	const wrapHelp = useSpring({
		maxHeight: showHelp ? 500 : 0,
		config: { duration: 500 },
		overflow: "hidden",
		onStart: () => {
			const element = document.getElementById("screen-options-link-wrap");
			if (element) {
				element.style.opacity = "0";
			}
		},
		onRest: () => {
			const element = document.getElementById("screen-options-link-wrap");
			if (element) {
				element.style.opacity = "1";
			}
		},
	});
	const wrapOptions = useSpring({
		maxHeight: showScreenOptions ? 500 : 0,
		config: { duration: 500 },
		overflow: "hidden",
		onStart: () => {
			const element = document.getElementById("contextual-help-link-wrap");
			if (element) {
				element.style.opacity = "0";
			}
		},
		onRest: () => {
			const element = document.getElementById("contextual-help-link-wrap");
			if (element) {
				element.style.opacity = "1";
			}
		},
	});
	const toggleScreenOptions = () => {
		setShowScreenOptions(!showScreenOptions);
	};

	const toggleHelp = () => {
		setShowHelp(!showHelp);
	};
	return (
		<>
			<animated.div style={drawerSpring} id="screen-meta" className="metabox-prefs">
				{React.Children.map(children, (child) => {
					if (child.type === Help) {
						return (
							<animated.div style={wrapHelp} id="contextual-help-wrap" tabIndex={-1} aria-label="Contextual Help Tab">
								<Help>{child}</Help>
							</animated.div>
						);
					}
				})}
				{React.Children.map(children, (child) => {
					if (child.type === ScreenOptions) {
						return (
							<animated.div style={wrapOptions} id="screen-options-wrap" tabIndex={-1} aria-label="Screen Options Tab">
								<ScreenOptions>{child}</ScreenOptions>
							</animated.div>
						);
					}
				})}
			</animated.div>
			<div id="screen-meta-links">
				{React.Children.map(children, (child) => {
					if (child.type === ScreenOptions) {
						return (
							<div id="screen-options-link-wrap" style={{ visibility: showHelp ? "hidden" : "visible" }} className="hide-if-no-js screen-meta-toggle">
								<button aria-expanded={showScreenOptions} onClick={toggleScreenOptions} type="button" id="show-settings-link" className={`button show-settings ${showScreenOptions ? "screen-meta-active" : ""}`} aria-controls="screen-options-wrap">
									Screen Options
								</button>
							</div>
						);
					}
				})}
				{React.Children.map(children, (child) => {
					if (child.type === Help) {
						return (
							<div id="contextual-help-link-wrap" style={{ visibility: showScreenOptions ? "hidden" : "visible" }} className="hide-if-no-js screen-meta-toggle">
								<button aria-expanded={showHelp} onClick={toggleHelp} type="button" id="contextual-help-link" className={`button show-settings ${showHelp ? "screen-meta-active" : ""}`} aria-controls="contextual-help-wrap">
									Help
								</button>
							</div>
						);
					}
				})}
			</div>
		</>
	);
}

export function ScreenOptions({ children }) {
	return <>{children}</>;
}

export function Help({ children }) {
	return <>{children}</>;
}
