import { type RouteObject } from 'react-router-dom';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import SkillsPage from './pages/skills';
import ContactPage from './pages/contact';
//  Use the same local not-found page in every environment.
import ProdNotFoundPage from './pages/_404';
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/skills',
    element: <SkillsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <ProdNotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/about' | '/projects' | '/skills' | '/contact';

export type Params = Record<string, string | undefined>;
