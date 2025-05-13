function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  
  // Use indexOf to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}