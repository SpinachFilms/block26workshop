
import './App.css'
import ContactList from './component/ContactList'

function App() {

  const [contacts,] = useState(dummyContacts)
  console.log(contacts);
  return (
    <>
     <ContactList />
    </>
  );
}
  
export default App
