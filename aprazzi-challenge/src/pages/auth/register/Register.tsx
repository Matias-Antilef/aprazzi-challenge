import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonFooter,
} from "@ionic/react";
import { PublicRoutes } from "../../../routes/routes";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Registrate</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Correo electrónico</IonLabel>
              <IonInput type="email" placeholder="Ingresa tu correo" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Contraseña</IonLabel>
              <IonInput type="password" placeholder="Ingresa tu contraseña" />
            </IonItem>
            <IonButton expand="full" className="ion-margin-top">
              Crear cuenta
            </IonButton>
          </IonCardContent>

          <IonFooter>
            <h6>¿Ya tienes una cuenta?</h6>
            <IonButton
              className="ion-margin-top"
              routerLink={PublicRoutes.LOGIN}
            >
              Iniciar sesión
            </IonButton>
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
