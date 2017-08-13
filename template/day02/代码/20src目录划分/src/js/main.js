// 导入my_module模块中的min与max方法
import { min, max } from './my_module.js';
// 导入my_module2模块中的default方法
import suibian from './my_module2.js';

// 如果引入的是一个文件，不需要导出里面的内容，就这样写
import '../style/index.less';
import '../style/index2.scss';

// 加载一段页面底部模版
import footerTpl from '../tpl/footer.tpl';

console.log(min([32,12,3,6]));
console.log(max([32,12,3,6]));

suibian('真的随便吗');

document.body.innerHTML = footerTpl;
console.log(footerTpl);

