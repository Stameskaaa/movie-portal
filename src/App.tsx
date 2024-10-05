import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Layout } from './components/Layout/Layout';
import { RegistationPage } from './pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks';
import { setUser } from './features/authSlice/authSlice';
import { getCurrentUser, foundUser } from './utils/utils';
import { withAuth } from './HOC/HOC';
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      const foundedUser = foundUser(currentUser);

      foundedUser && dispatch(setUser({ authorized: true, userData: foundedUser }));
    } // Проверяем залогинне ли какой-то юзер и его данные устанавливаем в стор редакса
  }, []);

  const FavoritesPageWithAuth = withAuth(FavoritesPage);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="search/:genre" element={<SearchPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegistationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

// <Route path="/" element={<Layout />}>
// <Route path="" element={<MainPage />} />
// <Route path="/favorites" element={<FavoritesPageWithAuth />} />
// <Route path="/moviedetails/:id" element={<MovieDetailsPage />} />
// </Route>
// <Route path="/authorization" element={<AuthPage />} />
// <Route path="/registration" element={<RegistationPage />} />
// <Route path="*" element={<NotFoundPage />} />

export default App;
