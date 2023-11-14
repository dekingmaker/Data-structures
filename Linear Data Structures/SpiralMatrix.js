const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
 let top =0;
 let bottom =matrix.length-1;
 let left=0;
 let right=matrix[0].length-1;

 while(top <= bottom && left<= right ){
for(let i=left;i<=right;i++){
    console.log(matrix[top][i]);
}
top++;
for(let i=top;i<=bottom;i++){
    console.log(matrix[i][right]);
}
right--;
if (top <= bottom) {
for(let i=right;i>=left;i--){
console.log(matrix[bottom][i]);
 }
 bottom--;
}
if (left <= right) {
 for(let i=bottom;i>=top;i--){
    console.log(matrix[i][left]);
 }
 left++;
}
}
