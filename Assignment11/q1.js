String.prototype.isValid = function() {
    if(this.trim().length == 0){
        return false
    }else if(this.length<=1){
        return false
    }else if(this.length>=30){
        return false
    }
    return true
}

let myName = "Prajjwalkumar"
console.log(myName.isValid())

//------------------------------------------------------------------------------------------

function isValidName(name) {
    const regex = /^[a-zA-Z]+$/;

    return name.trim().length >= 2 && name.trim().length <= 25 && regex.test(name);
}

let myName1 = "Panzade";
console.log(isValidName(myName1));
