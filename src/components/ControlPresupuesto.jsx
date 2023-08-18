export const ControlPresupuesto = ({ presupuesto }) => {
  // Formatear cantidad a moneda
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(presupuesto)}
        </p>
      </div>
    </div>
  );
};
