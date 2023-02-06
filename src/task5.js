// (15 минут на выполнение)
const doubleSearch = (arr1, arr2) => {
  const duplicates1 = arr1.filter((e, index, arr) => arr.indexOf(e) !== index);
  const duplicates2 = arr2.filter((e, index, arr) => arr.indexOf(e) !== index);
  const result = duplicates1.filter(e => duplicates2.indexOf(e) !== -1);
  return result;
}