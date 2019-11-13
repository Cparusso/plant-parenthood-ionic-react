import React from 'react'
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonAvatar, IonImg, IonThumbnail } from '@ionic/react'

const Profile = (props) => {
  console.log("USER IN PROPS IN PROFILE", props.user)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.first_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg" alt="Profile Picture"/>
      </IonContent>
    </IonPage>
  )
}

export default Profile
