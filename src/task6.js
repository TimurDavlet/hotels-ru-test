// (30 минут на выполнение)
const normalizeValue = (value, maxValue) => {
  const numberOfZeros = String(maxValue).length - String(value).length;
  return `${' '.repeat(numberOfZeros)}${value}`;
}

const multiplicationTable = (num) => {
  const table = [];
  for (let i = 0; i <= num; i += 1) {
    table[i] = [];

    for (let j = 0; j <= num; j += 1) {
      if (j===0) {
        const value = i === 0 ? normalizeValue(' ', num) : normalizeValue(i, num)
        table[i][j] = value;
      } else if (i===0) {
        const maxValue = j * num;
        const value = normalizeValue(j, maxValue);
        table[i][j] = value;
      } else {
        const maxValue = j * num;
        const newValue = i * j
        const value = normalizeValue(newValue, maxValue);
        table[i][j] = value;
      }
    }
   }

   const finalTablel = table.map((row) => row.join(' ')).join('\n')

   console.log(finalTablel)
  return finalTablel;
}