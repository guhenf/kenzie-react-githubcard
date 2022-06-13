import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 15px;
`

export const Form = styled.form``

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;

  border-radius: 6px;
  position: relative;

  ::placeholder {
    color: #cecece;
  }

  :focus::placeholder {
    position: absolute;
    top: 0px;
    left: -10px;

    transition: 0.3s;
    transform: scale(0.7);
  }
`

export const Span = styled.span`
  color: red;
  font-size: 14px;

  position: absolute;
  left: 4px;
  top: 40px;
`

export const Button = styled.button`
  background-color: green;
  color: #ffff;
  font-size: 16px;
  font-weight: 600;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  width: 100%;
  height: 35px;

  :hover {
    color: green;
    background-color: #ffff;
    transition: 0.3s;
  }
`
