function enter() {
    const principalElement = document.getElementById('principal');
    const p = Number(principalElement.value);
    const interestRateElement = document.getElementById('rate');
    const r = Number(interestRateElement.value);
    const timeElement = document.getElementById('time');
    const t = Number(timeElement.value);
    const compoundingPeriodsElement = document.querySelector('input[name="compounding"]:checked');
    const n = compoundingPeriodsElement ? Number(compoundingPeriodsElement.value) : null;
    
    let a = (p * Math.pow((1 + r/n), (n*t))).toFixed(2);
    console.log(`Amount = $${a}`);
}
