import { useRef, useEffect } from "react";

function TextoAnimado({ texto, className = "" }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const txtEfeito = spanRef.current;
    const alfabeto = "ABCDEFGHITUVWXYZ";
    let intervalo = null;

    if (txtEfeito) {
      let contador = 0;
      const valorFinal = texto;

      intervalo = setInterval(() => {
        txtEfeito.innerText = valorFinal
          .split("")
          .map((letter, index) => {
            return index < contador
              ? valorFinal[index]
              : alfabeto[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (contador >= valorFinal.length) {
          clearInterval(intervalo);
        }

        contador += 1 / 3;
      }, 30);
    }

    return () => clearInterval(intervalo);
  }, [texto]);

  return (
    <span
      ref={spanRef}
      className={`txtEfeito ${className}`}
    >
      {texto.toUpperCase()}
    </span>
  );
}

export default TextoAnimado;
