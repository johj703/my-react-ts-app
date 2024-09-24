let numbers = [-10, -5, 10];
let numberAboveZero: boolean | number = false; // boolean 타입으로 타입 추론 -> 타입 어노테이션 필요 boolean | number

for (let i = 0; i < colors.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i]; // error
}
