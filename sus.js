// parte2 : TIPO DOS DADOS

const nomealuno = "Carlos Silva" // Tipo = string
const nota = 8.5 // Tipo = float
const frequencia = 80 // Tipo = int
const estaAprovado = true; // Tipo = bool
const RA = 12345; // Tipo = int

// 1. Definição dos dados
const nomeAluno = "Carlos"; // string
const nota1 = 8.0; // float
const nota2 = 6.0; // float
const presenca = 80; // float

// 2. Cálculo da Média (Operadores Aritméticos)
// Dica: Use parênteses para garantir a ordem de precedência!
let media = (nota1 + nota2) / 2;

// 3. Lógica de Aprovação (Operadores de Comparação e Lógicos)
// O aluno precisa de media >= 7 E presenca >= 75
let aprovado = (media >= 7) && (presenca >= 75);

// 4. Exibição do Resultado
console.log("Aluno: " + nomeAluno);
console.log("Média Final: " + media);
console.log("Status de Aprovação: " + aprovado);

let precisaDeRecuperacao = !aprovado;
console.log("Precisa de recuperação: " + precisaDeRecuperacao);