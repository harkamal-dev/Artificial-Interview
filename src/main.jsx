import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layouts
import RootLayout from "./layouts/rootLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Import the components
import IndexPage from "./routes";
import SignInPage from "./routes/auth/SignIn";
import SignUpPage from "./routes/auth/SignUp";
import DashboardPage from "./routes/dashboard/Dashboard";
import InterviewInformation from "./routes/dashboard/InterviewInformation";
import InterviewQuestions from "./routes/dashboard/InterviewQuestions";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{ path: "/", element: <IndexPage /> },
			{ path: "/sign-in/*", element: <SignInPage /> },
			{ path: "/sign-up/*", element: <SignUpPage /> },
			{
				element: <DashboardLayout />,
				path: "dashboard",
				children: [
					{ path: "/dashboard", element: <DashboardPage /> },
					{ path: "/dashboard/interview/:mockId", element: <InterviewInformation /> },
					{ path: "/dashboard/interview/:mockId/start/*", element: <InterviewQuestions /> },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
