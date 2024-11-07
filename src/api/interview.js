const BASE_URL = import.meta.env.VITE_BASE_URL;

const createInterview = async (interviewData) => {
	const response = await fetch(`${BASE_URL}/interviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(interviewData),
	});

	if (!response.ok) {
		throw new Error("Failed to create interview");
	}
	const jsonResponse = await response.json();
	return jsonResponse;
};

const getInterview = async (mockId) => {
	const response = await fetch(`${BASE_URL}/interviews/${mockId}`, {
		method: "GET",
	});
    
	const jsonResponse = await response.json();
	return jsonResponse;
};

export { createInterview, getInterview };