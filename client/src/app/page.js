import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import UploadSection from "@/components/sections/UploadSection";

export default function Home() {
  return (
    <MainLayout>
      <Header />

      <div className="mx-auto flex max-w-7xl gap-6 p-6">

        <Sidebar />

        <main className="flex-1 rounded-2xl bg-white p-10 shadow-sm">
          <UploadSection />
        </main>

      </div>
    </MainLayout>
  );
}