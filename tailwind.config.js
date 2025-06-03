/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-black": "#0B0B0F",
        "space-blue": "#1E2A4A",
        "space-purple": "#4B0082",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounceSlow: "bounce 3s infinite",
        spinSlow: "spin 4s linear infinite",
        gradient: "gradient 15s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-shine":
          "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))",
        "space-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.purple.500), 0 0 20px theme(colors.purple.500)",
        "neon-strong":
          "0 0 5px theme(colors.purple.500), 0 0 20px theme(colors.purple.500), 0 0 60px theme(colors.purple.500)",
        "neon-blue":
          "0 0 5px theme(colors.blue.500), 0 0 20px theme(colors.blue.500)",
        "neon-glow": "0 0 20px rgba(139, 92, 246, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [],
};
