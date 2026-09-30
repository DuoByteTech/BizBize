import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

import { HomePage } from "@/pages/HomePage";
import { HowItWorksPage } from "@/pages/HowItWorksPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { LoginPage } from "@/pages/LoginPage";

import { DashboardHomePage } from "@/pages/DashboardHomePage";
import { GamesPage } from "@/pages/GamesPage";
import { CoupleSetupPage } from "@/pages/CoupleSetupPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { GameQuestionPage } from "@/pages/GameQuestionPage";
import { GameResultPage } from "@/pages/GameResultPage";

// İstatistikler sayfası
import { StatisticsPage } from "@/pages/StatisticsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ana site */}
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/nasil-calisir"
                        element={<HowItWorksPage />}
                    />
                </Route>

                {/* Giriş / Kayıt */}
                <Route element={<AuthLayout />}>
                    <Route
                        path="/kayit"
                        element={<RegisterPage />}
                    />

                    <Route
                        path="/giris"
                        element={<LoginPage />}
                    />
                </Route>

                {/* Kullanıcı paneli */}
                <Route element={<DashboardLayout />}>
                    <Route
                        path="/panel"
                        element={<DashboardHomePage />}
                    />

                    <Route
                        path="/oyunlar"
                        element={<GamesPage />}
                    />

                    <Route
                        path="/partner"
                        element={<CoupleSetupPage />}
                    />

                    <Route
                        path="/profil"
                        element={<ProfilePage />}
                    />

                    {/* İstatistikler */}
                    <Route
                        path="/istatistikler"
                        element={<StatisticsPage />}
                    />

                    {/* Oyun sayfası */}
                    <Route
                        path="/oyun/:gameId"
                        element={<GameQuestionPage />}
                    />

                    {/* Oyun sonuçları */}
                    <Route
                        path="/oyun/:gameId/sonuc"
                        element={<GameResultPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;