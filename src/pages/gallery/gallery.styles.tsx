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

    .image-wrapper {
      height: 85vh;
      display: flex;
      align-items: center;

      &:last-child {
        height: 100vh;
      }
    }

    img {
      display: block;
      height: auto;
      max-height: 800px;
      max-width: 800px;
      min-width: 320px;
      width: 60vw;
    }
  }

  .blanker {
    background: tomato;
    height: 100vh;
  }
`;

export default SGallery;