import ReactGA from 'react-ga'
import {config} from 'config'

// Turning off analytics for localhost
if (!window.location.host.includes('localhost')) {
  ReactGA.initialize(config.googleAnalyticsId);
}

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
