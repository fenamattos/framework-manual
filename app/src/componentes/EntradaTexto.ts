import { criarElemento, atritutos} from "../uteis.js"
import Rotulo from "./Rotulo.js";

const Entrada = (texto: string, type = "text", atritutos: atritutos = {}) => {

        const inputContrainer = criarElemento("div");

        const artibutInput: atritutos = {
            ...atritutos,
            placeholder: "Digite algo aqui",
            type: type, 

        }

        const input = criarElemento("input", "", artibutInput) as HTMLInputElement;


        const rotulo = Rotulo(texto)

        inputContrainer.appendChild(rotulo);
        inputContrainer.appendChild(input);

        return inputContrainer;


}

export default Entrada