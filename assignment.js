// https://github.com/coolguygithub/assignment-3

// Problem 1 - kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var distance = kilometerToMeter(1);
console.log(distance);
//////////////////////// Solved ////////////////////////

// Problem 2 - budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var total = budgetCalculator(1, 1, 1);
console.log(total);
//////////////////////// Solved ////////////////////////

// Problem 3 - hotelCost

function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);
//////////////////////// Solved ////////////////////////

// Problem 4 - megaFriend

var friendsName = ["Biplob", "Nahid", "Noman", "Abu Bakar", "Shihab"];
function megaFriend(friendsName) {
    var longest = friendsName[0];
    for (i = 0; i < friendsName.lenth; i++) {
        if (friendsName[i].length > longest.lenth) {
            longest = friendsName[i];
        }
    }
    return longest;
}
console.log(megaFriend(friendsName));
//////////////////////// Solved ////////////////////////
