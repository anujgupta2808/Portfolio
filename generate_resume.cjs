const fs = require('fs');
const path = require('path');

function createPDF(outputPath) {
  const streamBody = `BT
/F2 22 Tf
0.9 0.1 0.1 rg
50 780 Td
(ANUJ GUPTA) Tj
0 -18 Td
/F1 11 Tf
0.2 0.2 0.2 rg
(Frontend Developer | SYBSc IT Student | Mumbai, India) Tj
0 -15 Td
(Email: anujgupta26610812@gmail.com | Phone: +91 8779747746 | GitHub: github.com/anujgupta2808) Tj
0 -22 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(SUMMARY) Tj
0 -14 Td
/F1 9.5 Tf
0 0 0 rg
(Dedicated and project-driven student developer pursuing SYBSc IT at Thakur College of Science and Commerce.) Tj
0 -12 Td
(Passionate about web development, responsive architectures, and building digital solutions.) Tj
0 -20 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(EDUCATION) Tj
0 -14 Td
/F2 10 Tf
0 0 0 rg
(SYBSc IT - Thakur College of Science and Commerce, Mumbai University) Tj
0 -12 Td
/F1 9.5 Tf
(Status: Currently Pursuing \\(2024 - Present\\)) Tj
0 -14 Td
/F2 10 Tf
(FYBSc IT - Mumbai University) Tj
0 -12 Td
/F1 9.5 Tf
(Score: 8.73 SGPA) Tj
0 -14 Td
/F2 10 Tf
(HSC 12th Commerce - Maharashtra State Board) Tj
0 -12 Td
/F1 9.5 Tf
(Score: 83.67%) Tj
0 -14 Td
/F2 10 Tf
(SSC 10th - Maharashtra State Board) Tj
0 -12 Td
/F1 9.5 Tf
(Score: 77%) Tj
0 -20 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(TECHNICAL SKILLS) Tj
0 -14 Td
/F1 9.5 Tf
0 0 0 rg
(Web Development: HTML5, CSS3, JavaScript, React, Tailwind CSS, GSAP) Tj
0 -12 Td
(Programming Languages: Python, Java, C / C++) Tj
0 -12 Td
(Databases & Tools: MySQL, Firebase, Git, GitHub, VS Code, Antigravity) Tj
0 -12 Td
(Specialized: Graphic Design, Advanced Excel, Advanced Tally ERP, PC Hardware Assembly) Tj
0 -20 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(FEATURED PROJECTS) Tj
0 -14 Td
/F2 10 Tf
0 0 0 rg
(1. ExpenseTracker - Personal Finance Management \\(JavaScript, HTML5, CSS3, LocalStorage\\)) Tj
0 -12 Td
/F1 9.5 Tf
(- Web application for logging expenses, category tagging, budgeting, and spending summaries.) Tj
0 -14 Td
/F2 10 Tf
(2. DocuServe - Document Services \\(HTML5, CSS3, JavaScript\\)) Tj
0 -12 Td
/F1 9.5 Tf
(- Document management system with file format conversion and spreadsheet data analysis.) Tj
0 -14 Td
/F2 10 Tf
(3. Procelya-AI - AI Workflow Detection & Diagrams \\(Python, AI/ML, NLP\\)) Tj
0 -12 Td
/F1 9.5 Tf
(- AI system for business workflow bottleneck detection and automated visual diagram generation.) Tj
0 -14 Td
/F2 10 Tf
(4. ClassCore - Student Management Portal \\(HTML5, CSS3, JavaScript\\)) Tj
0 -12 Td
/F1 9.5 Tf
(- Full-featured portal with login flow, student database search, attendance tracking, and CSV export.) Tj
0 -14 Td
/F2 10 Tf
(5. Marvel Studios - ECHOES OF STRUGGLE \\(HTML5, CSS3, JS, GSAP, Locomotive Scroll\\)) Tj
0 -12 Td
/F1 9.5 Tf
(- Cinematic storytelling web experience with custom audio and high-performance GSAP animations.) Tj
0 -20 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(ACHIEVEMENTS & CERTIFICATIONS) Tj
0 -14 Td
/F1 9.5 Tf
0 0 0 rg
(- Participation Certificate - Skillinf Portfolio Design Hackathon \\(2026\\)) Tj
0 -12 Td
(- Certificate of Completion - Web Development \\(2025\\)) Tj
0 -12 Td
(- Certificate of Completion - Python: Basic to Advanced \\(2025\\)) Tj
0 -12 Td
(- Certificate of Completion - Java Basics \\(2025\\)) Tj
0 -20 Td
/F2 13 Tf
0.9 0.1 0.1 rg
(LANGUAGES) Tj
0 -14 Td
/F1 9.5 Tf
0 0 0 rg
(English \\(Fluent\\), Hindi \\(Native\\), Marathi \\(Working Proficiency\\)) Tj
ET`;

  const streamLength = Buffer.byteLength(streamBody, 'utf8');

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n';
  const obj4 = `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamBody}\nendstream\nendobj\n`;
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const obj6 = '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';

  const header = '%PDF-1.4\n';
  const offset1 = Buffer.byteLength(header, 'utf8');
  const offset2 = offset1 + Buffer.byteLength(obj1, 'utf8');
  const offset3 = offset2 + Buffer.byteLength(obj2, 'utf8');
  const offset4 = offset3 + Buffer.byteLength(obj3, 'utf8');
  const offset5 = offset4 + Buffer.byteLength(obj4, 'utf8');
  const offset6 = offset5 + Buffer.byteLength(obj5, 'utf8');
  const xrefOffset = offset6 + Buffer.byteLength(obj6, 'utf8');

  function pad(n) {
    return String(n).padStart(10, '0');
  }

  const xref = `xref\n0 7\n0000000000 65535 f \n${pad(offset1)} 00000 n \n${pad(offset2)} 00000 n \n${pad(offset3)} 00000 n \n${pad(offset4)} 00000 n \n${pad(offset5)} 00000 n \n${pad(offset6)} 00000 n \ntrailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const fullPdf = header + obj1 + obj2 + obj3 + obj4 + obj5 + obj6 + xref;
  fs.writeFileSync(outputPath, fullPdf, 'binary');
  console.log('Resume PDF updated successfully at:', outputPath);
}

const target = path.resolve('public/resume.pdf');
createPDF(target);
