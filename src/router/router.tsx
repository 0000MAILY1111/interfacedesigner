import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import DashboardView from '@/views/DashboardView'
import CreateProyectView from '@/views/CreateProjectView'
import EditProjectView from '@/views/EditProjectView';


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />} >
                </Route>                  
                  <Route path="/" element={<DashboardView />} index />
                  <Route path="/proyects/create" element={<CreateProyectView />}  />
                  <Route path="/proyects/edit/:id" element={<EditProjectView />}  />


            </Routes>
        </BrowserRouter>

    )
}