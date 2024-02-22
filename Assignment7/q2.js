let original_obj = {
  a:"Apple",
  b:["Basketball","Baseball"],
  c: {
   call: "cellphone"
  },
  d: "Dog"
 }
function unique_obj(original_obj) {
  for (const i in original_obj) {
    if ((original_obj[i] != null) &&  ((typeof original_obj[i] == "object") || (typeof original_obj[i] == "array"))) {
      continue;
    }
    else {
      let newObj = {};
      (newObj[i] = original_obj[i]);
      console.log(newObj);
    }
   }
};

unique_obj(original_obj);