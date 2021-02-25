import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  /* 
  // 'componentDidMount + componentDidUpdate'라고 생각해도 무방
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname,
    });
  });

  // 두 번째 파라미터로 비어있는 배열을 넣으면
  // 마운트될 때만 실행된다.
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);

  // 두 번째 파라미터로 배열 안에 검사하고 싶은 값을 넣으면
  // 특정 값이 업데이트될 때만 실행된다.
  useEffect(() => {
    console.log(name);
  }, [name]); 
  */

  // 컴포넌트가 언마운트되기 전이나
  // 업데이트되기 직전에 어떤 작업을 수행하고 싶다면
  // cleanup(뒷정리) 함수를 반환해야 한다.
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name); // 뒷정리 함수가 호출될 때는 업데이트 직전의 값을 보여준다.
    };
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
        <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
