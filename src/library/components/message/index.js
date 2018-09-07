import Vue from 'vue';
import Message from './message.vue';
import IMessageComponent from './imessage.vue';

const IMessage = Vue.extend(IMessageComponent);

function $message(options = {}) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  const imessage = new IMessage({ data: options }).$mount();
  document.body.appendChild(imessage.$el);
  imessage.show = true;
  return imessage;
}

export default Message;

export { $message };
