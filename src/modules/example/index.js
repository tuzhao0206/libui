import { Panel } from '../../components';

const Home = () => import(/* webpackChunkName: 'example' */ './home');
const Button = () => import(/* webpackChunkName: 'example' */ './button');
const Page = () => import(/* webpackChunkName: 'example' */ './page');

const routes = [
  {
    path: 'example',
    component: Panel,
    children: [{ path: '', component: Home }, { path: 'button', component: Button }, { path: 'page', component: Page }],
  },
];

export default routes;
