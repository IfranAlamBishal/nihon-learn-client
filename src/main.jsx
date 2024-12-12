import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Router';
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
