import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../features/cartSlice";

const SAMPLE_PRODUCTS = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Keyboard", price: 89 },
    { id: 4, name: "Mouse", price: 49 },
];

function Cart() {
    const dispatch = useDispatch();
    const { items, totalAmount } = useSelector((state) => state.cart);

    const isInCart = (id) => items.some((item) => item.id === id);

    return (
        <div style={styles.container}>
            {/* Products Section */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🛍️ Products</h2>
                <div style={styles.productGrid}>
                    {SAMPLE_PRODUCTS.map((product) => (
                        <div key={product.id} style={styles.productCard}>
                            <span style={styles.productName}>{product.name}</span>
                            <span style={styles.productPrice}>${product.price}</span>
                            <button
                                style={{
                                    ...styles.btn,
                                    ...(isInCart(product.id) ? styles.btnDisabled : styles.btnAdd),
                                }}
                                onClick={() => dispatch(addItem(product))}
                                disabled={isInCart(product.id)}
                            >
                                {isInCart(product.id) ? "✔ Added" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🛒 Cart</h2>
                {items.length === 0 ? (
                    <p style={styles.emptyMsg}>Your cart is empty.</p>
                ) : (
                    <>
                        <ul style={styles.cartList}>
                            {items.map((item) => (
                                <li key={item.id} style={styles.cartItem}>
                                    <span>{item.name}</span>
                                    <span style={styles.productPrice}>${item.price}</span>
                                    <button
                                        style={{ ...styles.btn, ...styles.btnRemove }}
                                        onClick={() => dispatch(removeItem(item.id))}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div style={styles.totalRow}>
                            <strong>Total: ${totalAmount}</strong>
                            <button
                                style={{ ...styles.btn, ...styles.btnClear }}
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
    },
    section: {
        flex: 1,
        minWidth: "280px",
        background: "#f9f9f9",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    sectionTitle: {
        marginTop: 0,
        marginBottom: "16px",
        fontSize: "1.3rem",
    },
    productGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    productCard: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    productName: {
        flex: 1,
        fontWeight: 500,
    },
    productPrice: {
        color: "#555",
        marginRight: "8px",
    },
    btn: {
        padding: "6px 14px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "0.85rem",
        transition: "opacity 0.2s",
    },
    btnAdd: {
        background: "#4CAF50",
        color: "#fff",
    },
    btnDisabled: {
        background: "#ccc",
        color: "#666",
        cursor: "default",
    },
    btnRemove: {
        background: "#f44336",
        color: "#fff",
    },
    btnClear: {
        background: "#ff9800",
        color: "#fff",
    },
    cartList: {
        listStyle: "none",
        padding: 0,
        margin: "0 0 16px 0",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    cartItem: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "#fff",
        borderRadius: "8px",
        padding: "10px 14px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    totalRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "12px",
        borderTop: "1px solid #ddd",
        fontSize: "1.1rem",
    },
    emptyMsg: {
        color: "#999",
        fontStyle: "italic",
    },
};

export default Cart;
