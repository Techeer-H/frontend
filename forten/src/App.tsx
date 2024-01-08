import { RouterProvider } from 'react-router-dom';
import routers from './router';

function App() {
  return (
    <>
      <RouterProvider router={routers} fallbackElement={<div>로딩중</div>} />
    </>
  );
}

export default App;
