import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
	const navigate = useNavigate();

	const handleClickTry = () => {
		navigate("/dashboard")
	}
	return (
		<div className="flex items-center justify-center lg:justify-normal h-[600px] p-4 lg:p-14">
			{/* <h1 className="text-3xl">HOMEPAGE</h1> */}

			<div>
				<h1 className="text-xl lg:text-2xl font-semibold mb-6">Artificial Interview</h1>
				<h1 className="font-extrabold text-4xl lg:text-8xl ">Elevate your</h1>
				<h1 className="font-extrabold text-4xl lg:text-8xl ">
					tech <span className="text-primary"> interviews</span>
				</h1>

				<Button className="mt-12 bg-primary-foreground text-secondary-foreground" onClick={handleClickTry}>
					Try it out <ArrowRight />
				</Button>
			</div>
		</div>
	);
}
