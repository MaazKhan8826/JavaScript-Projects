function rot13(str) {
  let chars = str.split("");

  for(let elem in chars){
    if(/[\w]/.test(chars[elem])){
      let codeCheck = chars[elem].charCodeAt(0);
      if(codeCheck - 13 < 65){
        let pushCode = 90 - (13 - (codeCheck-64));
        chars[elem] = String.fromCharCode(pushCode);
      } else {
        let pushCode = codeCheck-13;
        chars[elem] = String.fromCharCode(pushCode);
      }
    }
  }
  return chars.join("");
}

rot13("SERR PBQR PNZC");
