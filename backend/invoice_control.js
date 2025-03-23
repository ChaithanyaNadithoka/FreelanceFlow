import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateInvoice = (req, res) => {
    const { clientName, amount, description } = req.body;

    const doc = new PDFDocument();
    const filename = `invoice-${Date.now()}.pdf`;
    doc.pipe(fs.createWriteStream(`./invoices/${filename}`));

    doc.fontSize(18).text(`Invoice for ${clientName}`, 100, 100);
    doc.fontSize(12).text(`Amount: $${amount}`, 100, 150);
    doc.fontSize(12).text(`Description: ${description}`, 100, 200);

    doc.end();
    res.json({ message: 'Invoice generated', filename });
};
