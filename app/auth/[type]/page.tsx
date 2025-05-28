"use client";
import { useParams } from "next/navigation";
import { AuthType } from "@/lib/type/layout/header";
import {AUTH_BUTTON_TEXT, AUTH_FORM, AUTH_LINK_TEXT, AUTH_TITLE } from "@/lib/constants/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"; // Flat Color icon


export default function AuthPage() {
  const { type } = useParams();
  const form = useForm();

  // vérification du paramètre de la page
  const isLogin = type === AuthType.LOGIN;
  const isRegister = type === AuthType.REGISTER;

  // titre de la page
  const title = isLogin
    ? AUTH_TITLE.LOGIN
    : isRegister
    ? AUTH_TITLE.REGISTER
    : AUTH_TITLE.NOT_FOUND;

  // champs du formulaire
  const formFields = isLogin
    ? AUTH_FORM.LOGIN
    : isRegister
    ? AUTH_FORM.REGISTER
    : [];

  // lien de redirection
  const redirectLink = isLogin
    ? AuthType.REGISTER
    : isRegister
    ? AuthType.LOGIN
    : "";

  // texte du lien de redirection
  const linkText = isLogin
    ? AUTH_LINK_TEXT.LOGIN
    : isRegister
    ? AUTH_LINK_TEXT.REGISTER
    : AUTH_LINK_TEXT.NOT_FOUND;

  // texte du bouton de soumission
  const ButtonText = isLogin
    ? AUTH_BUTTON_TEXT.LOGIN
    : isRegister
    ? AUTH_BUTTON_TEXT.REGISTER
    : "";

  // fonction de soumission du formulaire
  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center text-2xl font-bold text-primary">
            {title}
          </CardTitle>

          {title !== "Page non trouvée" && (
            <CardDescription className="text-center">
              <span>ou </span>
              <Link
                href={redirectLink}
                className="text-primary/80 hover:text-primary/70 transition-colors"
              >
                {linkText}
              </Link>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div className="mb-4" key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    className="mt-3"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                  />
                </div>
              ))}
              {isLogin && (
                <div className="flex justify-center items-center text-sm pt-2">
                  <Link
                    href="/auth/forgot-password"
                    className="text-primary/80 hover:text-primary/70 transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              )}

              {title !== "Page non trouvée" && (
                <Button className="w-full mt-2" type="submit">
                  {ButtonText}
                </Button>
              )}
            </form>
          </Form>
          {isLogin && (
            <div className="m-5 mb-0">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-primary/80 hover:text-primary/70"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <FcGoogle className="size-5" />
                Se connecter avec Google
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
