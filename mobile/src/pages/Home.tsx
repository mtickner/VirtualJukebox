import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const myArray = [1,2,3];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer arg1="SomeValue" arg2="SomeOtherValue" someArray={myArray}/>
        {/* EQUIVALENT TO: React.render(ExploreContainer, args1="someValue", args2="SomeValue") */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
