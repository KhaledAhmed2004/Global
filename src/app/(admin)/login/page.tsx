"use client";

import { useState } from "react";
import { Eye, EyeOff, Globe, Shield, ArrowRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FranchiseLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const languages = {
    en: {
      title: "Franchise Partner Login",
      subtitle: "Access your Global VIN franchise dashboard",
      email: "Email Address",
      password: "Password",
      rememberMe: "Remember me for 30 days",
      signIn: "Sign In",
      forgotPassword: "Forgot your password?",
      resetPassword: "Reset Password",
      backToLogin: "Back to Login",
      resetSubtitle: "Enter your email to receive reset instructions",
      sendReset: "Send Reset Link",
      secureLogin: "Secure Login",
      language: "Language",
      loading: "Signing in...",
      resetLoading: "Sending reset link...",
    },
    es: {
      title: "Inicio de Sesión de Socio Franquicia",
      subtitle: "Accede a tu panel de franquicia Global VIN",
      email: "Dirección de Correo",
      password: "Contraseña",
      rememberMe: "Recordarme por 30 días",
      signIn: "Iniciar Sesión",
      forgotPassword: "¿Olvidaste tu contraseña?",
      resetPassword: "Restablecer Contraseña",
      backToLogin: "Volver al Inicio",
      resetSubtitle: "Ingresa tu correo para recibir instrucciones",
      sendReset: "Enviar Enlace",
      secureLogin: "Inicio Seguro",
      language: "Idioma",
      loading: "Iniciando sesión...",
      resetLoading: "Enviando enlace...",
    },
    fr: {
      title: "Connexion Partenaire Franchise",
      subtitle: "Accédez à votre tableau de bord Global VIN",
      email: "Adresse Email",
      password: "Mot de Passe",
      rememberMe: "Se souvenir de moi pendant 30 jours",
      signIn: "Se Connecter",
      forgotPassword: "Mot de passe oublié?",
      resetPassword: "Réinitialiser",
      backToLogin: "Retour à la Connexion",
      resetSubtitle: "Entrez votre email pour recevoir les instructions",
      sendReset: "Envoyer le Lien",
      secureLogin: "Connexion Sécurisée",
      language: "Langue",
      loading: "Connexion...",
      resetLoading: "Envoi du lien...",
    },
  };

  const t = languages[language as keyof typeof languages];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would implement actual authentication
    console.log("Login attempt:", formData);
    
    setIsLoading(false);
    // Redirect to dashboard on success
    window.location.href = "/dashboard";
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Password reset for:", formData.email);
    alert("Password reset link sent to your email!");
    
    setIsLoading(false);
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Language Selector */}
        <div className="flex justify-end mb-6">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          {!showForgotPassword ? (
            /* Login Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    required
                    className="pl-10"
                    placeholder="franchise@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, rememberMe: checked as boolean })
                    }
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    {t.rememberMe}
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-purple-600 hover:text-purple-800"
                  onClick={() => setShowForgotPassword(true)}
                >
                  {t.forgotPassword}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t.loading}
                  </div>
                ) : (
                  <div className="flex items-center">
                    {t.signIn}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
              </Button>
            </form>
          ) : (
            /* Forgot Password Form */
            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.resetPassword}</h2>
                <p className="text-gray-600">{t.resetSubtitle}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    required
                    className="pl-10"
                    placeholder="franchise@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t.resetLoading}
                    </div>
                  ) : (
                    t.sendReset
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowForgotPassword(false)}
                >
                  {t.backToLogin}
                </Button>
              </div>
            </form>
          )}

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              {t.secureLogin}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/70 text-sm">
          © 2024 Global VIN. All rights reserved.
        </div>
      </div>
    </div>
  );
}