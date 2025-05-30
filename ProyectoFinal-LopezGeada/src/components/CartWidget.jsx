// import carrito from "..assets/"; /*AÑADIR IMAGEN DE CARRITO*/

function CartWidget({ carrito }) {
  return (
    <div className="cart-widget">
      <img src={carrito} alt="Icono de carro de compras" />
      <span className="cart-count">0</span>
    </div>
  );
}

export default CartWidget;
