import { 
  IonItem,
  IonLabel,
  IonContent,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonListHeader,
  IonIcon,
  IonCardSubtitle
} from '@ionic/react'

import { water, sunny, cloud, paw, leaf } from 'ionicons/icons'

import React, { useState, useEffect } from 'react'

const PlantDetails = ({ match }) => {
  const [plant, setPlant] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/plants/${match.params.id}`)
    .then(resp => resp.json())
    .then(setPlant)
  }, [match.params.id]);
    
  console.log("plant", plant)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" />
          </IonButtons>
          <IonTitle>
            <IonLabel>
              <p>Back to All Plants</p>
            </IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src={plant.picture} alt="plant" />
          <IonCardHeader>
            <IonCardSubtitle>{plant.binomial_name}</IonCardSubtitle>
            <IonCardTitle>{plant.common_name}</IonCardTitle>
          </IonCardHeader>

          <IonList lines="inset" inset="true">
            <IonListHeader>
              <IonLabel>Ideal Conditions</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonIcon slot="start" color="medium" icon={water} />
              <IonLabel>
                <h3>Water</h3>
                <p>{plant.water}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon slot="start" color="medium" icon={sunny} />
              <IonLabel>
                <h3>Light</h3>
                <p>{plant.light}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon slot="start" color="medium" icon={cloud} />
              <IonLabel>
                <h3>Humidity</h3>
                <p>{plant.humidity}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon slot="start" color="medium" icon={paw} />
              <IonLabel>
                <h3>Pet-Friendly</h3>
                <p>{plant.pet_friendly ? "Yes" : "No"}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon slot="start" color="medium" icon={leaf} />
              <IonLabel>
                <h3>Succulent</h3>
                <p>{plant.succulent ? "Yes" : "No"}</p>
              </IonLabel>
            </IonItem>
            
            <IonCardHeader>
              <IonLabel>Plant Bio</IonLabel>
            </IonCardHeader>
            <IonCardContent>
              <p>{plant.bio}</p>
            </IonCardContent>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>

  )
}

export default PlantDetails