import NewInterview from "./NewInterview";

export default function DashboardPage() {
	return (
		<div className="px-4 lg:px-32 lg:pt-14 flex flex-col gap-2">
			<h1 className="text-xl font-semibold">Dashboard</h1>
			<h1 >Create and start your interview</h1>

			<NewInterview />
		</div>
	);
}
