const intervals = [[1,3],[2,6],[8,10],[15,18]];
let arr=[];

intervals.sort((a, b) => a[0] - b[0]);
let temp=intervals[0];
for(let i=1;i<intervals.length;i++){
    if(temp[1]>=intervals[i][0]){
        temp[1]=Math.max(temp[1],intervals[i][1]);
       
    }
    else{
        arr.push(temp);
        temp=intervals[i];
       
        console.log(arr);

    }
}
arr.push(temp);
 console.log(arr);