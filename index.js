//Importamos un modulo de expo que es "registerRootComponent" lo que hace es decirle a expo cual es la raiz o componente principal de mi app.
import { registerRootComponent } from "expo";
//Importamos el app que viene desde index.jsx 
import App from "./src/index";
//Le indicamos a nuestro componente de registerRootComponent que recibe nuestra raiz de la App.
registerRootComponent(App);