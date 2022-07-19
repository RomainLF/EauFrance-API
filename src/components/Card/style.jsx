import styled from 'styled-components';

export default styled.section`
  background-color: #d7e7e5;
  margin: 1em;
  width: 40vw;
  height: 4vh;
  border-radius: 0.5em;
  display: flex;
  button {
    width: 10vw;
    &.active {
      background-color: blue;
    }
    &.toto {
      background-color: #d59e1d;
    }
  }
`;
