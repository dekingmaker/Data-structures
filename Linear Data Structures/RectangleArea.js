 function RectangleArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let cx1=Math.max(ax1,bx1);
    let cy1=Math.max(ay1,by1);
    let cx2=Math.min(ax2,bx2);
    let cy2=Math.min(ay2,by2);

let overLapArea=0;
    if(cx2>cx1 && cy2>cy1){
     overLapArea=Math.max(0,Math.abs(cx2-cx1))*Math.max(0,Math.abs(cy2-cy1));
    }
    const rectArea1 = calArea(ax1, ay1, ax2, ay2);
    const rectArea2 = calArea(bx1, by1, bx2, by2);
    return rectArea1 + rectArea2 - overLapArea;
    function calArea(x1,y1,x2,y2){
         const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    return width * height;
    }
}