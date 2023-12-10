import firebase from "firebase/compat/app";
import "./App.css";
import { AuthGoogle } from "./components/AuthGoogle";
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebase";
// import { PartnersListPage } from './pages/PartnersListPage'

function App() {
  // const [user, setUser] = useState({ username: "" });

  const auth = getAuth(firebaseApp);

  return (
    <div style={{ background: "white" }}>
      {/* <PartnersListPage /> */}
      {/* <LoginPage /> */}
      <AuthGoogle auth={firebase.auth()} />
    </div>
  );
}

export default App;
