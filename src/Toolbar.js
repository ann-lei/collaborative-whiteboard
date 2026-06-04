function Toolbar({ color, setColor, brushSize, setBrushSize, clearCanvas }) {
    return (

        
        <div style = {{

            // position of the toolbar

            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "10px 20px",
            background: "#1e1e1e",
            zIndex: 10,
        }}>



            {/* color picker */}

            <label style = {{
                color: "white",
                fontSize: "14px"
            }}>
                Color: 
                <input
                    type = "color"
                    value = {color}

                    onChange = {(e) => setColor(e.target.value)}
                    style = {{
                        marginLeft: "8px",
                        cursor: "pointer"
                    }}
                />
            </label>


            {/* Brush size slider */}
            <label style = {{
                color: "white",
                fontSize: "14px"
            }}>
                Size {brushSize}px
                <input
                    type = "range"
                    min = "1"
                    max = "50"
                    value = {brushSize}

                    onChange = {(e) => setBrushSize(parseInt(e.target.value))}
                    style = {{
                        marginLeft: "8px"
                    }}
                />
            </label>


            {/* Eraser */}
            <button
                onClick = {() => setColor("#ffffff")}
                style = {{
                    padding: "6px 14px",
                    cursor: "pointer",
                    background: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                }}
            >
                Eraser
            </button>

            
            {/* Clear Board */}
            <button
                onClick = {clearCanvas}
                style = {{
                    padding: "6px 14px",
                    cursor: "pointer",
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                }}
            >
                Clear
            </button>

        </div>
    );
}

export default Toolbar;