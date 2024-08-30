import { motion } from "framer-motion";
import { DollarSign, Clipboard, Target, ArrowDownRight, ArrowUpRight } from "lucide-react";

const overviewData = [
	{ name: "Prev. Contratos", value: "1949", change: 5.1, icon: Clipboard },
	{ name: "Prev. Demandas", value: "1353", change: 9.6, icon: Target },
	{ name: "Prev. Lucro", value: "R$ 526.370", change: -3.1, icon: DollarSign },
];

const OverviewCards = () => {
	return (
		<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
			{overviewData.map((item, index) => (
				<motion.div
					key={item.name}
					className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700
          '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
							<p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
						</div>

						<div
							className={`
              p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500"}
              `}
						>
							<item.icon className={`size-6  ${item.change >= 0 ? "text-green-500" : "text-red-500"}`} />
						</div>
					</div>
					<div
						className={`
              mt-4 flex items-center ${item.change >= 0 ? "text-green-500" : "text-red-500"}
            `}
					>
						{item.change >= 0 ? <ArrowUpRight size='20' /> : <ArrowDownRight size='20' />}
						<span className='ml-1 text-sm font-medium'>{Math.abs(item.change)}%</span>
						<span className='ml-2 text-sm text-gray-400'>vs último período</span>
					</div>
				</motion.div>
			))}
		</div>
	);
};
export default OverviewCards;
