function validateBrackets(str) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];

  const isMatchingPair = (opening, closing) => {
    return (
      (opening === "(" && closing === ")") ||
      (opening === "[" && closing === "]") ||
      (opening === "{" && closing === "}")
    );
  };

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closingBrackets.includes(currentChar)) {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      if (!isMatchingPair(top, currentChar)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
