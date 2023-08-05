// @ts-nocheck
import React, { useRef, useEffect, useState } from "react";

export default function TextOnImage({
  userName,
  text,
  courseName,
  instructor,
}) {
  const canvasRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "/images/certificate.jpeg";
    img.crossOrigin = "*";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = "bolder 40px sans-serif";
      ctx.fillStyle = "black";

      ctx.textAlign = "center";
      ctx.fillText(userName ?? "user Test", 635, 370);

      ctx.font = "bold 40px greta";
      ctx.fillStyle = "#281e54";

      ctx.fillText(courseName, 635, 470);

      ctx.fillText(instructor?.firstName + instructor?.lastName, 635, 560);

      ctx.font = "normal 40px greta";
      ctx.fillText(instructor.post.name, 635, 600);
      // ctx.fillText(text, 760, 370);
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
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
      {isLoading ? (
        <div
          className="mt-3 sm:col-span-2 text-lg font-semibold
            h-14 w-full text-white rounded-lg
            px-6 py-3  bg-[url('/images/loading.gif')] bg-no-repeat bg-center"
        ></div>
      ) : (
        <button
          onClick={handleDownload}
          className="bg-primary text-white rounded p-3"
        >
          تحميل الشهادة
        </button>
      )}
    </>
  );
}
