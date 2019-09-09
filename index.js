function takeANumber(anyLine) {
  let newCust = anyLine.length + 1;
  let updatedLine = anyLine.push(newCust);
  return `You are number ${newCust} in line.`;
}


function nowServing(anyLine) {
  if (anyLine.length === 0) {
  return 'There is nobody waiting to be served!';
  } else {
    let firstCust = anyLine.shift();
    return `Currently serving ${firstCust}.`;
  } 
}


function currentLine(anyLine) {
  if (anyLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let numberedLine = [];
    for (let i = 0; i < anyLine.length; i++) {
      numberedLine.push(' ' + parseInt(i+1) + '. ' + anyLine[i]);
    } return `The line is currently:${numberedLine}`;
  }
}


console.log(takeANumber(anyLine));