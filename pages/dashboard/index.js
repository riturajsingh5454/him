import DashboardIndex from "../../components/Dashboard";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <Header page={1} />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className=" max-w-7xl py-6 sm:px-6 lg:px-8">
           

            <DashboardIndex/>
         
          </div>
        </main>
      </div>
    </>
  );
}
