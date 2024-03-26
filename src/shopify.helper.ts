declare var Shopify: any;
declare var $: any;

export interface Cart {
  items_subtotal_price: number;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  items: CartItem[];
}

export interface CartEvent {
  added: CartItem[];
  removed: CartItem[];
}
export interface CartItem {
  key: string;
  price: number;
}

export async function getCart() {
  const response = await fetch('/cart.js');
  return await response.json();
}

export async function addToCart(productId) {
  const data = {
    items: [{ id: productId, quantity: 1 }],
  };

  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
export async function removeFromCart(productId: number) {
  const cart = await getCart();

  // Find the line number for the item with the given variant ID
  let lineItemIndex: number | undefined;
  cart.items.forEach((item: any, index: number) => {
    if (item.id === productId) {
      lineItemIndex = index + 1;
    }
  });

  if (!lineItemIndex) {
    throw new Error(`Item with ID ${productId} not found in cart`);
  }

  // Remove the item from the cart
  const data = {
    line: lineItemIndex,
    quantity: 0,
  };

  const response = await fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
/*
export async function updateCartDrawer() {
    const cartContent = await (await fetch(`/cart.js`)).json();
    dispatchEvent(new CustomEvent("variant:add", {
      bubbles: true,
      detail: {
        items: cartContent.items,
        cart: cartContent
      }
    }));
    document.documentElement.dispatchEvent(new CustomEvent("cart:change", {
      bubbles: true,
      detail: {
        baseEvent: "variant:add",
        cart: cartContent
      }
    }));
  }
*/
export async function refreshCart() {
  fetch('/?section_id=cart-drawer')
    .then(response => response.text())
    .then(cartData => {
      var mini_cart_updated_html = $(cartData);
      var cart_drawer_top = $('.cart-drawer__top', mini_cart_updated_html);
      var cart_items_updated = $(
        '.cart-drawer__line-items',
        mini_cart_updated_html
      ); // here we updated the cart area from updated mini_cart_updated_html
      var cart_price_updated = $(
        '.cart-drawer__total-price',
        mini_cart_updated_html
      );

      $('.cart-drawer__top').replaceWith(cart_drawer_top);
      $('.cart-drawer__line-items').replaceWith(cart_items_updated);
      $('.cart-drawer__total-price').replaceWith(cart_price_updated);
    });
}
