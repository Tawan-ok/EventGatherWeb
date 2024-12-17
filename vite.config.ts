import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // เปลี่ยนพอร์ตเป็น 3000 ได้
  },
  build: {
    outDir: 'dist', // โฟลเดอร์ output หลัง build
  },
});
