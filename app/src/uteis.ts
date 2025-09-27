interface atritutos {
    [chave: string]: string | string[] | undefined
}

const idGenerator = (): string => Math.random().toString(36).substring(2,15);


const criarElemento = (tag: string, conteudo = "", atritutos: atritutos = {}): HTMLElement => {
    const elemento = document.createElement(tag);
    elemento.textContent = conteudo;


    for (const [chave, valor] of Object.entries(atritutos)){
        if (chave === 'class' && Array.isArray(valor)){
            elemento.classList.add(...valor);
            continue;
        }

         if (typeof valor === "string"){
        elemento.setAttribute(chave, valor);
        }
    
    
    }

    if(atritutos.id) elemento.setAttribute('id', `${tag}-${idGenerator()}`)


    return elemento;
}

const renderizar = (elemento: HTMLElement): void => {
    const root = document.querySelector('#root') as HTMLElement
    root.appendChild(elemento)
}

export { criarElemento, renderizar, atritutos }