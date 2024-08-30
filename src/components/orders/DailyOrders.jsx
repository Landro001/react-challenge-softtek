import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dailyOrdersData = [
	{ date: "01/12", manutenção: 66, melhoria: 80, suporte: 79, perfil: 24, transporte: 53, projeto: 57, erro: 84}, 
	{ date: "02/12", manutenção: 71, melhoria: 28, suporte: 89, perfil: 25, transporte: 42, projeto: 27, erro: 93},
	{ date: "03/12", manutenção: 50, melhoria: 77, suporte: 71, perfil: 78, transporte: 13, projeto: 85, erro: 24}, 
	{ date: "04/12", manutenção: 82, melhoria: 28, suporte: 43, perfil: 28, transporte: 69, projeto: 27, erro: 81},  
	{ date: "05/12", manutenção: 77, melhoria: 96, suporte: 55, perfil: 32, transporte: 56, projeto: 31, erro: 63},  
	{ date: "06/12", manutenção: 14, melhoria: 23, suporte: 77, perfil: 83, transporte: 67, projeto: 67, erro: 95},  
];
const DailyOrders = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Demandas Mensais</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dailyOrdersData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='date' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='manutenção' stroke='#8884d8' strokeWidth={2} />
						<Line type='monotone' dataKey='melhoria' stroke='#82ca9d' strokeWidth={2} />
						<Line type='monotone' dataKey='suporte' stroke='#ffc658' strokeWidth={2} />
						<Line type='monotone' dataKey='perfil' stroke='#ff8042' strokeWidth={2} />
						<Line type='monotone' dataKey='transporte' stroke='#0088FE' strokeWidth={2} />
						<Line type='monotone' dataKey='projeto' stroke='#32CD32' strokeWidth={2} />
						<Line type='monotone' dataKey='erro' stroke='#FF3131' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DailyOrders;
