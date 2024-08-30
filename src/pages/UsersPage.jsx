import { UserCheck, UserPlus, UsersIcon, UserPen } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";

const userStats = {
	totalUsers: 1573,
	newUsersToday: 243,
	activeUsers: 943,
	churnRate: "60%",
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Consultores' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total de Consultores'
						icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='Consultores Disponíveis' icon={UserCheck} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						name='Consultores em Atividade'
						icon={UserPen}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Taxa de Consultores Disponíveis' icon={UserPlus} value={userStats.churnRate} color='#10B950' />
				</motion.div>

				<UsersTable />
			</main>
		</div>
	);
};
export default UsersPage;
