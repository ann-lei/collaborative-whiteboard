import { useRef, useEffect, useState } from "react";
import Toolbar from "./Toolbar";

function Whiteboard() {
    const canvasRef = useRef(null);

    // drawing "pen"
    const contextRef = useRef(null);

    // tracks if mouse is being held down
    const [isDrawing, setIsDrawing] = useState(false);

    // default pen
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(4);

    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d")

        //  the pen's style
        // context.strokeStyle = "black"; 
        // context.lineWidth = 4;         

        context.lineCap = "round"      // pen's tip

        contextRef.current = context;
    }, []);


    useEffect(() => {
        if (!contextRef.current) return;
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = brushSize;
    }, [color, brushSize]);

    
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


    // clear canvas - clean the canvas
    function clearCanvas() {
        const canvas = canvasRef.current;
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
        <>
        <Toolbar
            color = {color}
            setColor = {setColor}
            brushSize = {brushSize}
            setBrushSize = {setBrushSize}
            clearCanvas = {clearCanvas}
        />

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
        </>
    );
}   

export default Whiteboard;