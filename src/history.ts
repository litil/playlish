import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  // Update the user's current page
  ReactGA.set({ page: location.pathname });
  // Record a pageview for the given page
  ReactGA.pageview(location.pathname);
});

export default createBrowserHistory();
