
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Simple CAPTCHA implementation
const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate captcha
    if (captchaInput !== captchaText) {
      toast({
        title: "Error",
        description: "CAPTCHA tidak cocok. Silakan coba lagi.",
        variant: "destructive",
      });
      refreshCaptcha();
      setIsLoading(false);
      return;
    }

    // For demo purposes, using hardcoded credentials
    // In a real app, this should be replaced with a proper authentication system
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminAuthenticated", "true");
      toast({
        title: "Berhasil masuk",
        description: "Selamat datang ke halaman admin CMS",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Username atau password tidak valid",
        variant: "destructive",
      });
      refreshCaptcha();
    }
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
            <CardDescription>
              Masukkan kredensial Anda untuk mengakses panel admin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <User className="h-5 w-5" />
                  </span>
                  <Input
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </span>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="captcha">CAPTCHA</Label>
                <div className="flex flex-col space-y-2">
                  <div className="relative">
                    <div className="flex h-10 w-full items-center justify-center rounded-md bg-gray-100 font-mono text-lg tracking-widest">
                      {captchaText.split("").map((char, index) => (
                        <span
                          key={index}
                          className="inline-block transform px-0.5"
                          style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg)`,
                            color: `hsl(${Math.random() * 360}, 70%, 30%)`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="absolute right-2 top-2 rounded-md p-1 text-xs text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                    >
                      Refresh
                    </button>
                  </div>
                  <Input
                    id="captcha"
                    placeholder="Masukkan CAPTCHA"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Login"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Akses terbatas hanya untuk administrator
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminLoginPage;
