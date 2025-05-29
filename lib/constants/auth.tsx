export const AUTH_TITLE = {
  LOGIN: "Connexion",
  REGISTER: "Inscription",
  FORGOT_PASSWORD: "Mot de passe oublié",
  NOT_FOUND: "Page non trouvée",
};

export const AUTH_LINK_TEXT = {
  LOGIN: "vous n'avez pas de compte ?",
  REGISTER: "vous avez déjà un compte ?",
  FORGOT_PASSWORD: "vous connaissez votre mot de passe ?",
  NOT_FOUND: "la page que vous cherchez n'existe pas"
};

export const AUTH_BUTTON_TEXT = {
  LOGIN: "Connexion",
  REGISTER: "Inscription",
  FORGOT_PASSWORD: "Envoyer",
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
  FORGOT_PASSWORD: [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
  ],
};
