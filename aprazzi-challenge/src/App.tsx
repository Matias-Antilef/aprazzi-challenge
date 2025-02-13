import { Redirect, Route } from "react-router-dom";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import { PrivateRoutes, PublicRoutes } from "@/routes/routes";
import RegisterView from "@/pages/auth/register-view";
import TaskInfoView from "@/pages/core/task-info/task-info-view";
import LoginView from "@/pages/auth/login-view";
import Home from "@/pages/core/home";
import AuthGuard from "./utils/auth-guard";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to={PrivateRoutes.HOME} />
        </Route>
        <Route exact path={PublicRoutes.LOGIN} component={LoginView} />
        <Route exact path={PublicRoutes.REGISTER} component={RegisterView} />
        <AuthGuard>
          <Route exact path={PrivateRoutes.HOME} component={Home} />
        </AuthGuard>
        <Route exact path={PrivateRoutes.TASK_INFO} component={TaskInfoView} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
