// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-left: 20%;
  margin-right: 20%;
`

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background-color: #0b69ff;
  font-size: 20px;
  border: 0px;
  color: white;
  padding: 10px;
`

export const Drop = styled.select`
  margin-bottom: 10px;
  padding: 6px;
`
export const SecondDiv = styled.div`
  background-image: ${props => props.bgImage};
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.fontSize};
`
export const Para1 = styled.p`
  font-size: ${props => props.fontSize};
  color: white;
`

export const Options = styled.option``

export const Heading = styled.h1`
  font-size: 20px;
  color: #35469c;
  text-align: center;
`

export const Label1 = styled.label`
  color: #7e858e;
  font-size: 16px;
`

export const Input1 = styled.input`
  padding: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
`
