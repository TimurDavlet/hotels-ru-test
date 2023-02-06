// (30-40 минут на выполнение)
const cases = (num) => {
  const text = ['компьютер', 'компьютера', 'компьютеров']
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { 
    return `${num} ${text[2]}`;
  }
  if (n1 > 1 && n1 < 5) {
    return `${num} ${text[1]}`;    
  }
  if (n1 == 1) {
    return `${num} ${text[0]}`;
  }
  return `${num} ${text[2]}`;
}