const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const jsPDF = require('jspdf');

export default async function generateReceipt(data: {
  '{{name}}': string;
  '{{date}}': string;
  '{{receiptId}}': string;
}) {
  const pdfBytes =fs.readFileSync(
    path.join(process.cwd(), 'public/templates/receipt_template.pdf')
  );
  // Read the PDF file
  // Create a new jsPDF instance
  let pdf = new jsPDF();

  // Create a new PDF document
  pdf.load(pdfBytes);

 
  // Get the number of pages in the PDF
  const numPages = pdf.getNumberOfPages();

  // Loop through each page
  for (let i = 1; i <= numPages; i++) {
    // Get the current page's text content
    const pageText = pdf.getTextContent(i);
    Object.entries(data).forEach((val) => {
      if (pageText.items.includes(val[0])) {
        // Loop through each item in the text content
        pageText.items.forEach((textItem: any) => {
          // Check if the text matches the word to replace
          if (textItem.str === val[0]) {
            // Replace the text with the desired content
            textItem.str = val[1];
          }
        });
      }
    });

    // Set the modified text content
    pdf.setTextContent(i, pageText);
  }

  // Save the modified PDF
  fs.writeFileSync('modified_receipt.pdf', pdf.output());
 return
}
