void (function () {
  console.log(":: ARRAYS INDEX 0 ::");
  let arr = [10, 20, 25];
  console.log(arr[0]); // Prints: "10"
  console.log(arr.length); // Prints: "3"
})();

void (function () {
  console.log(":: ARRAY LENGTH ::");
  let arr = [10, 20, 25];
  console.log(arr[0]); //     Prints: "10"
  console.log(arr.length); // Prints: "3"
  arr[3] = 30;
  console.log(arr.length); // Prints "4"
  arr[9] = 100;
  console.log(arr.length); // Prints "10
  console.log(arr[8]); //     Prints "undefined"
})();

void (function () {
  console.log(":: ARRAY ACCESS ::");
  let arr = [10, 20, 25];
  console.log(arr[0]); //     Prints: "10"
  console.log(arr["0"]); //   Prints: "10"
  console.log(arr["ten"]); // Prints "undefined"
})();

void (function () {
  // Create an original array with objects
  let arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  let copiedArr = arr.slice(); // Copy Array
  arr[0].name = "New John"; //    Modify first object

  console.log("Copied Array:", copiedArr); // New array
  console.log("Original Array:", arr); // arr[0] was modified
})();
