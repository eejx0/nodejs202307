var helloMessage = 'Hello ';
function hello(str){
  return helloMessage + str;
}
console.log(hello('Nodejs'));

// require()의 리턴값이 된다.
module.exports = {
  hi: hello,
  msg: helloMessage
};