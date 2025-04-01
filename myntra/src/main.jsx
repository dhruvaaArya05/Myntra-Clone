import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App.jsx'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from "react-redux";
import myntraStore from './store/index.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from './Components/Bag.jsx';
import WomenActivewearCollection from './Components/WomenActivewearCollection.jsx';
import BannerContainer from './Components/BannerContainer.jsx';
import WatchesCollection from './Components/WatchesCollection.jsx';
import Wishlist from './Components/Wishlist.jsx';
import MenActivewearCollection from './Components/MenActivewearCollection.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children:
      [
        {
          path: "/", element: <BannerContainer />
        },
        {
          path: "/women-activewear", element: <WomenActivewearCollection />
        },
        {
          path: "/men-activewear", element: <MenActivewearCollection />
        },
        {
          path: "/watches", element: <WatchesCollection />
        },
        {
          path: "/bag", element: <Bag />
        },
        {
          path: "/wishlist", element: <Wishlist />
        }
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
