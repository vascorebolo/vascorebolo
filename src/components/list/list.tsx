import styled from 'styled-components';

const SListOfGalleries = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0 0.5;
  padding: 0;
  --depth: 2vw;

  li {
    font-size: calc(25px + 1.5vw);
    line-height: 110%;
    margin: 2vw 0;
    padding: 0;
    position: relative;
    text-align: center;
    transform: rotate(-0.002turn);

    a {
      background-color: ${({ theme }) => theme.grey500 };
      color: ${({ theme }) => theme.white };
      padding-bottom: var(--depth);
      padding-left: calc(var(--depth) + 1vw);
      padding-right: 1.5vw;
      padding-top: 1vw;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      transform: rotate(-0.15turn);
      transition: 0.3s linear;

      &:hover {
        --depth: 2.5vw;
        background-color: ${({ theme }) => theme.grey100 };
      }

      &::before,
      &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        transition: 0.3s linear;
      }

      &::before {
        left: -1px;
        top: -1px;
        border-top: var(--depth) solid ${({ theme }) => theme.white};
        border-right: var(--depth) solid transparent;
      }

      &::after {
        right: -1px;
        bottom: -1px;
        border-bottom: var(--depth) solid ${({ theme }) => theme.white};
        border-left: var(--depth) solid transparent;
      }
    }

    &.last {
      margin-top: 5vw;
    }

    &.new::after {
      align-items: center;
      background: ${({ theme }) => theme.red};
      color: ${({ theme }) => theme.white};
      content: 'NEW';
      display: block;
      display: flex;
      font-size: 12px;
      height: 35px;
      width: 35px;
      justify-content: center;
      letter-spacing: 2px;
      /* padding: 0 5px; */
      position: absolute;
      right: -20px;
      top: -20px;
      border-radius: 50%;
    }

    &.special a {
      background-color: ${({ theme }) => theme.red}
    }

    &:nth-child(odd) {
      transform: rotate(+0.006turn);
    }
  }
`

export default SListOfGalleries;