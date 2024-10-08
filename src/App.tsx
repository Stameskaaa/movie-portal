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
import { getCurrentUser, foundUserInUserList } from './utils/utils';
import { withAuth } from './HOC/withAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { OpenMoviePage } from './pages/OpenMoviePage/OpenMoviePage';
import { TrendingPage } from './pages/TrendingPage/TrendingPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      const foundedUser = foundUserInUserList(currentUser.name);
      foundedUser &&
        dispatch(
          setUser({
            authorized: true,
            userData: { ...foundedUser, password: currentUser.password },
          }),
        );
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
          <Route path="favorites" element={<FavoritesPageWithAuth />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="registration" element={<RegistationPage />} />
          <Route path="openmovie/:id" element={<OpenMoviePage />} />
          <Route path="trendingnow" element={<TrendingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
