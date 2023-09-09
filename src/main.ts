function myFunction(param: number | string) {
  /*  if (typeof (param) == "number" || typeof (param) == "string") {
    // let result = (param as any) + 100;
    let fixed = param.toFixed(2);
    console.log("My result: " + fixed);
   } else {
     throw ("Expected a number: " + param)
   } */

  if (typeof (param) == "number") {
    let numberResult = param.toFixed(2);
    console.log("My result: " + numberResult);
  } else {
    let stringResult = param + 100;
    console.log("My result: " + stringResult);
  }
}
myFunction(1);
myFunction("London");
