declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_EMAIL: string
      ADMIN_PASSWORD: string
      NODE_ENV: 'development' | 'production'
      SESSION_SECRET : string
    }
  }
}

export {} 