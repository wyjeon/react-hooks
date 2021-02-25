import React, { useReducer } from 'react'; // uesState를 불러온다.

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // 첫 번째 파라미터에는 리듀서 함수
  // 두 번째 파라미터에는 해당 리듀서의 기본값
  // state는 현재 가리키고 있는 상태
  // dispatch는 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}입니다.</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
