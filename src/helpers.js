function parseJsonFromString(jsonString) {
	try {
		// Remove the backticks and extra spaces if necessary
		const cleanedString = jsonString.replace(/^```json\n|\n```$/g, "").trim();

		// Parse the cleaned string into a JSON object
		const parsedObject = JSON.parse(cleanedString);

		return parsedObject;
	} catch (error) {
		console.error("Error parsing JSON:", error);
		return null;
	}
}

export { parseJsonFromString };
