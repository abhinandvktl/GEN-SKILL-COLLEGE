import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { ContentPage } from "./pages/ContentPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { NotFound } from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="programmes/bvoc" element={<ContentPage pageKey="programmes/bvoc" />} />
          <Route path="programmes/advanced-diploma" element={<ContentPage pageKey="programmes/advanced-diploma" />} />
          <Route path="programmes/diploma" element={<ContentPage pageKey="programmes/diploma" />} />
          <Route path="programmes/certificate" element={<ContentPage pageKey="programmes/certificate" />} />

          <Route path="about/profile" element={<ContentPage pageKey="about/profile" />} />
          <Route path="about/leadership" element={<ContentPage pageKey="about/leadership" />} />
          <Route path="about/management-team" element={<ContentPage pageKey="about/management-team" />} />

          <Route path="contact/our-office" element={<ContentPage pageKey="contact/our-office" />} />
          <Route path="contact/franchisee" element={<ContentPage pageKey="contact/franchisee" />} />
          <Route path="contact/support-desk" element={<ContentPage pageKey="contact/support-desk" />} />
          <Route path="contact/placement-desk" element={<ContentPage pageKey="contact/placement-desk" />} />

          <Route path="students/feedback" element={<ContentPage pageKey="students/feedback" />} />
          <Route path="students/testimonials" element={<ContentPage pageKey="students/testimonials" />} />
          <Route path="students/results-online" element={<ContentPage pageKey="students/results-online" />} />
          <Route path="students/verify-registration" element={<ContentPage pageKey="students/verify-registration" />} />

          <Route path="blog" element={<ContentPage pageKey="blog" />} />
          <Route path="training-certifications" element={<ContentPage pageKey="training-certifications" />} />

          <Route path="placement/our-placements" element={<ContentPage pageKey="placement/our-placements" />} />
          <Route path="placement/view-vacancies" element={<ContentPage pageKey="placement/view-vacancies" />} />
          <Route path="placement/post-vacancy" element={<ContentPage pageKey="placement/post-vacancy" />} />
          <Route path="placement/gen-job-fair" element={<ContentPage pageKey="placement/gen-job-fair" />} />

          <Route path="gallery/photos" element={<ContentPage pageKey="gallery/photos" />} />
          <Route path="gallery/videos" element={<ContentPage pageKey="gallery/videos" />} />

          <Route path="logins/faculty" element={<LoginPage initialType="faculty" />} />
          <Route path="logins/student" element={<LoginPage initialType="student" />} />
          <Route path="logins/moodle" element={<LoginPage initialType="moodle" />} />

          <Route path="pay-now" element={<ContentPage pageKey="pay-now" />} />
          <Route path="college-magazine" element={<ContentPage pageKey="college-magazine" />} />

          <Route path="legal/privacy" element={<ContentPage pageKey="legal/privacy" />} />
          <Route path="legal/refund" element={<ContentPage pageKey="legal/refund" />} />
          <Route path="legal/terms" element={<ContentPage pageKey="legal/terms" />} />

          <Route path="pay-now" element={<ContentPage pageKey="contact" />} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
