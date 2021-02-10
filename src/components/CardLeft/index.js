import styled from 'styled-components'
import CardRight from '../CardRight'

const CardLeft = styled.div`
  margin: 50px;
  width: 350px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: #262626;
  border-radius: 10px;
  overflow: hidden;
  z-index: 10;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  @media screen and (max-width: 500px) { 
      width: 100%;
  }
`

CardLeft.Header = styled.header`
    display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid #000;
  
  * {
    margin: 0;
  }
`

CardLeft.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`
CardLeft.ContentIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-evenly;
`

CardLeft.Icon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray}; 
  outline: none;

  :hover {
    background-color: ${({ theme }) => theme.colors.black};
  }

`


export default CardLeft