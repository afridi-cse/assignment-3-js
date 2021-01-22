function kilometerToMeter(kilometer) {
    valueType = typeof(kilometer);
    if (kilometer >= 0 && valueType == "number") {
        return kilometer * 1000;
    } else if (kilometer < 0) {
        return "Distance can't be negative. Please enter the positive value."
    } else {
        return "Please enter the CORRECT NUMBER of value then TRY AGAIN !!!"
    }
}
console.log(kilometerToMeter());

function budgetCalculator(watch, mobile, laptop) {
    watch = Math.floor(watch);
    mobile = Math.floor(mobile);
    laptop = Math.floor(laptop);
    valueTypeWatch = typeof(watch);
    valueTypeMobile = typeof(mobile);
    valueTypeLaptop = typeof(laptop);

    if (watch >= 0 && mobile >= 0 && laptop >= 0 && valueTypeWatch == "number" && valueTypeMobile == "number" && valueTypeLaptop == "number") {
        return watch * 50 + mobile * 100 + laptop * 500;
    } else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Minas is not allowed. Please enter positive value."
    } else {
        return "Please enter the CORRECT NUMBER of value then TRY AGAIN !!!"
    }
}
console.log(budgetCalculator());

function hotelCost(day) {
    day = Math.ceil(day);
    valueType = typeof(day);
    if (day >= 0 && valueType == "number") {
        if (day <= 10) {
            return day * 100;
        } else if (day <= 20) {
            return (day - 10) * 80 + (10 * 100);
        } else {
            return (day - 20) * 50 + (10 * 80) + (10 * 100);
        }
    } else if (day < 0) {
        return "Day can't be negative. Please enter the positive value."
    } else {
        return "Please enter the CORRECT NUMBER of value then TRY AGAIN !!!"
    }
}
console.log(hotelCost());

function megaFriend(names) {
    if (names.length != 0) {
        longestName = "";
        for (var i = 0; i < names.length; i++) {
            if (longestName.length < names[i].length) {
                longestName = names[i];
            }
        }
        return longestName;
    } else {
        return "Your arrry is empty"
    }
}
console.log(megaFriend(["shahid", "alif", "ayman", "Muhammad", "Iftekhar"]));