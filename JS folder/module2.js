
//?DEFAULT EXPORT

//FUNCTION
// function Raja(){
//     console.log("Hii Raja")
// }
// export default Raja

//ARRAY

// let arr=[10,20,30,40]
// export default arr

//OBJECT
// let obj ={
//     Name:"Sharmila",
//     Age:21,
//     City:"Chennai"
// }
// export default obj

//?NAMED EXPORT
//FUNCTION

export function bujji(){
    console.log("Hello Bujji......")
}

let a = function chintu(){
    console.log("Hiii chintu")
}
export {a as bunty}

let arr=[10,20,30,40]
export {arr as Array}