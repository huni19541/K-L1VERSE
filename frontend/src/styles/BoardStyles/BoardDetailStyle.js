import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const WaggleDetailBox = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px; /* Added border-radius for a rounded look */
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  margin: 0;
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

  &:hover {
    background-color: #0056b3;
  }
`;

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #007bff;
  }
`;

export const LikeCount = styled.span`
  font-size: 0.9em;
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