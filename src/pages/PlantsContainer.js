import { IonRouterOutlet } from '@ionic/react';

import { Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Plants from './Plants.js'
import PlantDetails from './PlantDetails.js'

const PlantsContainer = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route path={`${match.url}/plants/:id`} render={ props => <PlantDetails {...props} />} />
      <Route exact path={match.url} render={props => <Plants {...props} />} />
    </IonRouterOutlet>
  );
};

export default PlantsContainer;