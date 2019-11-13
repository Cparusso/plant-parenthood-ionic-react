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
  IonCardSubtitle,
  IonRange,
  IonCheckbox,
} from '@ionic/react'

import { water, sunny, cloud, paw, leaf } from 'ionicons/icons'

import React, { useState, useEffect } from 'react'

const PlantDetails = ({ match }) => {
  const [plant, setPlant] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/plants/${match.params.id}`)
    .then(resp => resp.json())
    .then(setPlant)
  }, [])
    
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

          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Ideal Conditions</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>
                <h3>Water</h3>
                {/* <p>{plant.water}</p> */}
              </IonLabel>
              <IonRange min={0} max={100} step={20} snaps={true} ticks={false} value={"20"} >
                <IonIcon size="small" slot="start" color="primary" icon={water} />
                <IonIcon size="big" slot="end" color="primary" icon={water} />
              </IonRange>
            </IonItem>

            <IonItem>
              <IonLabel>
                <h3>Light</h3>
                {/* <p>{plant.light}</p> */}
              </IonLabel>
              <IonRange min={0} max={100} step={20} snaps={true} ticks={false} value={"60"} color="warning" >
                <IonIcon size="small" slot="start" color="warning" icon={sunny} />
                <IonIcon size="big" slot="end" color="warning" icon={sunny} />
              </IonRange>
            </IonItem>

            <IonItem>
              <IonLabel>
                <h3>Humidity</h3>
                {/* <p>{plant.humidity}</p> */}
              </IonLabel>
              <IonRange min={0} max={100} step={20} snaps={true} ticks={false} value={"40"} color={"secondary"} >
                <IonIcon size="small" slot="start" color="secondary" icon={cloud} />
                <IonIcon size="big" slot="end" color="secondary" icon={cloud} />
              </IonRange>
            </IonItem>

            <IonItem>
              <IonItem>
                <IonIcon color={plant.pet_friendly ? "dark" : "medium"} icon={paw} />
                {/* <IonLabel>
                  <h3>Pets</h3>
                  <p>{plant.pet_friendly ? "Yes" : "No"}</p>
                </IonLabel>
                <IonCheckbox slot="end" color="dark" checked={plant.pet_friendly ? true : false}/> */}
              </IonItem>

              <IonItem>
                <IonIcon color={plant.succulent ? "success" : "medium"} icon={leaf} />
                {/* <IonLabel>
                  <h3>Succulent</h3>
                  <p>{plant.succulent ? "Yes" : "No"}</p>
                </IonLabel>
                <IonCheckbox slot="end" color="success" checked={plant.succulent ? true : false} /> */}
              </IonItem>
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