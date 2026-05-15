const num = [5, 4, 3, 2, 1, 6, 7, 10, 8, 9];
let max = 0;
let min = 0;
let avg = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
  if (num[i] < min) {
    min = num[i];
  }
  avg += num[i];
}
// /rumus rata-rata, totalkan semua isi angka lalu bagi dengan jumlah qty angka
avg /= num.length; //avg = avg + num[i].. ini total semua qty angka
//avg = avg / num.length.. ini bagi dengan jumlah qty angka

console.log(max);
console.log(min);
console.log(avg);
