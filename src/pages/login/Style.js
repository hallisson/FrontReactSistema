import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex: 0.5;
  background-color: #ffff;
  height: 75vh;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;

export const Input = styled.input`
  display: flex;
  margin-top: 10px;
  height: 36px;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 13px;
  padding-left: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  height: 36px;
  width: 70%;
  color: #fff;
  font: 13 Helvetica;
`;
