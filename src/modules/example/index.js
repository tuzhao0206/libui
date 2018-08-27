import { Panel } from '../../components';

const Home = () => import(/* webpackChunkName: 'example' */ './home');
const Button = () => import(/* webpackChunkName: 'example' */ './button');

const routes = [
  {
    path: 'example',
    component: Panel,
    children: [{ path: '', component: Home }, { path: 'button', component: Button }],
  },
];

export default routes;
