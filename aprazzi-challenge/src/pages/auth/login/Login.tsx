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
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  const HandleLogin = () => {
    console.log("Botón de inicio de sesión clickeado");
    history.push(PublicRoutes.HOME);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Iniciar sesión
            </IonCardTitle>
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
            <IonButton
              expand="full"
              className="ion-margin-top"
              onClick={HandleLogin}
            >
              Iniciar sesión
            </IonButton>
          </IonCardContent>

          <IonFooter>
            <h6>¿No tienes una cuenta?</h6>
            <IonButton
              className="ion-margin-top"
              routerLink={PublicRoutes.REGISTER}
            >
              Crear cuenta
            </IonButton>
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
