import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import React from 'react'

const PlantCard = ({ plant }) => {

  return (
    <IonItem routerLink={`browse/plants/${plant.id}`} >
      <IonAvatar slot="start">
        <img src={plant.picture} alt="plant" />
      </IonAvatar>
      <IonLabel>
        <h2>{plant.common_name}</h2>
        <p>{plant.binomial_name}</p>
      </IonLabel>
    </IonItem>
  )
}

export default PlantCard
