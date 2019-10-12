'use strict';
// 为了方便观看，所以在js部分写的长了点
const $a = e => document.querySelectorAll(e);
var m = 0,
    a = $a('.b'),
    notice = $a('.notice'),
    fixed = $a('#fixed')[0];
// 给页面加载图片
notice.forEach(e => {
        var imgs = [6, 17, ['19%', '24.8%'],
            ['0 0.5%', '0.1%']
        ];
        for (let i = 1; i < imgs[m]; i++) {
            let img = document.createElement('img');
            img.src = 'images' + (m == 0 ? '/h' : '/') + i + '.jpg';
            img.style.width = imgs[2][m];
            img.style.margin = imgs[3][m];
            e.appendChild(img);
        }
        m++
    })
    // 这是window的滚轮事件
window.onscroll = () => {
    // 当body的页面离顶部的高度超过60像素时执行if里面的内容，如果不是就执行else内容
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        // 改class名叫a的元素颜色变成白色
        a.forEach(e => { e.style.color = 'black' })
            // 给它赋值上一个class
        fixed.className = 'stop';
    } else {
        // 改class名叫a的元素颜色变成黑色
        a.forEach(e => { e.style.color = 'white' })
            // 清除它的class
        fixed.className = '';
    }
}