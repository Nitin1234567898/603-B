import Parent from './components/Parent'
import BasicForm from './components/BasicForm'
import { UserContext } from './context/UserContext'
const App = () => {
    const userData={
        name : 'Rajesh',
        age: '23',
        number : '23456899876543',
    }
    return (
      <UserContext.Provider value={userData}>
        <BasicForm />
        <Parent />
      </UserContext.Provider>
    )
}
export default App;