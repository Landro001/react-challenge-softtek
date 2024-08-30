import { motion } from "framer-motion";
import { Code, Users, CalendarArrowDown } from "lucide-react";

const INSIGHTS = [
	{
		icon: Code,
		color: "text-red-500",
		insight: "Necessidade de 3 consultores Júnior a mais",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "⁠Grande quantidade de estagiários disponíveis",
	},
	{
		icon: CalendarArrowDown,
		color: "text-yellow-500",
		insight: "3 contratos estão chegando ao fim: CTT002 ,CTT005, CTT007",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Sugestões</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
