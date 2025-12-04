import { useState, useEffect } from "react";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (rodando) {
      intervalo = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [rodando]);

  const formatarTempo = () => {
    const m = String(Math.floor(segundos / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.display}>{formatarTempo()}</h1>
      <div style={styles.botoes}>
        <button style={styles.botao} onClick={() => setRodando(!rodando)}>
          {rodando ? "Pausar" : "Iniciar"}
        </button>
        <button style={styles.botao} onClick={() => setSegundos(0)}>
          Zerar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#ffb6c1",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  display: {
    fontSize: "4rem",
    marginBottom: "20px",
    color: "#fff",
    textShadow: "2px 2px #ff69b4",
  },
  botoes: {
    display: "flex",
    gap: "10px",
  },
  botao: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#ff69b4",
    color: "#fff",
  },
};
