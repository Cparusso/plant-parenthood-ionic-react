import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { apps, flash, people } from 'ionicons/icons'
import Feed from './pages/Feed'
import Profile from './pages/Profile.js'
import PlantsContainer from './pages/PlantsContainer.js'
// import Plants from './pages/Plants.js'
import Details from './pages/Details.js'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/users/5`)
      .then(resp => resp.json())
      .then(setUser)
      .then(() => console.log("THIS THE USER", user))
  }, [])
  console.log(user)
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/feed" component={Feed} exact={true} />
            <Route path="/profile" exact={true} render={(props) => {
              return <Profile {...props} user={user} />
            }}/>
            <Route path="/profile/details" component={Details} />
            <Route path="/browse" component={PlantsContainer} />
            <Route path="/" render={() => <Redirect to="/feed" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="feed" href="/feed">
              <IonIcon icon={flash} />
              <IonLabel>Your Feed</IonLabel>
            </IonTabButton>
            <IonTabButton tab="browse" href="/browse">
              <IonIcon icon={apps} />
              <IonLabel>Browse Plants</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={people} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App