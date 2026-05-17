import { useEffect, useRef } from "react";

/**
 * Hook propio para detectar clicks fuera de un elemento.
 * Usa useEffect (SSR-safe), a diferencia de la versión de @uidotdev/usehooks
 * que usa useLayoutEffect y rompe en SSR.
 *
 * Uso:
 *   const ref = useClickAway(() => setOpen(false));
 *   <div ref={ref}>...</div>
 */
const useClickAway = (callback) => {
  const ref = useRef(null);
  const callbackRef = useRef(callback);

  // Mantener referencia siempre al callback actual sin re-suscribirse
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current(event);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return ref;
};

export default useClickAway;
