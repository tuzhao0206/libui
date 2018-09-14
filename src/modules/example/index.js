import { Panel } from '../../components';

const Home = () => import(/* webpackChunkName: 'example' */ './home');
const Button = () => import(/* webpackChunkName: 'example' */ './button');
const Page = () => import(/* webpackChunkName: 'example' */ './page');
const Modal = () => import(/* webpackChunkName: 'example' */ './modal');
const Message = () => import(/* webpackChunkName: 'example' */ './message');
const Raido = () => import(/* webpackChunkName: 'example' */ './radio');
const Checkbox = () => import(/* webpackChunkName: 'example' */ './checkbox');
const Stepper = () => import('./stepper');

const routes = [
  {
    path: 'example',
    alias: '/',
    component: Panel,
    children: [
      { path: '', component: Home },
      { path: 'button', component: Button },
      { path: 'page', component: Page },
      { path: 'modal', component: Modal },
      { path: 'message', component: Message },
      { path: 'radio', component: Raido },
      { path: 'checkbox', component: Checkbox },
      { path: 'stepper', component: Stepper },
    ],
  },
];

export default routes;
