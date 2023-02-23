import MainView from '../../components/mainView';
import SplashScreen from './splashScreen';
const Splash = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={true}
            isStatusBarHidden={true}
            subView={SplashScreen}
            isDifferentBG={true}
            context={null}
        />
    );
}

export default Splash;