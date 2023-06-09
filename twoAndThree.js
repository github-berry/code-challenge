const twoAndThree = () => {
  const t = '2864738339202630'
  let num = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  let arr = []

  for (let i = 0; i < t.length; i++) {
    if (i === 0) {
      arr.push(t[i]+t[i+1])
      arr.push(t[i+2]+t[i+3])
    }else{
      if(a === 0){
        a = i + 3
        b = i + 4
        c = i + 5
        num = t[i+3] + t[i+4] + t[i+5]
        arr.push(num)
      }else{
        a += 3
        b += 3
        c += 3
        num = t[a] + t[b] + t[c]
        if(Number(num)){
          arr.push(num)
        }else{
          break
        }
      }
    }
  }
  return arr
}

console.log(twoAndThree())
