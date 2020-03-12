import React, { useState, useEffect } from 'react'
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core'
import firebase from './firebase'


export default function App(props) {
  
  
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      
    }

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
    
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

  return (
    firebaseInitialized !== false ? (
      
      <div className="wrapper">
        <div style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}>
          <Header style={styles}/>
          <Route exact path="/" component={()=>props.children?props.children : <Routes />} style={styles}/>
          <Routes />
          <Footer style={styles}/>
        </div>
      </div>
    ) : <div id="loader"><CircularProgress /></div>
  );
}




