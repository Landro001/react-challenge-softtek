import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, code: "4890722-A0644", exercise: "2024", period: "05", value: 17.47, team: "Pleno / Junior / Estagiário" },
	{ id: 2, code: "4890722-A0662", exercise: "2024", period: "09", value: 39.86, team: "Expert / Pleno" },
	{ id: 3, code: "4890742-A0643", exercise: "2024", period: "03", value: 38.11, team: "Senior / Junior" },
	{ id: 4, code: "4890722-A0694", exercise: "2024", period: "09", value: 35.97, team: "Expert / Senior / Junior" },
	{ id: 5, code: "4890722-A0642", exercise: "2024", period: "04", value: 13.19, team: "Pleno / Estagiário" },
];

const ProductsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.code.toLowerCase().includes(term) || product.team.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Lista de Atividades</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Pesquisar'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Código da atividade
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Exercício
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Período
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Valor
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Equipe encarregada
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									{product.code}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.exercise}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.period}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>R$ {product.value.toFixed(2)}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.team}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default ProductsTable;
