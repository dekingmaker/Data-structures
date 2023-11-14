var maxProfit = function(prices) {
    const A=prices;
    let temp=0,min=A[0],max=0;
    
    for(let i=1;i<A.length;i++){
       min=Math.min(min,A[i]);
       temp=A[i]-min;
       max=Math.max(temp,max);

    }
    return max;

    
};