import { useUserContext } from "@/context/user-context";
import { auth } from "@/firebase/firebase";
import { PrivateRoutes, PublicRoutes } from "@/routes/routes";
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
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router";

const LoginView: React.FC = () => {
  const history = useHistory();
  const { createUser } = useUserContext();
  const HandleLogin = () => {
    console.log("Botón de inicio de sesión clickeado");
    history.push(PrivateRoutes.HOME);
  };
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider: any) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

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

            <IonButton
              expand="full"
              className="ion-margin-top"
              onClick={handleOnClick}
            >
              Iniciar con google
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

export default LoginView;
