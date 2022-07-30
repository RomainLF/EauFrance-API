import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  .background {
    background-color: #78d2d3;
    display: flex;
    height: 93vh;
    width: 95vw;
    bottom: 0;
    right: 0;
    position: absolute;
    .list {
      margin-top: 2%;
      margin-left: 2%;
      width: 40vw;
      height: 85vh;
      background-color: #cde4ac;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        background-color: #98dbaf;
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
      }
    }
  }
  .hiddenCircle {
    width: 15em;
    height: 15em;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 2;
    position: relative;
    top: -5em;
    left: -5em;
    z-index: 1;
  }
  .littleCircle {
    width: 10em;
    height: 10em;
    background-color: #78d2d3;
    position: absolute;
    border-bottom-right-radius: 7em;
    z-index: 2;
    top: -3em;
    left: -3em;
  }
  .chart {
    width: 50vw;
    height: 89vh;
  }
`;
