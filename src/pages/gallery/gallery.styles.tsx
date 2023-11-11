import styled from 'styled-components';

const SGallery = styled.div`
  background: white;

  h1 {
    text-transform: uppercase;
  }

  .gallery-buttons {
    bottom: 1vh;
    display: flex;
    flex-direction: column;
    left: 1vw;
    position: fixed;
    z-index: 1;

    button {
      appearance: none;
      background: rgba(0, 0, 0, .2);
      border: 0;
      padding: 20px;
      line-height: 100%;
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 700;
      border-radius: 50%;
      color: ${({theme}) => theme.grey100};

      &:last-of-type {
        margin-top: 5px;
      }

      &:disabled {
        opacity: 20%;
      }

      &:active {
        background: ${({theme}) => theme.red};
        color: ${({theme}) => theme.white};
      }
    }
  }

  .gallery-description {
    p {
      font-size: calc(20px + 4vh);
      line-height: 110%;
    }
  }

  .gallery-photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .image-wrapper {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;

      img {
        display: block;
        height: auto;
        max-height: 800px;
        max-width: 800px;
        min-width: 320px;
        width: 95vw;

        @media (max-width: 960px) and (orientation:landscape) {
          max-height: 70vh;
          width: auto;
        }
      }
    }
  }

  .blanker {
    background: tomato;
    height: 100vh;
  }
`;

export default SGallery;