
  function truncate (str, max){
    let point = "…";
    if (str.length > max){
      return str.slice(0, (max - 1)) + point;
    }
   return str;
    
  }
  truncate ('Вот, что мне хотелось бы сказать на эту тему:', 20)
