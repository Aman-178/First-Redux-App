import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Slices/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div className="text-center text-2xl font-bold mb-4">{count}</div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
