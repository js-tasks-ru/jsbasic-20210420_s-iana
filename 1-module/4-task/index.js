function checkSpam(str) {
  let tempStr = str.toLowerCase(); 
  if (tempStr.includes("1xbet") || tempStr.includes("xxx")) {
	  return true;
  }
  return false;
}
