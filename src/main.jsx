import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import ExploreArtworks from './Components/ExploreArtworks.jsx';
import AddArtwork from './Components/AddArtwork.jsx';
import MyGallery from './Components/MyGallery.jsx';
import MyFavorites from './Components/MyFavorites.jsx';
import ErrorLayout from './ErrorLayout/ErrorLayout.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'explore', Component: ExploreArtworks },
      { path: 'add', Component: AddArtwork },
      { path: 'gallery', Component: MyGallery },
      { path: 'favorites', Component: MyFavorites },
      { path: 'login', Component: Login },
      { path: 'reg', Component: Register },
      
    ],
  },

    { path: '*', Component: ErrorLayout },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
