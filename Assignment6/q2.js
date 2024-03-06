//What makes a method mutating or non mutating in Javascript?
`
A method is mutating or non-mutating is depends upon whether it modifies the original array or object.
- if method modifies original array or object then it is mutating.
- else a method which does not modifies original array or object in known as non-mutating.

Mutating Methods => push(),pop(),sort()
Non-mutating methods => filter(),map(),find()

Properties of each functions as follows - 
`
var arr = [1,3,2,4]

arr.push(5)
console.log(arr) // Output=>[1,3,2,4,5] i.e.It modifies original array so push() is mutating method.

arr.pop()
console.log(arr) // Output=>[1,3,2,4] i.e.It modifies original array so pop() is also a mutating method.

arr.sort()
console.log(arr) // It is sorts array in-place. hence, it is also a mutating method.

//Below mentioned methods are does not modifies original content of array/object, they will return a new copy of that particular array/object. so, they will called as Non-mutating methods.
var data=[{"email":"abc@gmail.com"},{"email":"xyz@gmail.com"}]
var emails = data.map(function(item) {
    return item.email;
});
console.log(emails)

//like above function rem. two functions also returns new modified instance so that they will not called as Non-mutating methods.
