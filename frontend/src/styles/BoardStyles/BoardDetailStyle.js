import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Pretendard-Regular";
`;

export const DetailTop = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const DetailBox = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;

  background-color: aliceblue;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  margin-top: 0.8rem;
  font-size: 0.9rem;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: darkblue;
`;

export const DealFlag = styled.p`
  margin: 0;
  font-size: 1em;
  color: #333;

  ${(props) =>
    props.dealFlag &&
    css`
      background-color: #4caf50; /* Green color for 거래가능 */
      color: #fff;
      padding: 5px;
      border-radius: 5px;
    `}

  ${(props) =>
    !props.dealFlag &&
    css`
      background-color: #ff9800; /* Orange color for 거래완료 */
      color: #fff;
      padding: 5px;
      border-radius: 5px;
    `}
`;

export const Total = styled.p`
  margin: 0;
  font-size: 1em;
  color: #333;
`;

export const FullFlag = styled.p`
  margin: 0;
  font-size: 1em;
  color: #333;

  ${(props) =>
    props.fullFlag &&
    css`
      background-color: #4caf50;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
    `}

  ${(props) =>
    !props.fullFlag &&
    css`
      background-color: #ff9800;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
    `}
`;

export const Button = styled.button`
  background-color: #cdd8ec;
  color: #fff;
  padding: 8px 16px;
  font-size: 0.9em;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  margin-top: 0.8rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BackButton = styled.button`
  border: none;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  background-color: white;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const LikeCount = styled.span`
  font-size: 0.9em;
`;

export const EditDeleteButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UpdateButton = styled(Button)`
  background-color: #cdd8ec;
  &:hover {
    background-color: #cdd8ec;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #cdd8ec;
  &:hover {
    background-color: #cdd8ec;
  }
`;

export const DetailCommentCount = styled.div`
  font-size: 0.7rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  color: #595959;
  align-items: center;
`;
