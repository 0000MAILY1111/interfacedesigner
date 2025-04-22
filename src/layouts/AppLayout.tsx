
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            <header className="bg-gray-950 text-white p-4 flex justify-between">
                <div>My Workspace</div>
                <div className="flex gap-2">
                    <Link
                        to="/invite"
                        className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
                    >
                        Invite Member
                    </Link>

                    <Link
                        to="/projects/create"
                        className="bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
                    >
                        New Project
                    </Link>
                </div>
            </header>

            <div className="flex flex-1">
                
                <aside className="w-60 bg-gray-950 text-white p-4">
                    <div>Account</div>
                    <div>Settings</div>
                    <div>Updates</div>
                    <div>Community</div>
                    <div className="mt-4">
                        <h3>Projects</h3>
                        <div>All</div>
                        <div>Archive</div>
                        <div>New Folder...</div>
                    </div>
                </aside>

                <main className="flex-1 bg-gray-100 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}