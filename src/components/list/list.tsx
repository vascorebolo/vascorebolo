import styled from 'styled-components';

const SListOfGalleries = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0 0.5;
  padding: 0;

  li {
    font-size: calc(25px + 2vw);
    line-height: 110%;
    margin: 2vh 0;
    padding: 0;
    position: relative;
    text-align: center;
    transform: rotate(-0.002turn);

    &.last {
      margin-top: 5vw;
    }

    &.new a:after {
      content: 'NEW';
      display: inline-block;
      background: ${({ theme }) => theme.red };
      color: ${({ theme }) => theme.white };
      font-size: 10px;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      letter-spacing: 1px;
      line-height: 30px;
      position: absolute;
      top: -7px
    }

    &.special {
      padding: 10px 30px;

      a {
        background-color: ${({ theme }) => theme.grey500 };
        color: ${({ theme }) => theme.white };

        &:hover {
          background-color: ${({ theme }) => theme.grey100 };
          color: ${({ theme }) => theme.white };
        }
      }
    }

    &:nth-child(odd) {
      transform: rotate(+0.005turn);
    }

    a {
      color: ${({ theme }) => theme.grey500 };
      padding: 1vw 3vw;
      text-decoration: none;
      text-transform: uppercase;
      transform: rotate(-0.15turn);
      transition: 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.grey100 };
      }
    }
  }
`

export default SListOfGalleries;