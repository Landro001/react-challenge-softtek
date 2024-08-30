import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { Eye, DollarSign, Clipboard, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
	totalRevenue: "R$ 1.234.567",
	averageOrderValue: "1854",
	prevision: "R$ 1.471.157",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Contratos' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Receita Total' icon={DollarSign} value={salesStats.totalRevenue} color='#10B981' />
					<StatCard
						name='Número de Contratos'
						icon={Clipboard}
						value={salesStats.averageOrderValue}
						color='#6366F1'
					/>
					<StatCard
						name='Previsão Mês Seguinte'
						icon={Eye}
						value={salesStats.prevision}
						color='#F59E0B'
					/>
					<StatCard name='Taxa de Crescimento' icon={TrendingUp} value={salesStats.salesGrowth} color='#10B950' />
				</motion.div>

				<SalesOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default SalesPage;
