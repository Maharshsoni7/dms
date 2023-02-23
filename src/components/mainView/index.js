import React from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native';
import colors from '../../utility/colors';
import Styles from './Styles';



const ChildView = ({ isStatusBarHidden = false, SubView, testID, isDifferentBG, context }) => {
    return (
        <View style={[Styles.container, { backgroundColor: isDifferentBG ? colors.white : colors.backgroundColor }]} testID={testID}>
            <StatusBar backgroundColor={colors.inkBlue} barStyle='light-content' hidden={false} />
            <SubView context={context}>
            </SubView>
        </View>
    );
};

export default MainView = ({ isSafeAreaViewDisplay = true, isStatusBarHidden = false, subView, testID, isDifferentBG = false, context }) => {
    return (
        isSafeAreaViewDisplay ?
            <SafeAreaView style={[Styles.container, { backgroundColor: isDifferentBG ? colors.white : colors.backgroundColor }]}>

                <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} isDifferentBG={isDifferentBG} context={context} />
            </SafeAreaView> : <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} context={context} />

    );
};
