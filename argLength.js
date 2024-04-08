var argumentsLength = function(...args) {
    console.log(args.length);
    let res=[];
    for(i=0;i<args.length;i++){
      res.push(args[i])
    }
    return res.length
};

argumentsLength(1,2,3)