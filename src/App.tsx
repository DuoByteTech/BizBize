import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

// Ana site
import { HomePage } from "@/pages/HomePage";
import { HowItWorksPage } from "@/pages/HowItWorksPage";
import { FeaturesPage } from "@/pages/FeaturesPage";

// Giriş ve kayıt
import { RegisterPage } from "@/pages/RegisterPage";
import { LoginPage } from "@/pages/LoginPage";

// Kullanıcı paneli
import { DashboardHomePage } from "@/pages/DashboardHomePage";
import { GamesPage } from "@/pages/GamesPage";
import { CoupleSetupPage } from "@/pages/CoupleSetupPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { CoupleProfilePage } from "@/pages/CoupleProfilePage";
import { StatisticsPage } from "@/pages/StatisticsPage";
import { SettingsPage } from "@/pages/SettingsPage";

// Oyun
import { GameQuestionPage } from "@/pages/GameQuestionPage";
import { GameResultPage } from "@/pages/GameResultPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* ANA SİTE */}

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/nasil-calisir"
                        element={<HowItWorksPage />}
                    />

                    <Route
                        path="/ozellikler"
                        element={<FeaturesPage />}
                    />

                </Route>

                {/* GİRİŞ VE KAYIT */}

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

                {/* KULLANICI PANELİ */}

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

                    <Route
                        path="/profil/ciftimiz"
                        element={<CoupleProfilePage />}
                    />

                    <Route
                        path="/istatistikler"
                        element={<StatisticsPage />}
                    />

                    <Route
                        path="/profil/ayarlar"
                        element={<SettingsPage />}
                    />

                    {/* OYUN SAYFALARI */}

                    <Route
                        path="/oyun/:gameId"
                        element={<GameQuestionPage />}
                    />

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