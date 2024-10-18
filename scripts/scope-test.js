// Broken
(() => {
  let i;
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
})();

// works
(() => {
  for (let i = 10; i < 15; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
})();

// broken
(() => {
  for (var i = 20; i < 25; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
})();

// still works
(() => {
  for (let i = 30; i < 35; ) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
    i++;
  }
})();
