function calcularSueldo() {
  const bruto = sn_bruto.value;
  const irpf = sn_irpf.value / 100;
  const ss = sn_ss.value / 100;
  const pagas = sn_pagas.value;

  const neto = bruto - (bruto * irpf) - (bruto * ss);
  sn_resultado.innerHTML = `
    Neto anual: ${neto.toFixed(2)} €<br>
    Neto mensual: ${(neto / pagas).toFixed(2)} €
  `;
}

function calcularFiniquito() {
  const total = (fin_salario.value * fin_dias.value) +
                (fin_salario.value * fin_vacaciones.value);
  fin_resultado.innerHTML = `Finiquito: ${total.toFixed(2)} €`;
}

function calcularIRPF() {
  const impuesto = irpf_ingresos.value * irpf_pct.value / 100;
  irpf_resultado.innerHTML = `IRPF anual: ${impuesto.toFixed(2)} €`;
}

function calcularParo() {
  const total = paro_base.value * paro_mes.value;
  paro_resultado.innerHTML = `Prestación mensual: ${total.toFixed(2)} €`;
}

function calcularHipoteca() {
  const c = hip_capital.value;
  const i = hip_interes.value / 100 / 12;
  const n = hip_anos.value * 12;
  const cuota = (c * i) / (1 - Math.pow(1 + i, -n));
  hip_resultado.innerHTML = `Cuota mensual: ${cuota.toFixed(2)} €`;
}

function calcularCompuesto() {
  let capital = Number(comp_capital.value);
  const aporte = Number(comp_aporte.value);
  const tasa = comp_interes.value / 100 / 12;
  const meses = comp_anos.value * 12;

  for (let i = 0; i < meses; i++) {
    capital = capital * (1 + tasa) + aporte;
  }

  comp_resultado.innerHTML = `Capital final: ${capital.toFixed(2)} €`;
}

function calcularCalorias() {
  const tmb = 10 * cal_peso.value + 6.25 * cal_altura.value - 5 * cal_edad.value + 5;
  const total = tmb * cal_actividad.value;
  cal_resultado.innerHTML = `Calorías diarias: ${total.toFixed(0)} kcal`;
}

function calcularAhorro() {
  const ahorro = ah_ingresos.value - ah_gastos.value;
  ah_resultado.innerHTML = `Ahorro mensual: ${ahorro.toFixed(2)} €`;
}
