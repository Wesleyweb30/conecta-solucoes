import { Endereco } from "./endereco";

export interface Problema {
    id?: string;
    titulo: string;
    descricao: string;
    situacao: string;
    endereco: Endereco;
    imagem: string;

}
