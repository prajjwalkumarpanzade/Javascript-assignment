const original_obj = {
  name:"Harry Potter",
  age: 12,
  address: {
   details: ["4", "Privet Drive"],
   area:"Little Whinging",
   city: "Surrey",
   state: "England"
  } 
 };
const copied_obj = {
  ...original_obj,
  address: {
    ...original_obj.address,
    details: ["5", original_obj.address.details[1]]
  }
};
console.log ("Original Address = ",original_obj);
console.log ("Updated Address = ",copied_obj);