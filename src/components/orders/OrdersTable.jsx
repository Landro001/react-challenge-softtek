import { useState } from "react";
import { motion } from "framer-motion";
import { Search} from "lucide-react";

const orderData = [
	{ id: "CTT001", called:33064, customer: "Rosa Mathis", custo: 235.4, equipe:"Pleno / Junior / Estagiário", exercicio:"2024", periodo:"05", status: "Entregue", hours:7, demand:"Manutenção", complexity:"n1"  },
	{ id: "CTT002", called:23545, customer: "Jane Smith", custo: 412.0, equipe:"Expert / Pleno", exercicio:"2024", periodo:"07", status: "Processamento", hours:0.7, demand:"Suporte", complexity:"n2"  },
	{ id: "CTT003", called:6931, customer: "Bob Johnson", custo: 162.5, equipe:"Senior / Pleno", exercicio:"2024", periodo:"04", status: "Enviado", hours:2.1, demand:"Manutenção", complexity:"n2"  },
	{ id: "CTT004", called:18818, customer: "Alice Brown", custo: 750.2, equipe:"Senior / Junior", exercicio:"2024", periodo:"06", status: "Pendente", hours:4.2, demand:"Suporte", complexity:"n2"  },
	{ id: "CTT005", called:5617, customer: "Charlie Wilson", custo: 95.8, equipe:"Pleno / Junior / Estagiário", exercicio:"2024", periodo:"08", status: "Entregue", hours:8.4, demand:"Erro", complexity:"n3"  },
	{ id: "CTT006", called:6942, customer: "Eva Martinez", custo: 310.75, equipe:"Pleno / Estagiário", exercicio:"2024", periodo:"12", status: "Processamento", hours:1.4, demand:"Perfil", complexity:"n1"  },
	{ id: "CTT007", called:24208, customer: "David Lee", custo: 528.9, equipe:"Pleno / Junior", exercicio:"2024", periodo:"11", status: "Enviado", hours:5.6, demand:"Transporte", complexity:"n1"  },
	{ id: "CTT008", called:5204, customer: "Grace Taylor", custo: 189.6, equipe:"Expert / Senior / Junior", exercicio:"2024", periodo:"01", status: "Entregue", hours:11.2, demand:"projeto", complexity:"n3"  },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
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
								ID do Pedido
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Num. Chamado
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Cliente
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Custo
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Equipe
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Exercício
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Período
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Vol. Horas
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Tipo Demanda
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Complex.
							</th>
							<th className='px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
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
									{order.called}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.customer}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									R$ {order.custo.toFixed(2)}
								</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.equipe}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.exercicio}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.periodo}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.hours}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.demand}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>{order.complexity}</td>
								<td className='px-3 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Entregue"
												? "bg-green-100 text-green-800"
												: order.status === "Processamento"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Enviado"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
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
