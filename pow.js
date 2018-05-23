// npm install js-sha256
var sha256 = require('js-sha256').sha256;

data = new Date()

solvePuzzle(data, '0')
solvePuzzle(data, '00')
solvePuzzle(data, '000')
solvePuzzle(data, '0000')
solvePuzzle(data, '00000')
solvePuzzle(data, '000000')



function solvePuzzle(data, difficultyPrefix) {
  var nonce = 'NOT-FOUND';
  var start = Date.now();
  var end = start;
  var elapsedTime = undefined;

  for (var tryNonce=0; tryNonce< 100000000; tryNonce++) {
    hashed = sha256(data + tryNonce)
    // console.log(hashed)
    if (hashed.startsWith(difficultyPrefix)) {
      end = Date.now();
      elapsedTime = end - start;
      nouce = tryNonce;
      break;
    }
  }

  if (elapsedTime == undefined) {
    console.log('No nonce found!')
  }
  else {
    console.log('DifficultyPrefix: ' + difficultyPrefix + ', Time(ms): ' + elapsedTime + ', Nonce: ' +nouce +', Hash: ' + hashed)
  }
}
