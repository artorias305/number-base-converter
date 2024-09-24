// Core function to convert between bases
function convertBase(number, fromBase, toBase) {
  // Convert number from the input base to base 10 (decimal)
  let decimalValue = parseInt(number, fromBase);

  // If the number is invalid, return error
  if (isNaN(decimalValue)) {
    return "Invalid Input!";
  }

  // Convert from base 10 (decimal) to the target base
  return decimalValue.toString(toBase).toUpperCase(); // Uppercase for hex (A-F)
}

// CLI functionality (using Node.js)
if (typeof process !== 'undefined' && process.argv.length > 2) {
    const args = process.argv.slice(2);

    if (args.length !== 3) {
        console.log('Usage: node baseConverter.js <number> <fromBase> <toBase>');
        process.exit(1);
    }

    const [number, fromBase, toBase] = args;

    const result = convertBase(number, parseInt(fromBase), parseInt(toBase));
    console.log(`Converted Result: ${result}`);
}
