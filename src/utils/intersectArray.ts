export const intersect = <T>(p1: T[], p2: T[]): T[] => {
  const a1Len = p1.length;
  const a2Len = p2.length;

  const res = [];

  for (let i = 0, index = 0; i < a1Len; i++) {
    let j = 0;
    let k = 0;

    while (p2[j] !== p1[i] && j < a2Len) {
      j++;
    }

    while (res[k] !== p1[i] && k < index) {
      k++;
    }

    if (j !== a2Len && k === index) {
      res[index++] = p1[i];
    }
  }

  return res;
};
