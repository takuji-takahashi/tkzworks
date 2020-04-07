// window.addEventListener('load',()=>{  // index.html読込時

//     const elems = document.querySelectorAll('[hovercolor]');  // hovercolorという属性を持つ要素すべて

//     elems.forEach((e)=>{  // 上記で指定した要素それぞれ(=e)について

//         e.addEventListener('mouseover',()=>{  // ホバー時
//             e.style.color = e.getAttribute('hovercolor');
//             // eのテキスト色 ＝ eのhovercolorの属性値
//         });

//         e.addEventListener('mouseout',()=>{  // ホバー解除時
//             e.style.color = "";  // 初期値に戻す（CSSで指定したもの）
//         });

//     });
// });

// var c = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// var x = 150;
// var y = 150;
// var speed =1;
// ctx.fillStyle ="pink";

// draw();

// function draw(){
//     requestAnimationFrame(draw);

//     ctx.clearRect(0,0, c.width ,c.height);
//     ctx.fillRect(x,y,200,100);
// x+=speed;
// }


 