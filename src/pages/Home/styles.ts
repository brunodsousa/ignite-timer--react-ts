import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  font-size: 1.125rem;
  color: ${(props) => props.theme["gray-100"]};
`;

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  background: transparent;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};

  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme["gray-100"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme["green-500"]};
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
