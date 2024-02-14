// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
`
export const Input = styled.input`
  width: 330px;
  height: 36px;
  border: 2px solid #d7dfe9;
  border-radius: 6px;
  margin-bottom: 18px;
  padding-left: 12px;
  color: black;
  family: 'Roboto';
`

export const CustomSelect = styled.select`
  width: 330px;
  height: 36px;
  border: 2px solid #d7dfe9;
  border-radius: 6px;
  margin-bottom: 18px;
  padding-left: 12px;
  color: black;
  family: 'Roboto';
  cursor: pointer;
`
export const CustomOption = styled.option`
  font-family: 'Roboto';
  color: #7e858e;
`
export const Button = styled.button`
  width: 120px;
  height: 35px;
  background-color: #0b69ff;
  border-radius: 7px;
  border: none;
  color: White;
  font-family: 'Roboto';
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImg});
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const TextContent = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
