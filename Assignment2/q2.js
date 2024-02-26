let a = [5,2,3,6,9,8,7,1];
console.log("Original Array - ", a);
console.log("Type of a = ", typeof a);
a.push(13);
a.push(55);
console.log("Array after adding 13 and 55 - ", a);
a.pop();
console.log("Array after deleting last element - ",a);
console.log("Sorted array - ",a.sort())

const b = [50,65,48,21,15,35];
console.log("Original array - ",b);
console.log("Type of b = ", typeof b);

b.push(0);
console.log("Array after adding 0 - ",b);
b.pop();
console.log("Array after removing last element - ",b);
console.log("Sorted array - ",b.sort())

let obj1 = {name: "Prajjwalkumar",age: 23, add: "Model colony Pune"};
console.log(obj1);
console.log("Type of obj1 - ",typeof obj1);
obj1["email"] = "prajjwal@gmail.com";
console.log("Updated object - ",obj1);
delete obj1["age"];
console.log("After deleting age - ", obj1);

const obj2 = {college: "Fergusson college",department: "Computer Science", add: "FC Road Pune"};
console.log(obj2);
console.log("Type of obj2 - ",typeof obj2);
obj1["email"] = "prajjwal@gmail.com";
console.log("Updated object - ",obj2);
delete obj1["department"];
console.log("After deleting department - ", obj2);
`
OUTPUT
Original Array -  [
  5, 2, 3, 6,
  9, 8, 7, 1
]
Type of a =  object
Array after adding 13 and 55 -  [
  5, 2, 3,  6,  9,
  8, 7, 1, 13, 55
]
Array after deleting last element -  [
  5, 2, 3,  6, 9,
  8, 7, 1, 13
]
Sorted array -  [
  1, 13, 2, 3, 5,
  6,  7, 8, 9
]
Original array -  [ 50, 65, 48, 21, 15, 35 ]
Type of b =  object
Array after adding 0 -  [
  50, 65, 48, 21,
  15, 35,  0
]
Array after removing last element -  [ 50, 65, 48, 21, 15, 35 ]
Sorted array -  [ 15, 21, 35, 48, 50, 65 ]
{ name: 'Prajjwalkumar', age: 23, add: 'Model colony Pune' }
Type of obj1 -  object
Updated object -  {
  name: 'Prajjwalkumar',
  age: 23,
  add: 'Model colony Pune',
  email: 'prajjwal@gmail.com'
}
After deleting age -  {
  name: 'Prajjwalkumar',
  add: 'Model colony Pune',
  email: 'prajjwal@gmail.com'
}
{
  college: 'Fergusson college',
  department: 'Computer Science',
  add: 'FC Road Pune'
}
Type of obj2 -  object
Updated object -  {
  college: 'Fergusson college',
  department: 'Computer Science',
  add: 'FC Road Pune'
}
After deleting department -  {
  college: 'Fergusson college',
  department: 'Computer Science',
  add: 'FC Road Pune'
}
`



