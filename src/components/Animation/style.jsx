import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  .mainAnimation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    width: 4em;
    > span {
      margin: 5px 0;
      display: block;
      border-radius: 20px;
      background-color: #cde4ac;
      &:nth-child(1) {
        height: 4px;
        width: 60%;
        animation: reduce 2s ease-out 0.1s infinite;
      }
      &:nth-child(2) {
        height: 4px;
        width: 60%;
        animation: reduce 2s ease-out 0.5s infinite;
      }
      &:nth-child(3) {
        height: 4px;
        width: 60%;
        animation: reduce 2s ease-out 0.8s infinite;
      }
      @keyframes reduce {
        0% {
          width: 60%;
        }
        50% {
          width: 100%;
          background-color: #d5ace4;
        }
        100% {
          width: 60%;
        }
      }
    }
  }
`;
