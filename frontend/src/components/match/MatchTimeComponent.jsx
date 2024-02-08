import React from "react";

import styled from "styled-components";

function MatchTimeComponent({ time, status }) {
  //   upcoming, during, done

  const targetTIme = new Date(time);
  const currentTime = new Date();
  const timeDifferenceInMinues = Math.floor(
    (targetTIme - currentTime) / 1000 / 60,
  );

  const Dday = Math.floor(timeDifferenceInMinues / 60 / 24);
  const Dhour = Math.floor((timeDifferenceInMinues / 60) % 24);
  const Dminute = Math.floor(timeDifferenceInMinues % 60);

  const enterMatch = () => {
    console.log("경기 입장하기");
  };
  return (
    <TimeContainer>
      {status === "done" ? (
        <DoneComponent>경기 종료</DoneComponent>
      ) : status === "during" ? (
        <DuringComponent onClick={enterMatch}>
          <DuringText>경기 입장하기</DuringText>
        </DuringComponent>
      ) : Dday > 0 ? (
        <TimeComponent>
          경기 시작 {Dday}일 {Dhour}시간 {Dminute}분 전
        </TimeComponent>
      ) : Dday === 0 && Dhour > 0 ? (
        <TimeComponent>
          경기 시작 {Dhour}시간 {Dminute}분 전
        </TimeComponent>
      ) : Dday === 0 && Dhour === 0 && Dminute > 0 ? (
        <TimeComponent>경기 시작 {Dminute}분 전</TimeComponent>
      ) : (
        <TimeComponent>경기 시작 준비 중</TimeComponent>
      )}
    </TimeContainer>
  );
}

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const TimeComponent = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  border-radius: 22px;
  background-color: #002fa5;
  color: white;

  padding: 9px 14px;
`;

const DuringComponent = styled.div`
  text-align: center;
  border-radius: 22px;
  background: radial-gradient(circle at center, #002fa5 10%, #002277 100%);
  color: white;
  padding: 9px 16px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const DuringText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 0.9rem;
`;

const DoneComponent = styled.div`
  text-align: center;

  border-radius: 22px;
  background-color: #a9a9a9;
  color: white;

  padding: 9px 14px;
`;

export default MatchTimeComponent;
