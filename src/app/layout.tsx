import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Byron Wade",
	description: "Fast Web Apps",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<GoogleAnalytics gaId="G-WE1RMQ935W" />
				{children}
			</body>
		</html>
	);
}
