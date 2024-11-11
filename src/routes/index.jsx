import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Vector from "../utils/assets/Vector1.png";

export default function IndexPage() {
	const navigate = useNavigate();

	const handleClickTry = () => {
		navigate("/dashboard");
	};
	return (
		<div className="flex flex-col lg:flex-row items-center lg:justify-normal h-screen bg-gradient-to-r from-blue-200 to-blue-500">
			{/* bg-gradient-to-r from-slate-900 to-blue-800 */}
			<div className="p-8 lg:p-14">
				<h1 className="text-xl lg:text-2xl font-semibold mb-6">Artificial Interview</h1>
				<h1 className="font-extrabold text-4xl lg:text-8xl ">Elevate your</h1>
				<h1 className="font-extrabold text-4xl lg:text-8xl ">
					tech <span className="text-primary"> interviews</span>
				</h1>

				<Button className="mt-12 bg-primary-foreground text-secondary-foreground hover:bg-secondary font-bold" onClick={handleClickTry}>
					Try it out <ArrowRight />
				</Button>
			</div>
			<div>
				<img src={Vector} alt="Decorative Vector" className=" w-[650px]" />
			</div>
		</div>
	);
}
