import styled from 'styled-components';

const SGallery = styled.div`
  background: white;

  h1 {
    text-transform: uppercase;
  }

  .gallery-photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      height: auto;
      max-height: 800px;
      max-width: 800px;
      min-width: 320px;
      width: 60vw;
      margin: 5vw 0;
    }
  }

  .blanker {
    background: tomato;
    height: 100vh;
  }
`;

export default SGallery;