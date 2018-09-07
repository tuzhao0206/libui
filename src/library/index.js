import './less/index.less';
import Button from './components/button';
import ButtonGroup from './components/button/group';
import Space from './components/space';
import Page from './components/page';
import Masklayer from './components/masklayer';
import Modal from './components/modal';
import Message from './components/message';
import $message from './components/message/helper';

const library = { Button, ButtonGroup, Space, Page, Masklayer, Modal, Message };

// AbCdEf => ab-cd-ef
const kebabCase = str => str.replace(/([A-Z])/g, s => '-' + s.toLowerCase()).replace(/^-/, '');

function install(Vue, options) {
  // 注册组件
  Object.keys(library).forEach(name => {
    Vue.component(`bt-${kebabCase(name)}`, library[name]);
  });

  // 注册方法
  Vue.prototype.$message = $message;
}

export default { install };
