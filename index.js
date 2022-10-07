const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.error(`${titulo} não passou`);
  }
};

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));

teste('caculaDesconto', 2200, calculaDescontos(2500, 300));
