import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            cartItems: JSON.parse(localStorage.getItem("buyList")) || [],
        };
    },
    mutations: {
        addToCart(state, product) {
            if (!product) {
                console.error("Product is undefined");
                return;
            }
            const productId = Number(product.id);
            if (isNaN(productId)) {
                console.error("Invalid product ID");
                return;
            }
            const existingProduct = state.cartItems.find(
                (item) => Number(item.id) === productId
            );
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                const newProduct = {
                    id: productId,
                    title: product.title || "",
                    description: product.description || "",
                    price: Number(product.price) || 0,
                    thumbnail: product.thumbnail || "",
                    stock: Number(product.stock) || 0,
                    quantity: 1,
                };
                state.cartItems.push(newProduct);
            }
            localStorage.setItem("buyList", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, product) {
            const index = state.cartItems.findIndex(
                (item) => item.id === product.id
            );
            if (index !== -1) {
                state.cartItems.splice(index, 1);
                localStorage.setItem(
                    "buyList",
                    JSON.stringify(state.cartItems)
                );
            }
        },

        clearCart(state) {
            state.cartItems = [];
            localStorage.removeItem("buyList");
        },
        incrementQuantity(state, productId) {
            if (!productId) return;

            const product = state.cartItems.find(item => item.id === productId);
            if (product) {
                product.quantity = (product.quantity || 1) + 1;
                localStorage.setItem("buyList", JSON.stringify(state.cartItems));
            }
        },

        decrementQuantity(state, productId) {
            if (!productId) return;

            const product = state.cartItems.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity--;
                localStorage.setItem("buyList", JSON.stringify(state.cartItems));
            }
        },

        updateQuantity(state, { productId, quantity }) {
            if (!productId || quantity < 1) return;

            const product = state.cartItems.find(item => item.id === productId);
            if (product) {
                product.quantity = quantity;
                localStorage.setItem("buyList", JSON.stringify(state.cartItems));
            }
        }
    },
    getters: {
        isInCart: (state) => (productId) => {
            return state.cartItems.some((item) => item.id === productId);
        },
        getCartItems: (state) => {
            return state.cartItems;
        },
        getCartTotal: (state) => {
            return state.cartItems.reduce((total, item) => {
                return total + (item.price * (item.quantity || 1));
            }, 0);
        },
        getItemQuantity: (state) => (productId) => {
            if (!productId) return 0;
            const product = state.cartItems.find(item => item.id === productId);
            return product ? product.quantity || 1 : 0;
        }
       
    },
    actions: {
        addToCart({ commit }, product) {
            commit("addToCart", product);
        },
        removeFromCart({ commit }, product) {
            commit("removeFromCart", product);
        },
        
        clearCart({ commit }) {
            commit("clearCart");
        },
        incrementQuantity({ commit }, product) {
            commit("incrementQuantity", product);
        },
        decrementQuantity({ commit }, product) {
            commit("decrementQuantity", product);
        },
        
    },
});

export default store;
