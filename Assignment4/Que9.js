let stringName = "abba";
function checkRule(str) {
    // base case
    if (str.length === 0) {
    return true;
  }
  // if both rules are not followed
  if (str.substring(0, 1) !== "a" && str.substring(0, 2) !== "bb") {
    return false;
  }
  // Variables for different rules
  let checkA = false,
    checkBB = false;
  if (str.substring(0, 1) === "a") {
    checkA = checkRule(str.substring(1));
  } else if (str.substring(0, 2) === "bb") {
    checkBB = checkRule(str.substring(2));
  }
  return checkA || checkBB;
}
console.log(checkRule(stringName));