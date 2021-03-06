import {useRef, useEffect} from "react";

const isClickedInside = (e, element) => {
  let node = e.target;
  while (node) {
    if (node === element) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

const Popup = ({position, seatId, seatPrice, onClose }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const onClick = e => {
      if (!isClickedInside(e, containerRef.current)) {
        onClose();
      }
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        
        position: "absolute",
        top: position.y + 40 + "px",
        left: position.x + 40 + "px",
        padding: "10px",
        borderRadius: "3px",
        boxShadow: "0 0 5px black",
        zIndex: 10,
        backgroundColor: "white"
      }}
    >
      <div>Seat {seatId}</div>

      <div>Price: {seatPrice}</div>

    </div>
  );
};

export default Popup;