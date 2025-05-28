export const AUTH_TITLE = {
  LOGIN: "Connexion",
  REGISTER: "Inscription",
  NOT_FOUND: "Page non trouvée",
};

export const AUTH_LINK_TEXT = {
  LOGIN: "Vous n'avez pas de compte ?",
  REGISTER: "Vous avez déjà un compte ?",
  NOT_FOUND: "La page que vous cherchez n'existe pas",
};

export const AUTH_BUTTON_TEXT = {
  LOGIN: "Connexion",
  REGISTER: "Inscription",
};

export const AUTH_FORM = {
  LOGIN: [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      label: "Mot de passe",
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      required: true,
    },
  ],
  REGISTER: [
    {
      label: "Prénom",
      name: "firstname",
      type: "text",
      placeholder: "Prénom",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email", 
      required: true,
    },
    {
      label: "Mot de passe",
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      required: true,
    },
    {
      label: "Confirmation du mot de passe",
      name: "password_confirmation",
      type: "password",
      placeholder: "Confirmation du mot de passe",
    },
  ],
};
