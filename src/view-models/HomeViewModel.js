import { useDispatch, useSelector } from "react-redux";
import { ContentAction } from "../store/dataSlice";

const HomeViewModel = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => { return state.dataReducer })
    const { increment, decrement, incrementByAmount, } = ContentAction;


    return {
        increment: () => dispatch(increment()),
        data,
        incrementByAmount
    }
}
export default HomeViewModel