import React, { useState } from 'react'
import { AlertCircle, Loader2, UserPlus, Eye, EyeOff } from 'lucide-react'
import { Button, AuthLayout, Alert } from '@tribux/ui'
import { navigateToUrl } from 'single-spa'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Por favor ingrese email y contraseña')
      return
    }

    setLoading(true)

    try {
      // Datos quemados para demo
      const demoEmail = 'antony.mongelopez@ucr.ac.cr'
      const demoPassword = 'tony123'

      if (email === demoEmail && password === demoPassword) {
        console.log('Login successful')
        navigateToUrl('/menu')
      } else {
        setError('Credenciales incorrectas')
      }

      setLoading(false)

    } catch (err: unknown) {
      console.error('Error en login:', err)
      setError('Error inesperado al iniciar sesión')
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Iniciar Sesión"
      description="Servicio Digital Tributario con Tribux"
    >
      {/* Error Alert */}
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive animate-slide-in"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-4">
          <label htmlFor="email" className="text-base font-semibold">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="usuario@ejemplo.com"
            disabled={loading}
            autoComplete="email"
            required
            className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-12"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="password" className="text-base font-semibold">
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-12"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0 border-0 bg-transparent text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 text-base font-semibold"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Iniciando sesión...
            </>
          ) : (
            'Entrar'
          )}
        </Button>

        {/* Additional Options */}
        <div className="flex flex-col gap-3 pt-6 border-t">
          <Button
            type="button"
            variant="link"
            onClick={() => navigateToUrl('/auth/forgot-password')}
            className="text-sm text-muted-foreground hover:text-primary justify-start p-0 h-auto"
            disabled={loading}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          <Button
            type="button"
            variant="link"
            onClick={() => navigateToUrl('/auth/create-user')}
            className="text-sm text-muted-foreground hover:text-primary justify-start p-0 h-auto"
            disabled={loading}
          >
            <UserPlus className="w-4 h-4 mr-1" />
            Crear usuario
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}
