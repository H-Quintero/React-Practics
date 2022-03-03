import './index.css'
import contacts from "./data/contacts";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      {contacts.map((contact) => {
        return (
          <Contact 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgSrc}
            phone={contact.phone}
            email={contact.email}
          />
        )
      }
      )}
    </div>
  );
}

export default App;
