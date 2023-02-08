// @ts-nocheck
import React, { useRef, useEffect } from "react";

export default function TextOnImage  ({userName, text })  {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "/images/certificate.jpeg";
    img.crossOrigin= '*';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText(text, 760, 370);
    };
  }, [text]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `${userName}-شهادة.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <>
      <canvas style={{ display: "none" }} ref={canvasRef} />
      <button onClick={handleDownload} className="bg-primary text-white rounded p-3">  تحميل الشهادة</button>
    </>
  );
};