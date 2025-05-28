"use client";
import { useParams } from "next/navigation";
import { AuthType } from "@/lib/type/layout/header";
import { AUTH_DESCRIPTION, AUTH_FORM, AUTH_TITLE } from "@/lib/constants/auth";
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
export default function AuthPage() {
  const { type } = useParams();
  const form = useForm();

  // vérification du paramètre de la page
  const isLogin = type === AuthType.LOGIN;

  // titre de la page
  const title = isLogin ? AUTH_TITLE.LOGIN : AUTH_TITLE.NOT_FOUND;

  const description = isLogin
    ? AUTH_DESCRIPTION.LOGIN
    : AUTH_DESCRIPTION.NOT_FOUND;

  const formFields = isLogin ? AUTH_FORM.LOGIN : [];

  const ButtonText = isLogin ? "Connexion" : "";

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center text-2xl font-bold">
            {title}
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div className="mb-4" key={field.name}>
                  <Label>{field.label}</Label>
                  <Input
                    className="mt-2"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                  />
                </div>
              ))}
              <Button className="w-full" type="submit">
                {ButtonText}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
