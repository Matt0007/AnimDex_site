export const AUTH_TITLE = {
  LOGIN: "Connexion",
  REGISTER: "Inscription",
  NOT_FOUND: "Page non trouvée",
};

export const AUTH_DESCRIPTION = {
  LOGIN: "Connectez-vous à votre compte",
  REGISTER: "Créez un compte",
  NOT_FOUND: "La page que vous cherchez n'existe pas",
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
};
