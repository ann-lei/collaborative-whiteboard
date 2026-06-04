import { useRef, useEffect, useState } from "react";

function Whiteboard() {
    const canvasRef = useRef(null);

    // drawing "pen"
    const contextRef = useRef(null);
    // tracks if mouse is being held down
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d")

        // the pen's style
        context.strokeStyle = "black"; // color
        context.lineWidth = 4;         // thickness
        context.lineCap = "round"      // pen's tip

        contextRef.current = context;
    }, []);

    // start drawing function - held the mouse button down
    function startDrawing(e) {
        contextRef.current.beginPath();
        contextRef.current.moveTo(e.clientX, e.clientY)

        setIsDrawing(true);
    }

    // draw function - the mouse moves
    function draw(e) {
        if (!isDrawing) return;

        contextRef.current.lineTo(e.clientX, e.clientY);

        contextRef.current.stroke()
    }

    // stop drawing function - releases mouse button
    function stopDrawing() {
        contextRef.current.closePath();

        setIsDrawing(false);
    }

    return (
        <canvas 
            ref = {canvasRef} 
            style = {{
                display: "block",
                background: "white"
        }}

        // mouse events
        onMouseDown = {startDrawing}
        onMouseMove = {draw}
        onMouseUp = {stopDrawing}
        onMouseLeave = {stopDrawing}
        />
    );
}   

export default Whiteboard;