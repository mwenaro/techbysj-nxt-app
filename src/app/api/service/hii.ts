const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

export const generatePDF = async (
  host: string = 'http://localhost:3000'
) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load the HTML template
    let htmlTemplate = fs.readFileSync(
      path.join(process.cwd(), 'public/templates/receipt.html'),
      'utf-8'
    );

    const refNo = '3424';
    const date = '14th June, 2023';
    const name = 'Name HERE';

    let data = {
      '{{refNo}}': refNo,
      '{{date}}': date,
      '{{name}}': name,
      '{{qty}}': 1,
      '{{price}}': '9,000',
      '{{total}}': '9,000',
      '{{course}}': 'Web Development',
      '{{public_dir}}': host || path.join(process.cwd(), 'public'),
    };

    // Replace the desired text using a regular expression or string manipulation
    while (htmlTemplate.toString().indexOf('{{') !== -1) {
      Object.entries(data).forEach((val) => {
        htmlTemplate = htmlTemplate.replace(val[0], val[1]);
      });
    }

    await page.setContent(htmlTemplate);
    let file = `${name}-${new Date().getTime()}.pdf`;
    // Generate PDF from HTML
    await page.pdf({
      path: file,
      format: 'Letter',
    });

    await browser.close();
    let f = await fs.readFile(file);
    console.log('PDF created successfully');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
   
  }
};
