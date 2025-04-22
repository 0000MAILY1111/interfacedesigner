import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


  return (
    <header className="bg-black text-white px-4 py-3 flex items-center justify-between border-b border-gray-800">
    <div className="flex items-center gap-3 relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <div className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
          M
        </div>
        <span className="font-medium">My Workspace</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg z-10">
          <div className="py-1 px-2 text-sm">
            <h3 className="text-gray-400 px-3 py-2">Workspaces</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-700 rounded">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>My Workspace</span>
              </div>
              <span className="text-xs bg-gray-600 px-2 py-0.5 rounded">FREE</span>
            </div>
            
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded mt-1">
              Add Workspace
            </button>
            
            <div className="border-t border-gray-700 my-1"></div>
            
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded">
              Workspace Templates
            </button>
            
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded">
              Day Mode
            </button>
            
            <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded">
              Sign Out
            </button>
          </div>
        </div>
      )}
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
        to="/proyects/create"
        className="bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
      >
        New Project
      </Link>
    </div>
  </header>
  );
}