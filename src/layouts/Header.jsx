import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const HEADER_ROUTES = [
	{
		name: "Dashboard",
		path: "/dashboard",
	},
	{
		name: "Questions",
		path: "/Questions",
	},
	{
		name: "Profile",
		path: "/Profile",
	},
];

const Header = () => {
	return (
		<header className="bg-secondary text-center p-4 flex items-center justify-between">
			<div className="text-3xl font-semibold ">
				<Link to="/">
					<Button variant="ghost" className="text-3xl font-semibold">
						Artificial Interview
					</Button>
				</Link>
			</div>

			<div>
				<ul className="flex gap-6 font-medium">
					{HEADER_ROUTES.map((route) => (
						<li role="button" className="cursor-pointer" key={route.name}>
							<Link to={route.path}>{route.name}</Link>
						</li>
					))}
				</ul>
			</div>

			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<Link to="/sign-in">Sign In</Link>
			</SignedOut>
		</header>
	);
};

export default Header;
