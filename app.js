console.log(process.argv);



var arr = process.argv[4];

console.log(typeof(arr));

var nums = arr.split(" ");
var sum = 0;


nums.forEach(function(element) {
    sum += parseInt(element);
}, this);

console.log(sum);