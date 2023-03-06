import styled from 'styled-components';

export const Gallery = styled.ul`
   {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: 230px;
    grid-auto-flow: dense;
    grid-gap: 15px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
