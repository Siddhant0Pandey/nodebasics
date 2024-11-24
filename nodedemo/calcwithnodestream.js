process.stdin.on("data", (chunk) => {
  const input = chunk.toString().trim();

  if (input === "quit") {
    process.exit(0);
  }
  try {
    const val = eval(input);
    console.log(val);
  } catch (ex) {
    console.log("I dont knolw");
  }
  //   console.log(input);
});
process.stdout.write("Enter your equation: ");
