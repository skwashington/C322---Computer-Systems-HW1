let results = []; // store valid numeric results

document.write('<table>');
document.write(
  '<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>',
);

while (true) {
  let x = prompt('Enter first number (x):');
  if (x === null) break;

  let operator = prompt('Enter operator (+, -, *, /, %):');
  if (operator === null) break;

  let y = prompt('Enter second number (y):');
  if (y === null) break;

  let result;

  // Convert to numbers
  let numX = Number(x);
  let numY = Number(y);

  if (isNaN(numX) || isNaN(numY)) {
    result = 'Error: Non-numeric input';
  } else if (operator === '+') {
    result = numX + numY;
  } else if (operator === '-') {
    result = numX - numY;
  } else if (operator === '*') {
    result = numX * numY;
  } else if (operator === '/') {
    if (numY === 0) {
      result = 'Error: Division by zero';
    } else {
      result = numX / numY;
    }
  } else if (operator === '%') {
    result = numX % numY;
  } else {
    result = 'Error: Invalid operator';
  }

  // Save valid results only
  if (typeof result === 'number') {
    results.push(result);
  }

  document.write(
    '<tr><td>' +
      x +
      '</td><td>' +
      operator +
      '</td><td>' +
      y +
      '</td><td>' +
      result +
      '</td></tr>',
  );
}

document.write('</table>');

// ================== SUMMARY TABLE ==================

if (results.length > 0) {
  let total = 0;
  let min = results[0];
  let max = results[0];

  for (let i = 0; i < results.length; i++) {
    total += results[i];

    if (results[i] < min) {
      min = results[i];
    }

    if (results[i] > max) {
      max = results[i];
    }
  }

  let avg = total / results.length;

  document.write('<h2>Summary</h2>');
  document.write('<table>');
  document.write(
    '<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>',
  );
  document.write(
    '<tr><td>' +
      min +
      '</td><td>' +
      max +
      '</td><td>' +
      avg +
      '</td><td>' +
      total +
      '</td></tr>',
  );
  document.write('</table>');
} else {
  document.write('<p>No valid results to summarize.</p>');
}
