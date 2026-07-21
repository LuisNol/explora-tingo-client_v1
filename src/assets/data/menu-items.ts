import type { MenuItemType } from "@/types/menu";

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: "main",
    label: "Main Menu",
    isTitle: true,
  },
  {
    key: "dashboards",
    icon: "iconoir-home-simple",
    label: "Dashboards",
    children: [
      {
        key: "dashboard-analytics",
        label: "Analytics",
        route: { name: "dashboards.analytics" },
        parentKey: "dashboards",
      },
      {
        key: "dashboard-ecommerce",
        label: "Ecommerce",
        route: { name: "dashboards.ecommerce" },
        parentKey: "dashboards",
      },
    ],
  },
 {
    key: "main",
    label: "Main Menu 2",
    isTitle: true,
  },
  
  {
    key: "page-authentication",
    label: "Authentication",
    isTitle: false,
    icon: "iconoir-fingerprint-lock-circle",
    children: [
      {
        key: "login",
        label: "Log In",
        route: { name: "auth.sign-in" },
        parentKey: "page-authentication",
      },
      {
        key: "register",
        label: "Register",
        route: { name: "auth.register" },
        parentKey: "page-authentication",
      },
      {
        key: "reset-pass",
        label: "Re-Password",
        route: { name: "auth.reset-pass" },
        parentKey: "page-authentication",
      },
      {
        key: "lock-screen",
        label: "Lock Screen",
        route: { name: "auth.lock-screen" },
        parentKey: "page-authentication",
      },
      {
        key: "maintenance",
        label: "Maintenance",
        route: { name: "auth.maintenance" },
        target: "_blank",
        parentKey: "page-authentication",
      },
      {
        key: "error-404",
        label: "Error 404",
        route: { name: "error.404" },
        parentKey: "page-authentication",
      },
      {
        key: "error-500",
        label: "Error 500",
        route: { name: "error.500" },
        parentKey: "page-authentication",
      },
    ],
  },
];
