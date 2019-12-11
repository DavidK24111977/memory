var numbers=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var container=document.getElementById("container");
var cards;
var inner;
var r;
for(var i=0; i<16; i++){
    console.log("i: "+i);
    console.log("numbers length: "+numbers.length);
    r=Math.floor(Math.random()*numbers.length);
    console.log("r: "+r);
    cards=document.createElement("div");
    inner=document.createElement("inner");
    cards.className="cards";
    inner.className="inner";
    container.appendChild(cards);
    cards.appendChild(inner);
    inner.innerHTML= numbers[r];

    numbers.splice(r,1);
    console.log("numbers after: "+numbers);

}
var count=1;
var check;
var previous;
var checkInner=document.getElementsByClassName("inner");
function reveal(){
    for(var i = 0; i<checkInner.length; i++){
        checkInner[i].onclick=function(){
            check=this.innerHTML;
            if(count==1){

                previous=check;
                count++;
            } else{
                count=1;
                if(check == previous){
                    alert("ok");
                } else {
                    alert("ko");
                }
            }
        }
    }
}
reveal();