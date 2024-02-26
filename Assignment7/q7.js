const arr = ["apple", "windows", "apple", "ubuntu", "cola", "system", "laptop", "notebook", "desktop", "printer", "keyboard"];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count > 1) {
    console.log(arr[i]);
  }
}

