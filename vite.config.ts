import { defineConfig } from 'vitest/config';
import path from 'path'; // <-- เพิ่มบรรทัดนี้

export default defineConfig({
  test: { // <-- นี่คือของเดิมจาก Lab 3 
    environment: 'jsdom',
    globals: true,
  },
  resolve: { // <-- นี่คือ "ตัวแก้" ที่เราเพิ่มเข้าไป
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});