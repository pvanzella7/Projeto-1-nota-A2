import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if(caminho[3] === 'validar'){
        console.log(chalk.bgYellow.black("Links Validados:"), await validaURL(resultado));
    } else{
    console.log(chalk.bgYellow.black("Lista de Links:"), resultado);
    }
}

processaTexto(caminho);