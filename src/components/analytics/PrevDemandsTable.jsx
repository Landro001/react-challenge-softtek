import { useState } from "react";
import { motion } from "framer-motion";
import { Search} from "lucide-react";

const orderData = [
	{ id: 1, type: "Suporte", complexity: "N1", senioridade: "Estagiário", cost:1.99 },
	{ id: 2, type: "Melhoria", complexity: "N3", senioridade: "Senior", cost:1.99 },
	{ id: 3, type: "Projeto", complexity: "N3", senioridade: "Senior", cost:1.99 },
	{ id: 4, type: "Transporte", complexity: "N3", senioridade: "Junior", cost:1.99 },
	{ id: 5, type: "Projeto", complexity: "N1", senioridade: "Expert", cost:1.99 },
	{ id: 6, type: "Manutenção", complexity: "N2", senioridade: "Pleno", cost:1.99 },
	{ id: 7, type: "Melhoria", complexity: "N2", senioridade: "Pleno", cost:1.99 },
	{ id: 8, type: "Erro", complexity: "N1", senioridade: "Junior", cost:1.99 },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.includes(term) || order.complexity.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Lista de demandas</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Pesquisar'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								ID
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Tipo
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Complexidade
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Senioridade
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Custo
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700 scroll'>
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.id}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.type}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.complexity}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.senioridade}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									R$ {order.cost.toFixed(2)}
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OrdersTable;
