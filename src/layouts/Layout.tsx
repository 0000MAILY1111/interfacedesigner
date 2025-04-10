
import { Outlet, Link, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

function SidebarLink({ to, icon, text, isActive }: SidebarLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
        isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
     
      <header className="bg-black text-white px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
              M
            </div>
            <span className="font-medium">My Workspace</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>
        </div>
        
        <div className="flex-1 max-w-2xl mx-10">
          <div className="bg-gray-900 rounded-md flex items-center px-3 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search"
              className="bg-transparent border-none outline-none text-gray-300 w-full" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>1</span>
          </div>
          
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
      
        <aside className="w-60 bg-black border-r border-gray-800 flex flex-col">
          <nav className="flex flex-col py-4">
            <SidebarLink 
              to="/account" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              } 
              text="Account" 
              isActive={location.pathname === '/account'}
            />
            
            <SidebarLink 
              to="/settings" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              } 
              text="Settings" 
              isActive={location.pathname === '/settings'}
            />
            
            <SidebarLink 
              to="/updates" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              } 
              text="Updates" 
              isActive={location.pathname === '/updates'}
            />
            
            <SidebarLink 
              to="/community" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              } 
              text="Community" 
              isActive={location.pathname === '/community'}
            />
          </nav>
          
          <div className="mt-8 px-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Projects</h3>
            
            <nav className="space-y-1">
              <SidebarLink 
                to="/projects" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                } 
                text="All" 
                isActive={location.pathname === '/projects'}
              />
              
              <SidebarLink 
                to="/projects/archive" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="5" rx="2"/>
                    <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
                    <path d="M10 13h4"/>
                  </svg>
                } 
                text="Archive" 
                isActive={location.pathname === '/projects/archive'}
              />
              
              <SidebarLink 
                to="/projects/new-folder" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                } 
                text="New Folder..." 
                isActive={location.pathname === '/projects/new-folder'}
              />
            </nav>
          </div>
        </aside>
        
      
        <main className="flex-1 bg-gray-900 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}