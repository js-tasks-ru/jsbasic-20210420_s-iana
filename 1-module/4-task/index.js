function checkSpam(str) {
<<<<<<< HEAD
  let tempStr = str.toLowerCase(); 
  if (tempStr.includes("1xbet") || tempStr.includes("xxx")) {
	  return true;
  }
  return false;
=======
  let strLowerCase = str.toLowerCase();

  return strLowerCase.includes('1xbet') || strLowerCase.includes('xxx');
>>>>>>> 55ec613b5f84ec168c732fb57949db6544792d2c
}
