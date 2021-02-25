import React, { useState } from 'react'; // uesState를 불러온다.

const Counter = () => {
  // 파라미터에는 상태의 기본값을 넣어준다.
  // 첫 번째 원소는 상태 값,
  // 두 번째 원소는 상태를 설정하는 함수
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
