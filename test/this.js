console.log(this); // {} (빈 객체)
console.log(this === module.exports); // true

function a() {
    console.log(this === global); // true
}
a();