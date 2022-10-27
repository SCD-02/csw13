let a=prompt("Enter your Name");
console.log(a.length);
//document.getElementsByTagName("li");
document.getElementsByTagName("li")[0].style.color="red";
console.log(document.getElementsByTagName("h1").length);
document.getElementsByTagName("title")[0].innerHTML="Post";
document.getElementsByTagName("title")[0].textContent="Post";
document.getElementsByTagName("h3")[0].innerHTML="<em>Cuisines</em> I like";
document.querySelector('h3').style.color="brown";
document.querySelector("h1").style.fontSize="3rem";
document.querySelectorAll('li')[2].classList.add('invisible');
document.querySelector('img').attributes;
document.querySelector('img').getAttribute('src');
document.querySelector('img').setAttribute('src','https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png')