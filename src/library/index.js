import './less/index.less';
import Button from './components/button';
import ButtonGroup from './components/button/group';
import Space from './components/space';
import Page from './components/page';
import Masklayer from './components/masklayer';
import Modal from './components/modal';
import Message, { $message } from './components/message/index.js';

const library = { Button, ButtonGroup, Space, Page, Masklayer, Modal, Message };

// AbCdEf => ab-cd-ef
const kebabCase = str => str.replace(/([A-Z])/g, s => '-' + s.toLowerCase()).replace(/^-/, '');

function install(Vue, options) {
  // 自动注册
  Object.keys(library).forEach(name => {
    Vue.component(`bt-${kebabCase(name)}`, library[name]);
  });

  Vue.prototype.$message = $message;
}

export default { install };
