import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  margin-bottom: 80px;
`;
export const Titulo = styled.h2`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  width: 620px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 236px;
  color: ${cores.rosaEscuro};
`;

export const Img = styled.img`
  width: 125px;
  height: 57.5px;
  top: 40px;
  left: 45%;
  margin-bottom: 138px;
  position: absolute;
  display: flex;
  align-items: center;
`;
