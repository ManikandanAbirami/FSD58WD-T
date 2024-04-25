function testSpread() {
  const nums1 = [1, 2, 3];
  const nums2 = [4, 5, 6];
  const combined = [...nums1, ...nums2];
  document.getElementById(
    "spreadRestOutput"
  ).innerHTML = `Combined Array: ${combined}`;
}

function testRest(...args) {
  document.getElementById(
    "spreadRestOutput"
  ).innerHTML += ` | Sum: ${args.reduce((acc, cur) => acc + cur, 0)}`;
}
