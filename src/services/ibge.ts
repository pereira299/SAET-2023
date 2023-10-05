import axios from "axios";

export interface Estado {
    id: number;
    sigla: string;
    nome: string;
    regiao: {
      id: number;
      sigla: "N" | "NE" | "S" | "SE" | "CO";
      nome: "Norte" | "Nordeste" | "Sul" | "Sudeste" | "Centro-Oeste";
    };
}

export interface Municipio {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: Estado;
      };
    };
    "regiao-imediata": {
        id: number;
        nome: string;
        "regiao-intermediaria": {
          id: number;
          nome: string;
          UF: Estado;
        };
    };
}

export default class IBGE {
    public static async getStates(): Promise<Estado[]> {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        return response.data;
    }
    
    static async getCities(uf: string): Promise<Municipio[]> {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        return response.json();
    }

}