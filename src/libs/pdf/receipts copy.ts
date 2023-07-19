const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const QRCode = require('qrcode');
const fs = require('fs').promises;
const path = require('path');

export default async function generateReceipt(
  data :{
    "{{name}}":string, "{{date}}":string, "{{receiptId}}":string
  }
) {
  // Load an existing PDF template
  //   const pdfBytes = await fs.readFile('../../../public/templates/receipt_template.pdf');
  //   const pdfBytes = await fs.readFile(path.join(__dirname, 'pdf.pdf'));
  const pdfBytes = await fs.readFile(
    path.join(process.cwd(), 'public/templates/receipt_template.pdf')
  );

  // Create a new PDF document
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Embed a standard font (optional)
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the PDF
  const pages = pdfDoc.getPages();
  const page = pages[0];

  // Set the font size and color
  page.setFont(font);
  page.setFontSize(12);
  //   page.setTextColor(rgb(0, 0, 0));
  const { width, height } = page.getSize();
  const {
    x,
    y,
    width: textWidth,
    height: textHeight,
//   } = page.getBoundingBox().normalize();
  } = page;

  const Replace = async (targetText: string, replacementText: string) => {
    // const textContent = await page.getTextContent();
    const textContent = await page.getOperatorList().map((op:any)=>op.fn).join('');

    // for (const text of textContent.items) {
    for (const text of textContent) {
      if (text.str === targetText) {
        const [xMin, yMin, xMax, yMax] = text.transform.transform(
          x,
          y,
          width,
          height
        );

        page.drawText(replacementText, {
          x: xMin,
          y: yMin,
          width: xMax - xMin,
          height: yMax - yMin,
          size: 12,
          color: rgb(0, 0, 0),
        });
      }
    }
  };
Object.entries(data).forEach(val=>Replace(val[0], val[1]))

  // Replace the placeholders with actual values
//   page.drawText(receiptId, { x: 100, y: 500 });
//   page.drawText(date, { x: 100, y: 480 });
//   page.drawText(details, { x: 100, y: 460 });

  // Generate the QR code image
  const qrCodeData = `${data["{{receiptId}}"]} ${data["{{date}}"]} ${data["{{name}}"]}`;
  const qrCodeImage = await QRCode.toBuffer(qrCodeData);

  // Embed the QR code image in the PDF
  const qrCodeImageEmbed = await pdfDoc.embedPng(qrCodeImage);
  const qrCodeDims = qrCodeImageEmbed.scale(0.5); // Adjust the scale as needed
  page.drawImage(qrCodeImageEmbed, {
    x: 400,
    y: 300,
    width: qrCodeDims.width,
    height: qrCodeDims.height,
  });

  // Save the modified PDF document as a new PDF
  const modifiedPdfBytes = await pdfDoc.save();

  // Write the modified PDF to a file or send it as a response
  await fs.writeFile('modified_receipt.pdf', modifiedPdfBytes);
}
