import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import Data from '../data'

const Child = ({ match }) => (
  <div className="page-content">
    <h3>Only Yahoo/about are allowed: {match.params.id}</h3>
  </div>
);

const LoadableHome = Loadable.Map({
  loader: {
    Home: () =>
      import('../views/Home'),
  },
  loading: Loading,
  render(loaded, props) {
    let Home = loaded.Home.default;
    return <Home {...props} data={Data}/>;
  }
});

const LoadableAbout = Loadable({
  loader: () =>
    import('../views/About'),
  loading: Loading
})

const LoadableTopics = Loadable({
  loader: () =>
    import('../views/Topics'),
  loading: Loading
})

const LoadableSidebar = Loadable({
  loader: () =>
    import('../views/Sidebar'),
  loading: Loading
})

const LoadableModalGallery = Loadable({
  loader: () =>
    import('../views/ModalGallery'),
  loading: Loading
})

const LoadableECMAScript = Loadable({
  loader: () =>
    import('../views/ECMAScript'),
  loading: Loading
})

const LoadableShop = Loadable({
  loader: () =>
    import('../views/Shop'),
  loading: Loading
})

const routeConfig = [{
  url: 'home',
  label: 'Home',
  isPrivate: true,
  strict: true,
  component: LoadableHome
}, {
  url: 'about',
  label: 'About',
  isPrivate: true,
  component: LoadableAbout
}, {
  url: 'login',
  label: 'Login',
  isOnlyLink: true,
  component: Loadable({
    loader: () =>
      import('../components/Login'),
    loading: Loading
  })
}, {
  url: 'topics',
  label: 'Topics',
  component: LoadableTopics
}, {
  url: 'yahoo',
  link: ':id(Yahoo|about)',
  label: 'Yahoo',
  component: Child
}, {
  url: 'sidebar',
  label: 'Sidebar',
  isPrivate: true,
  component: LoadableSidebar
}, {
  url: 'modal-gallery',
  label: 'ModalGallery',
  component: LoadableModalGallery
}, {
  url: 'script',
  label: 'ECMAScript 6',
  isPrivate: true,
  component: LoadableECMAScript
}, {
  url: 'shop',
  label: 'Shop',
  isPrivate: true,
  component: LoadableShop
}]

export default routeConfig