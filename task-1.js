function overloadedFunc(
    arg1 = [1, 2, 3],
    arg2 = 2,
    arg3 = function (arg1, arg2){
        if (Array.isArray(arg1)){
            for (let i = 0; i < arg1.length; i++){
                arg1[i] *= arg2;
            }
            return arg1;
        } else {
            return arg1 * arg2;
        }
    }
) {
    return arg3(arg1, arg2);
}
console.log(overloadedFunc());  // [2,4,6]
console.log(overloadedFunc([2,4,6,8]));     // [4,8,12,16]
console.log(overloadedFunc([2,4,6], 3));    // [6,12,18]
console.log(overloadedFunc(10));        // 20
console.log(overloadedFunc(8,3));       // 24
