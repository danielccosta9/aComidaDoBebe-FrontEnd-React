/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Usuario from "views/UserPage.js";
import Upgrade from "views/Upgrade.js";
import Nutricionista from "views/Cadastros/Nutricionista/cadNutri.js";
import Membros from "views/Cadastros/Membros/cadMembros.js";
import Alimentos from "views/Cadastros/Alimentos/cadAlimentos.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/membros",
    name: "Membro",
    icon: "users_single-02",
    component: Membros,
    layout: "/admin",
  },
  {
    path: "/alimentos",
    name: "Alimento",
    icon: "shopping_cart-simple",
    component: Alimentos,
    layout: "/admin",
  },
  {
    path: "/nutricionista",
    name: "Nutricionista",
    icon: "sport_user-run",
    component: Nutricionista,
    layout: "/admin",
  },
  {
    path: "/usario",
    name: "Usuário",
    icon: "business_badge",
    component: Usuario,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin",
  },
];
export default dashRoutes;
