// (10 минут на выполнение)
const roundUp = (num) => {
  const max = Math.ceil(num/5) * 5;
  const min = Math.floor(num/5) * 5;
  if ((max - num).toFixed(1) > 2.5) {
    return min;
  }
  else if ((max - num).toFixed(1) < 2.5) {
    return max;
  }
  return  max;
}