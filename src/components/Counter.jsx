import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/features/counter/counterSlice";


const Counter = () => {
    const { value } = useSelector((state) => state.counter)
    console.log(value)
    const dispatch = useDispatch()

    return (
            <div className="text-center">
            <h1 className="bg-violet-500">{value}</h1>
            <button className="bg-red-300 mb-2 p-2" onClick={() => dispatch(increment())}>Increment</button><br />
            <button className="bg-red-300 mb-2 p-2" onClick={() => dispatch(decrement())}>Decrement</button><br />
            <button className="bg-red-300 p-2" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>


        </div>
    );
};

export default Counter;