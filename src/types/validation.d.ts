declare module "validation-br" {
    export const isCNH: (value: string) => boolean;
    export const isCNPJ: (value: string) => boolean;
    export const isCPF: (value: string) => boolean;
    export const isJudicialProcess: (value: string) => boolean;
    export const isPIS: (value: string) => boolean;
    export const isPostalCode: (value: string) => boolean;
    export const isRenavam: (value: string) => boolean;
    export const isTituloEleitor: (value: string) => boolean;
    export const isNUP17: (value: string) => boolean;
}
