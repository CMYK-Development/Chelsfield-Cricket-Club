import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import Update_Article from '../pages/NewsArticle/Update_Article';
import SliderAddImages from '../pages/SliderImage/SliderAddImages';
import AddNewArticle from '../pages/NewsArticle/AddNewArticle';
import UserProfile from '../pages/profile/UserProfile';
import Team_management from '../pages/TeamManagment/Team_management';
import Members from '../pages/Members/Members';
import UpdateAdmin from '../pages/Authentication/UpdateAdmin';
import Gallery from '../pages/gallery';

const Index = lazy(() => import('../pages/Index'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const Login = lazy(() => import('../pages/Authentication/Login'));
const AddAdmin = lazy(() => import('../pages/Authentication/AddAdmin'));

const Error = lazy(() => import('../components/Error'));

const routes = [
    // Protected dashboard routes
    {
        path: '/index',
        element: (
            <ProtectedRoute>
                <Index />
            </ProtectedRoute>
        ),
    },
    {
        path: '/add_SliderImages',
        element: (
            <ProtectedRoute>
                <SliderAddImages />
            </ProtectedRoute>
        ),
    },
    {
        path: '/add-article',
        element: (
            <ProtectedRoute>
                <AddNewArticle />
            </ProtectedRoute>
        ),
    },
    {
        path: '/user-profile',
        element: (
            <ProtectedRoute>
                <UserProfile />
            </ProtectedRoute>
        ),
    },
    // {
    //     path: '/teamManagement',
    //     element: (
    //         <ProtectedRoute>
    //             <Team_management />
    //         </ProtectedRoute>
    //     ),
    // },
     {
        path: '/gallery',
        element: (
            <ProtectedRoute>
                <Gallery />
            </ProtectedRoute>
        ),
    },
    {
        path: '/members',
        element: (
            <ProtectedRoute>
                <Members />
            </ProtectedRoute>
        ),
    },
    {
        path: '/update-article',
        element: (
            <ProtectedRoute>
                <Update_Article />
            </ProtectedRoute>
        ),
    },

    // Public routes
    {
        path: '/error404',
        element: <ERROR404 />,
        layout: 'blank',
    },
    {
        path: '/',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/add-admin',
        element: <AddAdmin />,
        layout: 'blank',
    },
    {
        path: '/edit-admin/:id',
        element: <UpdateAdmin />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
