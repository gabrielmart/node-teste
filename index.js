import assert from 'node:assert/strict';

/* eslint-disable no-console */
const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamentoIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };

  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch (error) {
    console.error(`${titulo} não passou!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamentoIgualA(esperado);
});

teste('caculaDesconto', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamentoIgualA(esperado);
});
