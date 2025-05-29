"use client";

import { useParams } from "next/navigation";
import { AuthType } from "@/lib/type/layout/header";
import {
  AUTH_BUTTON_TEXT,
  AUTH_FORM,
  AUTH_LINK_TEXT,
  AUTH_TITLE,
} from "@/lib/constants/auth";
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
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const { type } = useParams();
  const form = useForm();

  const isLogin = type === AuthType.LOGIN;
  const isRegister = type === AuthType.REGISTER;

  const title = isLogin
    ? AUTH_TITLE.LOGIN
    : isRegister
    ? AUTH_TITLE.REGISTER
    : AUTH_TITLE.NOT_FOUND;

  const formFields = isLogin
    ? AUTH_FORM.LOGIN
    : isRegister
    ? AUTH_FORM.REGISTER
    : [];

  const redirectLink = isLogin
    ? AuthType.REGISTER
    : isRegister
    ? AuthType.LOGIN
    : "";

  const linkText = isLogin
    ? AUTH_LINK_TEXT.LOGIN
    : isRegister
    ? AUTH_LINK_TEXT.REGISTER
    : AUTH_LINK_TEXT.NOT_FOUND;

  const ButtonText = isLogin
    ? AUTH_BUTTON_TEXT.LOGIN
    : isRegister
    ? AUTH_BUTTON_TEXT.REGISTER
    : "";

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-muted/30 to-background">
      <Card className="w-full max-w-md backdrop-blur-md border border-border shadow-xl rounded-2xl bg-background/80">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold text-primary tracking-tight">
            {title}
          </CardTitle>

          {title !== "Page non trouvée" && (
            <CardDescription>
              <span className="text-muted-foreground">ou </span>
              <Link
                href={redirectLink}
                className="text-primary/80 hover:text-primary font-medium transition-colors underline underline-offset-4"
              >
                {linkText}
              </Link>
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field) => (
                <div key={field.name}>
                  <Label className="mb-2" htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                  />
                </div>
              ))}

              {isLogin && (
                <div className="text-sm text-center ">
                  <Link
                    href="/auth/forgot-password"
                    className="text-primary/80 hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              )}

              {title !== "Page non trouvée" && (
                <Button className="w-full" type="submit">
                  {ButtonText}
                </Button>
              )}
            </form>
          </Form>

          {isLogin && (
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  ou continue avec
                </span>
              </div>
            </div>
          )}

          {isLogin && (
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="size-5" />
              Se connecter avec Google
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
