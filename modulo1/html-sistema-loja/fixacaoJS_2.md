``` 
function calculaPrecoTotal(quantidade) {
  if(quantidade < 12){
    return quantidade * 1.3;
  }else if(quantidade >= 12){
    return quantidade * 1.0;
  }
}
```