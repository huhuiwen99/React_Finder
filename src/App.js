import {BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Alert from './components/layout/Alert'
import NotFound from './pages/NotFound'
import User from './pages/User'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<> <Alert /><Home /></>}/>
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AlertProvider>
  </GithubProvider>

    // <GithubProvider>
    //     <Router>
    //     <div className="flex flex-col justify-between h-screen">
    //       <Navbar />
    //       <main className='container mx-auto px-3 pb-12'>
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //           <Route path='/about' element={<About />} />
    //           <Route path='/notfound' element={<NotFound />} />
    //           <Route path='/*' element={<NotFound />} />
    //         </Routes>
    //       </main>
    //       <Footer />
    //     </div>
    //     {/* <div className="bg-purple-500">
    //     <h1 className='text-xl'>This is Tailwind CSS!</h1>
    //     <button class='btn btn-primary'>Click</button>
    //     </div> */}
    //   </Router>
    // </GithubProvider>
  );
}

export default App;
