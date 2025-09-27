import { criarElemento } from "../uteis.js";
import Rotulo from "./Rotulo.js";
const Entrada = (texto, type = "text", atritutos = {}) => {
    const inputContrainer = criarElemento("div");
    const artibutInput = {
        ...atritutos,
        placeholder: "Digite algo aqui",
        type: type,
    };
    const input = criarElemento("input", "", artibutInput);
    const rotulo = Rotulo(texto);
    inputContrainer.appendChild(rotulo);
    inputContrainer.appendChild(input);
    return inputContrainer;
};
export default Entrada;
