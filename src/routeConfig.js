import React from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading'

const Child = ({ match }) => (
  <div className="page-content">
    <h3>Only Yahoo/profile are allowed: {match.params.id}</h3>
  </div>
);

const LoadableHome = Loadable.Map({
  loader: {
    Home: () =>
      import('./containers/Home/Home'),
  },
  loading: Loading,
  render(loaded, props) {
    let Home = loaded.Home.default;
    return <Home {...props}/>;
  }
});

const LoadableProfile = Loadable({
  loader: () =>
    import('./containers/Profile/Profile'),
  loading: Loading
})

const LoadableRedux = Loadable({
  loader: () =>
    import('./containers/Redux'),
  loading: Loading
})

const LoadableTopics = Loadable({
  loader: () =>
    import('./containers/Topics'),
  loading: Loading
})

const LoadableSidebar = Loadable({
  loader: () =>
    import('./containers/Sidebar'),
  loading: Loading
})

const LoadableModalGallery = Loadable({
  loader: () =>
    import('./containers/ModalGallery'),
  loading: Loading
})

const LoadableECMAScript = Loadable({
  loader: () =>
    import('./containers/ECMAScript'),
  loading: Loading
})

const LoadableShop = Loadable({
  loader: () =>
    import('./containers/Shop'),
  loading: Loading
})

const routeConfig = [{
  url: 'home',
  label: 'Home',
  isPrivate: true,
  strict: true,
  component: LoadableHome
}, {
  url: 'profile',
  label: 'Profile',
  isPrivate: true,
  component: LoadableProfile
}, {
  url: 'login',
  label: 'Login',
  isOnlyLink: true,
  component: Loadable({
    loader: () =>
      import('./components/Login'),
    loading: Loading
  })
}, {
  url: 'topics',
  label: 'Topics',
  component: LoadableTopics
}, {
  url: 'yahoo',
  link: ':id(Yahoo|profile)',
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
}, {
  url: 'redux',
  label: 'Redux',
  isPrivate: true,
  component: LoadableRedux
}]

export default routeConfig