"use strict";

let price = [200, 550, 4000, 23, 58, 5000, 485, 711];

function getDiscount(total, procent) {
  total *= procent / 100;

  return parseInt(total);
}

const getBonus = () => {
  let sumBay = 0,
      priceBonus = 0,
      bonusSum = 10000,
      discount = 0;

  for (let value of price) {
    sumBay += value;
  }

  if (sumBay > bonusSum) {
    discount = 5;
    priceBonus = getDiscount(sumBay, discount);

    return document.write(`Поздравляем Ваш бонус
                           составит: ${priceBonus} рубль`);

  } 
  
  return document.write(`Ваш бонус: ${priceBonus}`);

};

getBonus();