import { Routes, Route , useLocation, Navigate, Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import Dashboard from './pages/dashboard'
import TaskDetails from './pages/TaskDetail';
import Tasks from './pages/Tasks';
import Trash from './pages/Trash';
import Users from './pages/Users'
import Login from './pages/Login'


function Layout() {
  const user = ''; // Replace with actual user state or authentication check

  const location = useLocation(); // Get the current location

  return user ? ( // If user exists
    <div className="w-full h-screen flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar />*/}
      </div>
      {/* <MobileSidebar />*/}
      <div className='flex-1 overflow-y-auto'>
        {/*<Navbar />*/}
        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}


function App() {

  return (
    <main className='w-full m-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout />}>  {/* anypage that falls into this route we check from the layout */}
          <Route path='/' element={<Navigate to="/dashboard" />}/> {/* when every we go to / we want to redirct it to dashoard  */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/task' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status ' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDetails />} />
          </Route>
          <Route path='/log-in' element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  )
}

export default App