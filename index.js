<<<<<<< HEAD
function shout(string)
{
  return string.toUpperCase()
}
//Above function displays the text message in all caps

function whisper(string)
{
  return string.toLowerCase()
}
//Above function displays the text message in lower caps

function logWhisper(string)
{
  console.log(whisper(string))
}
//Above function displays the lowercase text previously used

function logShout(string)
{
  console.log(shout(string))
}
//Above function displays the uppercase text previously used

function sayHiToGrandma(string)
{
  if (string == whisper(string))
   {
     return "I can't hear you!"
   }
  else if (string == shout(string))
   {
     return "YES INDEED!"
   }
  else if (string === "I love you, Grandma.")
   {
     return "I love you, too."
   }
}

=======
function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logWhisper(string){
  return string
}

function logShout(string){
  return string
}

function sayHiToGrandma(string){
  logWhisper('hello')
  console.log(logWhisper).toLowerCase()
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase
>>>>>>> 78284a7ec2c23be27cd45782f22e4741c785ccbe


