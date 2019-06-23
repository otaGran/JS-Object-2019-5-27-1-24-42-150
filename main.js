
var user={

}
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
console.log(user)
delete user["name"];
console.log(user)

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var num = 0;
for(let key in fruit){
    num += fruit[key]
}
console.log(num);

