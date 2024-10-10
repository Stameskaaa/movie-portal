import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Layout } from './components/Layout/Layout';
import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/typedReduxHooks/reduxHook';
import { setUser } from './features/authSlice/authSlice';
import { getCurrentUser, foundUserInUserList } from './utils/utils';
import { withAuth } from './HOC/withAuth/withAuth';
import { HomePage } from './pages/HomePage/HomePage';
import { MovieLoader } from './components/MovieLoader/MovieLoader';
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const OpenMoviePage = lazy(() => import('./pages/OpenMoviePage/OpenMoviePage'));
const TrendingPage = lazy(() => import('./pages/TrendingPage/TrendingPage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const RegistationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));

function App() {
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector((state) => state.auth);

  useLayoutEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser && !authorized) {
      const foundUser = foundUserInUserList(currentUser.name);
      foundUser &&
        dispatch(
          setUser({
            authorized: true,
            userData: { ...foundUser, password: currentUser.password },
          }),
        );
    } // Проверяем залогинне ли какой-то юзер и его данные устанавливаем в стор редакса
  }, []);

  const FavoritesPageWithAuth = withAuth(FavoritesPage);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />

        <Route
          path="favorites"
          element={
            <Suspense fallback={<MovieLoader />}>
              <FavoritesPageWithAuth />
            </Suspense>
          }
        />
        <Route
          path="search"
          element={
            <Suspense fallback={<MovieLoader />}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route
          path="openmovie/:id"
          element={
            <Suspense fallback={<MovieLoader />}>
              <OpenMoviePage />
            </Suspense>
          }
        />
        <Route
          path="trendingnow"
          element={
            <Suspense fallback={<MovieLoader />}>
              <TrendingPage />
            </Suspense>
          }
        />
        <Route
          path="auth"
          element={
            <Suspense fallback={<MovieLoader />}>
              <AuthPage />
            </Suspense>
          }
        />
        <Route
          path="registration"
          element={
            <Suspense fallback={<MovieLoader />}>
              <RegistationPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
