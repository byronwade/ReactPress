const fs = require("fs");
const path = require("path");

const cssDir = path.join(__dirname, "css");

fs.readdir(cssDir, (err, files) => {
	if (err) {
		throw err;
	}

	const cssImports = files.map((file) => `@import "${file}";`).join("\n");

	const cssContent = `/* Auto-generated CSS file */\n\n${cssImports}`;

	fs.writeFile("styles.css", cssContent, (err) => {
		if (err) {
			throw err;
		}

		console.log("CSS file generated successfully");
	});
});
