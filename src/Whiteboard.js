import useRef from "react"
import useEffect from "react"

function Whitebaord() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);


    return (
        <canvas 
            ref = {canvasRef} 
            style = {{
                display: "block",
                background: "white"
        }}
        />
    );
}   

export default Whitebaord;