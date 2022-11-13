// import Image from "next/image";
// import MyDocument from "../../../components/pdf-certifiate/index";
// // import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
// import { useEffect, useState } from "react";

// export default function Quiz() {
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="mt-32 py-10 px-5 w-full flex flex-col items-center">
//       {/* <h1>hfjdhfjd</h1>
//       <Image
//         src="/images/certification.png"
//         width={300}
//         height={300}
//         objectFit="cover"
//       /> */}

//       {/* <PDFDownloadLink document={<MyDocument />} fileName="test">
//         <button>download</button>
//       </PDFDownloadLink> */}
//       {isClient && (
//         <div>
//           {/* <PDFDownloadLink document={<MyDocument />} fileName="test">
//             <button>download</button>
//           </PDFDownloadLink> */}
//           hahah
//         </div>
//       )}
//     </div>
//   );
// }

import { jsPDF } from "jspdf";
import Barcode from "./barcode.png";
import html2canvas from "html2canvas";
import Image from "next/image";
const ShippingLabel = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };
  return (
    <>
    
      <div
        className="w-full h-screen border-8 border-primary p-20 text-center"
        id="pdf"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={80}
          objectFit="cover"
        />
        <h1>course title</h1>
        <h1>شهادة إتمام </h1>
        <h1> user </h1>
      </div>
      <button onClick={createPDF} type="button">
        Download
      </button>
    </>
  );
};

export default ShippingLabel;
