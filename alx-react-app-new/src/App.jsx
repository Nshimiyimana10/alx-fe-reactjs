import { useState } from 'react'
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Counter/>
    <Header/>
    <UserProfile/>
    <MainContent/>
    
   </div> 
  )
}

export default App
