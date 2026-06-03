(function(){
var art=document.querySelectorAll("#applications article")[3];
var photo=art.querySelector("img[src*=lanyard]");
var ov=art.querySelector("div[style*='49']");
var inner=ov.firstElementChild;
var cs=getComputedStyle(inner);
function f(e){var r=e.getBoundingClientRect();return Math.round(r.top)+"-"+Math.round(r.bottom);}
return "photo "+f(photo)+" | ov "+f(ov)+" | bg "+cs.backgroundColor+" | header "+f(inner.children[0])+" | body "+f(inner.children[1])+" | bar "+f(inner.children[2]);
})();
