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



