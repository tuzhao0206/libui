import { Panel } from '../../components';

const Home = () => import(/* webpackChunkName: 'example' */ './home');
const Button = () => import(/* webpackChunkName: 'example' */ './button');
const Page = () => import(/* webpackChunkName: 'example' */ './page');
const Modal = () => import(/* webpackChunkName: 'example' */ './modal');
const Message = () => import(/* webpackChunkName: 'example' */ './message');
const Raido = () => import(/* webpackChunkName: 'example' */ './radio');
const Checkbox = () => import(/* webpackChunkName: 'example' */ './checkbox');
const Switch = () => import(/* webpackChunkName: 'example' */ './switch');
const Marquee = () => import(/* webpackChunkName: 'example' */ './marquee');
const Swipe = () => import(/* webpackChunkName: 'example' */ './swipe');
const Stepper = () => import('./stepper');
const ImgLazyload = () => import('./imgLazyload');

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
      { path: 'switch', component: Switch },
      { path: 'stepper', component: Stepper },
      { path: 'imgLazyload', component: ImgLazyload },
      { path: 'marquee', component: Marquee },
      { path: 'swipe', component: Swipe },
    ],
  },
];

export default routes;
