import CartItem from './CartItem';
import cartItems from './data';
const CartContainer = () => {
  const { cart } = useGlobalContext();

  const cartArray = Array.from(cart.values());

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>En tu carrito</h2>
          <h4 className='empty-cart'>está vacío</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>En tu carrito</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(cartArray.reduce((acc, item) => acc + item.price * item.amount, 0))}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => console.log('clear cart')}
        >
          limpiar carrito
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
