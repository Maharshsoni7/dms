import MainView from '../../components/mainView';
import DashboardScreen from './dashboardScreen';
const Dashboard = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={DashboardScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Dashboard;