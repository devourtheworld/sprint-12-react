const upperCase = str => str.toUpperCase();
const split = pattern => str => str.split(pattern);
const join = separator => str => str.join(separator);
const tripleExclaim = str => `${str}!!!`;
const copy = str => `${str}`.repeat(2);

const createComposition = (...funcs) => initial => 
    funcs.reduceRight((sum, curFunc) => curFunc(sum),initial);

const result = createComposition(
    copy, 
    tripleExclaim,
    join(" "),
    split("_"),
    upperCase
);

console.log(result('by_ticket_now'));
console.log(result('total sale'));
