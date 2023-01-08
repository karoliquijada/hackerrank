const arr = [1, 3, 2, 5, 4];

function miniMaxSum(arr) {
  const max = [...arr].sort().splice(1).reduce((acc, num) => acc + num);
  const min = [...arr].sort().splice(0, arr.length - 1).reduce((acc, num) => acc + num);

  console.log(min,max);
}

miniMaxSum(arr);
