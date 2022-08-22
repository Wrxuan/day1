import {marquee} from './marquee.js'
import tabs from './tabs.js'
marquee()
tabs()

//1.在main.js里面引入css文件
import './styles/index.css'
//2.在main.js里面引入less文件
import './styles/index.less'

//3.引入图片
import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)