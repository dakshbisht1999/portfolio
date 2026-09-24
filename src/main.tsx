import { Component, StrictMode, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './styles/globals.css';

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('An error occurred while rendering the app:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main role="alert">
          <h1>Something went wrong</h1>
          <p>Please refresh the page and try again.</p>
        </main>
      );
    }

    return this.props.children;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: { retry: 0 },
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const providers = (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

const tree = (
  <StrictMode>
    <AppErrorBoundary>{providers}</AppErrorBoundary>
  </StrictMode>
);

createRoot(rootElement).render(tree);
