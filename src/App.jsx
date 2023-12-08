import {RouterProvider,} from "react-router-dom";
import {router} from './layouts/routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
      <RouterProvider router={router} />

  )
}

export default App
