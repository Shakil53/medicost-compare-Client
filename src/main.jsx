import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from './routes/Router';
import AuthProvider from './context/AuthProvider/AuthProvider';
import { Toaster } from 'sonner';



// tanstackQuery
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Toaster richColors />
        <RouterProvider router={router} />
      
    </AuthProvider>
      </QueryClientProvider>
     
  </React.StrictMode>,
)

