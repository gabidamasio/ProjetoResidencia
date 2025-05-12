import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/ProjetoResidencia/', // Certifique-se de que o base é configurado para o subdiretório
})