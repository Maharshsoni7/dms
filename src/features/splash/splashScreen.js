import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/dataSlice'
import HomeViewModel from '../../view-models/HomeViewModel'

const SplashScreen = () => {
    // const { data, incrementByAmount } = HomeViewModel();
    // const dispatch = useDispatch()

    return (
        <View>
            <Text>
                Wc to splashScreen
            </Text>
            {/* <Button
                onPress={() => dispatch(increment())}
                title={'Increment'}
            >

            </Button>
            <Text>{"count" + incrementByAmount}</Text>
            <Button
                onPress={() => dispatch(decrement())}
                title={'Decrement'}
            >

            </Button> */}
        </View>
    )
}

export default SplashScreen