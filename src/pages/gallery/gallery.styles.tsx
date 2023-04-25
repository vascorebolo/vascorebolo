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
      width: 45vw;
      height: 45vw;
      max-width: 1000px;
      max-height: 1000px;
      display: block;
      min-width: 375px;
      min-height: 375px;
    }
  }
`;

export default SGallery;