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
    key: "apps",
    icon: "iconoir-view-grid",
    label: "Applications",
    children: [
      {
        key: "apps-analytics",
        label: "Analytics",
        parentKey: "apps",
        children: [
          {
            key: "apps-analytics-customers",
            label: "Customers",
            route: { name: "apps.analytics.customers" },
            parentKey: "apps-analytics",
          },
          {
            key: "apps-analytics-reports",
            label: "Reports",
            route: { name: "apps.analytics.reports" },
            parentKey: "apps-analytics",
          },
        ],
      },
      {
        key: "apps-projects",
        label: "Projects",
        parentKey: "apps",
        children: [
          {
            key: "apps-projects-clients",
            label: "Clients",
            route: { name: "apps.projects.clients" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-team",
            label: "Team",
            route: { name: "apps.projects.team" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-project",
            label: "Project",
            route: { name: "apps.projects.project" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-task",
            label: "Task",
            route: { name: "apps.projects.task" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-kanban",
            label: "Kanban Board",
            route: { name: "apps.projects.kanban" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-users",
            label: "Users",
            route: { name: "apps.projects.users" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-create",
            label: "Project Create",
            route: { name: "apps.projects.create" },
            parentKey: "apps-projects",
          },
        ],
      },
      {
        key: "apps-ecommerce",
        label: "Ecommerce",
        parentKey: "apps",
        children: [
          {
            key: "apps-ecommerce-products",
            label: "Products",
            route: { name: "apps.ecommerce.products" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-customers",
            label: "Customers",
            route: { name: "apps.ecommerce.customers" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-customers-details",
            label: "Customers Details",
            route: {
              name: "ecommerce.customers.details",
              params: { id: "3001" },
            },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-orders",
            label: "Orders",
            route: { name: "apps.ecommerce.orders" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-orders-details",
            label: "Orders Details",
            route: { name: "ecommerce.orders.details", params: { id: "3001" } },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-refunds",
            label: "Refunds",
            route: { name: "apps.ecommerce.refunds" },
            parentKey: "apps-ecommerce",
          },
        ],
      },
      {
        key: "apps-chat",
        label: "Chat",
        parentKey: "apps",
        route: { name: "apps.chat" },
      },
      {
        key: "apps-contact-list",
        label: "Contact List",
        parentKey: "apps",
        route: { name: "apps.contacts" },
      },
      {
        key: "apps-calendar",
        label: "Calendar",
        parentKey: "apps",
        route: { name: "apps.calendar" },
      },
      {
        key: "apps-invoice",
        label: "Invoice",
        parentKey: "apps",
        route: { name: "apps.invoice" },
      },
    ],
  },
  {
    key: "email-templates",
    label: "Email Templates",
    icon: "iconoir-send-mail",
    children: [
      {
        key: "email-templates-basic",
        label: "Basic Action Email",
        route: { name: "email-templates.basic" },
        parentKey: "email-templates",
      },
      {
        key: "email-templates-alert",
        label: "Alert Email",
        route: { name: "email-templates.alert" },
        parentKey: "email-templates",
      },
      {
        key: "email-templates-billing",
        label: "Billing Email",
        route: { name: "email-templates.billing" },
        parentKey: "email-templates",
      },
    ],
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
