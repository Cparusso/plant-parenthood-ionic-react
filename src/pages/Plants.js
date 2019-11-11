// import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonRouterOutlet, useIonViewWillEnter } from '@ionic/react'
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    // useIonViewDidEnter,
    // useIonViewDidLeave,
    useIonViewWillEnter,
    // useIonViewWillLeave 
} from '@ionic/react'

// import React, { useState } from 'react'
import React, { useState } from 'react'
import PlantCard from './PlantCard.js'

const Plant = () => {
    const [plants, setPlants] = useState([])

    useIonViewWillEnter(async () => {
        return fetch('http://localhost:3000/plants')
            .then(resp => resp.json())
            .then(setPlants)
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Plants</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    { plants.map((plant, idx) => <PlantCard key={idx} plant={plant} />) }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Plant
