import { Suspense } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';
import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker';
import RootLayout from './layouts/RootLayout';
import Spinner from './components/Spinner';
import { routes } from './routes';

function SpinnerFallback() {
  return (
    <div className="flex h-screen items-center justify-center py-8">
      <Spinner />
    </div>
  );
}

const routeTree: RouteObject[] = [
  {
    element: (
      <>
        <GoogleAnalyticsTracker />
        <Suspense fallback={<SpinnerFallback />}>
          <RootLayout>
            <Outlet />
          </RootLayout>
        </Suspense>
      </>
    ),
    children: routes,
  },
];

const router = createBrowserRouter(routeTree);

export default function App() {
  return <RouterProvider router={router} />;
}
