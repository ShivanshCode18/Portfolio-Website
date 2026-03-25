const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('D:/Portfolio/Portfolio-Website/public/Shivansh_Teotia_Resume.pdf'));

// Fonts
const fontRegular = 'Helvetica';
const fontBold = 'Helvetica-Bold';

// Header
doc.font(fontBold).fontSize(24).text('Shivansh Teotia', { align: 'center' });
doc.font(fontRegular).fontSize(10).moveDown(0.5);
doc.text('Email: shivanshteotia1803@gmail.com | Mobile: +91-9079809346', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/shivansh-teotia | GitHub: github.com/ShivanshCode18', { align: 'center' });
doc.moveDown(1.5);

// Divider function
function drawDivider() {
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.5);
}

// SKILLS
doc.font(fontBold).fontSize(14).text('SKILLS');
drawDivider();
doc.font(fontRegular).fontSize(10);
doc.font(fontBold).text('Languages: ', { continued: true }).font(fontRegular).text('C++, Java, C, Python, SQL');
doc.font(fontBold).text('Frameworks: ', { continued: true }).font(fontRegular).text('Numpy, Pandas, Scikit Learn, Matplotlib, TensorFlow, Seaborn, Folium, Keras');
doc.font(fontBold).text('Tools/Platforms: ', { continued: true }).font(fontRegular).text('VS Code, Google Colab, Microsoft Azure, Power BI, Excel, Open Router API, Git, GitHub, MySQL');
doc.font(fontBold).text('Soft Skills: ', { continued: true }).font(fontRegular).text('Leadership, Adaptability, Team Work, Work under Pressure, Communication');
doc.moveDown(1.5);

// EXPERIENCE
doc.font(fontBold).fontSize(14).text('EXPERIENCE');
drawDivider();
doc.fontSize(11).text('Operations Manager', { continued: true }).font(fontRegular).text(', Untangle – Student-led Organization', { continued: true });
doc.text('Aug 2023 – Aug 2024', { align: 'right' });
doc.moveDown(0.2);
doc.fontSize(10);
doc.text('• Managed operations for 10+ events including hackathons, workshops, panel discussions, concerts, and entertainment shows.');
doc.text('• Coordinated with technical, creative, and logistics teams to ensure smooth event execution and high student engagement.');
doc.text('• Streamlined planning processes, reducing event preparation time by 25% and improving on-ground efficiency.');
doc.moveDown(1.5);

// PROJECTS
doc.font(fontBold).fontSize(14).text('PROJECTS');
drawDivider();

function addProject(title, date, points) {
  doc.font(fontBold).fontSize(11).text(title, { continued: true });
  doc.font(fontRegular).text(date, { align: 'right' });
  doc.moveDown(0.2);
  doc.fontSize(10);
  points.forEach(p => doc.text(`• ${p}`));
  doc.moveDown(0.5);
}

addProject('Real Time Social Media ETL Pipeline', 'Dec 2025 – Jan 2026', [
  'Engineered a production-grade ETL pipeline using Python, Apache Airflow, and AWS (EC2, S3) to extract, transform, and store 100K+ tweets daily from the Twitter API for large-scale analytics.',
  'Automated data workflows by deploying Airflow DAGs on AWS EC2, achieving 95%+ scheduled job reliability with robust monitoring, failure handling, and recovery mechanisms.',
  'Architected a scalable, cloud-optimized data infrastructure using Amazon S3, efficiently managing 10GB+ daily unstructured data streams to support downstream processing and analytics.'
]);

addProject('Product Safety Analyzer: Predictive Analytics & ML Project', 'Dec 2025 – Jan 2026', [
  'Built an end-to-end predictive analytics system to assess and forecast product safety risks using historical product, compliance, and incident data to enable proactive risk mitigation.',
  'Performed advanced data preprocessing and feature engineering, including data cleaning, encoding, scaling, and class imbalance handling to enhance model robustness and reliability.',
  'Developed and optimized multiple supervised machine learning models (Logistic Regression, Decision Tree, Random Forest) using cross-validation and hyperparameter tuning, evaluating performance with accuracy, precision, recall, F1-score, and ROC-AUC to drive data-informed decision-making.'
]);

doc.moveDown(1);

// EDUCATION
doc.font(fontBold).fontSize(14).text('EDUCATION');
drawDivider();
doc.fontSize(11).text('Lovely Professional University, Punjab, India', { continued: true });
doc.font(fontRegular).text('Aug 2023 – Present', { align: 'right' });
doc.fontSize(10).text('Bachelor of Technology in Computer Science and Engineering; CGPA: 7.26');
doc.moveDown(0.5);

doc.font(fontBold).fontSize(11).text('Lord Buddha Public School, Kota, Rajasthan, India', { continued: true });
doc.font(fontRegular).text('Mar 2021 – Jun 2022', { align: 'right' });
doc.fontSize(10).text('Higher Secondary Education');

doc.end();
console.log('PDF generated successfully!');
