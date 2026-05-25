/**
 * @param {Array<number>} num
 * /
/**
 * @typedef {Object} hasil
 * @property {number} max
 * @property {number} min
 * @property {number} avg 
 */
/**
 * Menghitung nilai tertinggi, terrendah, dan rata-rata dari isi array number
 * @param {Array<number>} num array contains numbers
 * @returns {hasil} results of calculating the highest value, lowest value, and average of a set of numbers in an array
 */

export function Acumulator(num) {
  let max = 0;
  let min = 100;
  let avg = 0;

  if (num.length === 0) {
    throw new Error("harus angka boss, dan di isii jangann engga!!");
  }
  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i])) {
        throw new Error ("harus angka boss, dan di isii jangann engga!!");
      }
    if (num[i] > max) {
      max = num[i];
    }
    if (num[i] < min) {
      min = num[i];
    }
    avg += num[i];
  }
  avg /= num.length;

  return {max, min, avg};
}

