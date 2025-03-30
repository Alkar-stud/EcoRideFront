import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/mentionslegales", "Mentions légales", "/pages/mentionslegales.html", []),
    new Route("/contact", "Contactez-nous", "/pages/contact.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", []),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", []),
    new Route("/account", "Mon compte", "/pages/auth/account.html", []),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";