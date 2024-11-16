import UserContext from './components/UserContext';
function App() {

  return (
    <div>
    <UserContext/>
      <UserContext.Provider value ={userData}>
           <UserProfile/>
      </UserContext.Provider>
      </div>
  )
}

export default App
