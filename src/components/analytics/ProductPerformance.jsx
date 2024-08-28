import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Produto A", vendas: 4000, receita: 2400, lucro: 2400 },
	{ name: "Produto B", vendas: 3000, receita: 1398, lucro: 2210 },
	{ name: "Produto C", vendas: 2000, receita: 9800, lucro: 2290 },
	{ name: "Produto D", vendas: 2780, receita: 3908, lucro: 2000 },
	{ name: "Produto E", vendas: 1890, receita: 4800, lucro: 2181 },
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Desempenho do Produto</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='vendas' fill='#8B5CF6' />
						<Bar dataKey='receita' fill='#10B981' />
						<Bar dataKey='lucro' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
