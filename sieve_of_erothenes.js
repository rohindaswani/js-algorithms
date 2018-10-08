
const find_primes = (num) => {

  let a = [];
  for (let i = 2; i <= num; i++) {
    a[i] = false;
  }

  let prime = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (a[i] === false) {
      let j = i * i;
      while (j <= num) {
        a[j] = true;
        j += i;
      }
    }
  }
  for(let i=2; i<=num;i++) {
    if(a[i]=== false) {
      prime.push(i);
    }
  }

  console.log('prime', prime);
}

find_primes(100);