/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // src 폴더 내 모든 html, js 파일
    "./*.{html,js}"         // 현재 폴더의 모든 html, js 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

