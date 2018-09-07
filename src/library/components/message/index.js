import Vue from 'vue';
import Message from './message.vue';
import IMessageComponent from './imessage.vue';

const IMessage = Vue.extend(IMessageComponent);

Vue.prototype.$message = function(options = {}) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  const imessage = new IMessage({ data: options }).$mount();
  document.body.appendChild(imessage.$el);
  imessage.show = true;
  return imessage;
};

export default Message;
