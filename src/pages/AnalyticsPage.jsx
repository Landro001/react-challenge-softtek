import Header from "../components/common/Header";

import OverviewCards from "../components/analytics/OverviewCards";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import PrevDemandsTable from "../components/analytics/PrevDemandsTable"
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Análise"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<PrevDemandsTable />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-8'>
					<ChannelPerformance />
					<AIPoweredInsights />
				</div>
			</main>
		</div>
	);
};
export default AnalyticsPage;
