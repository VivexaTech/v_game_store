export default function Footer() {
    return (
        <footer
            className="text-center text-muted py-5 mt-5"
            style={{ backgroundColor: "#08080a", borderTop: "1px solid #222" }}
        >
            <div className="container">
                <h3 style={{ color: "var(--accent-color)" }}>V Game Store</h3>
                
                <p className="mb-4">
                    Your source for the best digital entertainment.
                </p>

                <p className="small">
                    &copy; 2025 V Game Store Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
