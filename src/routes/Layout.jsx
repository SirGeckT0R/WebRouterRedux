import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';

export default function Layout() {
  const handleActiveLink = ({ isActive }) => {
    return (
      ' ' + (isActive ? 'text-cyan-600 font-bold' : 'text-zinc-500 underline ')
    );
  };
  return (
    <div className='w-10/12 my-5 mx-auto flex flex-col min-h-screen gap-5 '>
      <ScrollRestoration />
      <header className='flex gap-6 ml-5 text-3xl'>
        <NavLink to='/albums' className={handleActiveLink}>
          Albums
        </NavLink>
        <NavLink to='/users' className={handleActiveLink}>
          Users
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='flex justify-between mt-auto mb-16 ml-5 border-black border-solid border-t-2'>
        <span>Created by: Logvinenko Anton</span>
        <span>BSU: 2022</span>
      </footer>
    </div>
  );
}
