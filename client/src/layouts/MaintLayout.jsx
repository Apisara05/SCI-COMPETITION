import {Outlet} from "react-router";

const MaintLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* NAVBAR */}
            <div className="fixed top-0 laft-0 right-0 z-50">NavBar</div>
            <main className="fkex-grow container mx-auto px-4 py-4 mt-16 mb-20 min-h-[calc(100vh-9rem)]">
                <Outlet />
            </main>
            </div>
    );
};
export default MaintLayout;