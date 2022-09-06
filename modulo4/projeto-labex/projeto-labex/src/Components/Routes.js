import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TripsListPage } from './Pages/TripsListPage';
import { ApplicationFormPage } from './Pages/ApplicationFormPage';
import { LoginPage } from './Pages/LoginPage';
import { AdminHomePage } from './Pages/AdminHomePage';
import { CreateTripPage } from './Pages/CreateTripPage';
import { TripDetailsPage } from './Pages/TripDetailsPage';

export function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/trips/list' element={<TripsListPage/>}/>
                <Route path='/trips/application' element={<ApplicationFormPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
                <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
                <Route path='/admin/trips/:id' element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}