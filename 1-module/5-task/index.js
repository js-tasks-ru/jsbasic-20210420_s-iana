
  function truncate (str, max){
    let point = "…";
    if (str.length > max){
      return str.slice(0, (max - 1)) + point;
      // str.substr(0, (max - 1)) + '…';
    }
    else {
      return str;
    }
  }
  truncate ('Вот, что мне хотелось бы сказать на эту тему:', 20)
