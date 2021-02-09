console.log("Filip");

console.log("next exercise")

//numbers 0 to 9
let cisla = 10;
for (let i=0; i < cisla; i++) {
    console.log(i)
}

console.log("next exercise")

// numbers 1-10
let cisla2 = 10;
for (let i=1; i <= cisla; i++) {
    console.log(i)
}

console.log("next exercise")

//even numbers
let even = 20
for (let i=0; i <= even; i++) {
    if (i % 2 <= 0) {
        console.log(i)
    }
}

console.log("next exercise")

let printNumbersTill = (n) => {
    for (let i = 1; i <= n; i++) {
    console.log(i)
    };
}

printNumbersTill(20)
printNumbersTill(15)

console.log("next exercise")
// could not solve the name one

let printValues = (a) => {
    for (let i=0; i < a.length; i++) {
    console.log(a[i]);
    }
  }

  console.log("next exercise")

let printValues2 = (a) => {
    a.foreach((number) => {
    console.log(number);
    })
}

