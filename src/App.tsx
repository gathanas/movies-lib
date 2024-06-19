import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundScreen from "./components/screens/NotFoundScreen";
import Header from "./components/layout/Header";
import NewMovieScreen from "./components/screens/NewMovieScreen";
import MoviesList from "./components/screens/MoviesListScreen";
import SettingsProvider from "./components/wrappers/SettingsProvider";
import MovieDetailsScreen from "./components/screens/MovieDetailsScreen";
import BreadcrumpsNavigation from "./components/layout/BreadcrumpsNavigation";
import EditMovieScreen from "./components/screens/EditMovieScreen";

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Header />
        <BreadcrumpsNavigation/>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/create" element={<NewMovieScreen />} />
          <Route path="/movies/edit" element={<EditMovieScreen />} />
          <Route path="/movies/:id" element={<MovieDetailsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;
