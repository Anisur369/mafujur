const arr=[12,43,56,95];


function getMax (number) {  let max = number[0];
  for (const num of number) {
    let max = 0;
    if (num > max) {
      max = num;
    }
  }
  console.log(max);
  return max;
}

getMax(arr);