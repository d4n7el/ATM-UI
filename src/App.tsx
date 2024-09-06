import { BrowserRouter } from 'react-router-dom';

import { Nav } from '@components/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from '@routes/routes';

import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav></Nav>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
