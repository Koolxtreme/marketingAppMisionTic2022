export const obtenerMejores = (a, ismain) => {
    let irterable = a.map((objeto) => objeto);
    irterable.sort((n1, n2) => n2.pop - n1.pop);
    const result = [];
    if (ismain) {
      for (let i = 0; result.length < 7; i++) {
        result.push(irterable[i]);
      }
    } else {
      if (irterable.length > 20) {
        for (let i = 0; result.length < 20; i++) {
          result.push(irterable[i]);
        }
      } else {
        for (let i = 0; result.length < irterable.length; i++) {
          result.push(irterable[i]);
        }
      }
    }
  
    return result;
  };