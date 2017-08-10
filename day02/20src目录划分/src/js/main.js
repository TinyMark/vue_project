import { min, max } from './my_module.js'
import suibian from './my_module2.js'
import '../style/index.less'
import '../style/index2.scss'
import footerTpl from '../tpl/footer.tpl'

console.log(min([32, 12, 3, 6]));
console.log(max([32, 12, 3, 6]));

suibian('真随便啊');

document.body.innerHTML = footerTpl;