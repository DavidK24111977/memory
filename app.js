var numbers=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var container=document.getElementById("container");
var cards;
var inner;
var r;
for(var i=0; i<16; i++){

    r=Math.floor(Math.random()*numbers.length);

    cards=document.createElement("div");
    inner=document.createElement("div");
    cards.className="cards";
    inner.className="inner";
    inner.className+=" hidden";
    container.appendChild(cards);
    cards.appendChild(inner);
    inner.innerHTML= numbers[r];

    numbers.splice(r,1);


}
var count=1;
var check;
var previous;
var checkInner=document.getElementsByClassName("cards");
//console.log(checkInner);
function reveal(){
    for(var i = 0; i<checkInner.length; i++){
        checkInner[i].onclick=function(){
            check=this.firstChild.innerHTML;
            console.log(check);
            if(count==1){
                //console.log(this.childNodes.classList);
                this.firstChild.classList.toggle("hidden");
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