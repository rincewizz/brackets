module.exports = function check(str, bracketsConfig) {
  let order=[];
  let count={};

  for(bracket of str){
    let index = bracketsConfig.findIndex( v => v[0]==bracket);
    if(index==-1 || count[index]>0 && bracketsConfig[index][0]==bracketsConfig[index][1]){
      let closeIndex = bracketsConfig.findIndex( v => v[1]==bracket);
      if(closeIndex==order[order.length-1]){
        count[closeIndex]--;
        order.pop();
      }else {
        return false
      }

    }else{
      order.push(index);
      count[index] = count[index]!=undefined ? count[index]+1 : 1;

    }
  }

  return order.length==0;
}
