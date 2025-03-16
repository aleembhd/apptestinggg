const students = [
  { rollNumber: "22WJ1A04R7", name: "SANDYAPAGA RAJU", parentPhone: "8978837039", parentName: "", studentPhone: "9030218569" },
  { rollNumber: "22WJ1A04R8", name: "SARAN KUMAR KHADKA", parentPhone: "9121612705", parentName: "", studentPhone: "9121612705" },
  { rollNumber: "22WJ1A04R9", name: "SEELAM MAMATHA", parentPhone: "9490836100", parentName: "", studentPhone: "8919280326" },
  { rollNumber: "22WJ1A04T0", name: "SEEPATHI DEEKSHITH", parentPhone: "9989729833", parentName: "", studentPhone: "8106615359" },
  { rollNumber: "22WJ1A04T1", name: "SHAIK ABDUL ALEEM", parentPhone: "9705607128", parentName: "", studentPhone: "7672029401" },
  { rollNumber: "22WJ1A04T2", name: "SHAIK ABDUL SAMAD", parentPhone: "9553769859", parentName: "", studentPhone: "9573525801" },
  { rollNumber: "22WJ1A04T4", name: "SHAIK AMEESHA", parentPhone: "9951625993", parentName: "", studentPhone: "7842123625" },
  { rollNumber: "22WJ1A04T5", name: "SHAIK AYAAZ", parentPhone: "9848163955", parentName: "", studentPhone: "7013877447" },
  { rollNumber: "22WJ1A04T6", name: "SHAIK NASIMA BEGUM", parentPhone: "9010660442", parentName: "", studentPhone: "9618670442" },
  { rollNumber: "22WJ1A04T7", name: "SHAIK RAFI", parentPhone: "9550463020", parentName: "", studentPhone: "9100171266" },
  { rollNumber: "22WJ1A04T8", name: "SHAIK SAIFAN", parentPhone: "9912737723", parentName: "", studentPhone: "7569431620" },
  { rollNumber: "22WJ1A04T9", name: "SHAIK SAJITHA", parentPhone: "9912650109", parentName: "", studentPhone: "9392558728" },
  { rollNumber: "22WJ1A04U1", name: "SHETTI AVINASH", parentPhone: "7816084535", parentName: "", studentPhone: "9010752838" },
  { rollNumber: "22WJ1A04U2", name: "SHIVANNAGARI NAVYA", parentPhone: "9701398364", parentName: "", studentPhone: "7032913860" },
  { rollNumber: "22WJ1A04U3", name: "SHYAMALA RAMYA", parentPhone: "8008941331", parentName: "", studentPhone: "9063712685" },
  { rollNumber: "22WJ1A04U4", name: "SIDDI SHIVA PRASAD", parentPhone: "9441958845", parentName: "", studentPhone: "9441720877" },
  { rollNumber: "22WJ1A04U5", name: "SIRIGIRI MANISHA", parentPhone: "8247288947", parentName: "", studentPhone: "9848236466" },
  { rollNumber: "22WJ1A04U6", name: "SIRIGIRI SRIKAR REDDY", parentPhone: "9666066448", parentName: "", studentPhone: "9908367647" },
  { rollNumber: "22WJ1A04U7", name: "SIRIMALLE PAVAN KUMAR", parentPhone: "9652388601", parentName: "", studentPhone: "9966121185" },
  { rollNumber: "22WJ1A04U8", name: "SOUDALA SANDEEP", parentPhone: "6302561737", parentName: "", studentPhone: "99491999784" },
  { rollNumber: "22WJ1A04U9", name: "SRIPATHI YUGENDER REDDY", parentPhone: "8341510305", parentName: "", studentPhone: "8374160108" },
  { rollNumber: "22WJ1A04V0", name: "SUDI SRINIVAS", parentPhone: "9491461440", parentName: "", studentPhone: "8328004390" },
  { rollNumber: "22WJ1A04V1", name: "SUKHVINDERSINGH NAWAB", parentPhone: "8007001413", parentName: "", studentPhone: "9028837713" },
  { rollNumber: "22WJ1A04V3", name: "SURA DIVYA", parentPhone: "6281584474", parentName: "", studentPhone: "8688599068" },
  { rollNumber: "22WJ1A04V4", name: "SURA RISHINADH", parentPhone: "9505228805", parentName: "", studentPhone: "9063838805" },
  { rollNumber: "22WJ1A04V5", name: "T TEJA NAIDU", parentPhone: "9618732784", parentName: "", studentPhone: "9030857637" },
  { rollNumber: "22WJ1A04V6", name: "TALARI UDAY KIRAN", parentPhone: "9848502428", parentName: "", studentPhone: "9347069874" },
  { rollNumber: "22WJ1A04V7", name: "TALUGONDA SAI DINESH", parentPhone: "8099602283", parentName: "", studentPhone: "9912049010" },
  { rollNumber: "22WJ1A04V8", name: "TEDDU UDAY KUMAR", parentPhone: "9849682346", parentName: "", studentPhone: "7989439316" },
  { rollNumber: "22WJ1A04V9", name: "THADAGONI THARUN GOUD", parentPhone: "7989346862", parentName: "", studentPhone: "9014979331" },
  { rollNumber: "22WJ1A04W0", name: "THADEM KRISHNA KARTHIK", parentPhone: "8374374634", parentName: "", studentPhone: "8374985034" },
  { rollNumber: "22WJ1A04W1", name: "THADISHETTI SHIVA PRASAD", parentPhone: "9441382613", parentName: "", studentPhone: "6305263268" },
  { rollNumber: "22WJ1A04W2", name: "THAMMINENI YAMUNA", parentPhone: "9398219854", parentName: "", studentPhone: "9390226041" },
  { rollNumber: "22WJ1A04W3", name: "THOTA ANUSHA", parentPhone: "9705648219", parentName: "", studentPhone: "9553852205" },
  { rollNumber: "22WJ1A04W4", name: "TIRUNAGARI PUSHPA SHREE", parentPhone: "9866231066", parentName: "", studentPhone: "8639418362" },
  { rollNumber: "22WJ1A04W5", name: "UPADHYAYULA VYSHNAVI", parentPhone: "6301929737", parentName: "", studentPhone: "9573055369" },
  { rollNumber: "22WJ1A04W6", name: "UPPARI SHUBHAM SAGAR", parentPhone: "7032446557", parentName: "", studentPhone: "9959139770" },
  { rollNumber: "22WJ1A04W7", name: "KHATROTH SUCHITRA", parentPhone: "9440828043", parentName: "", studentPhone: "9493001181" },
  { rollNumber: "22WJ1A04W8", name: "V RAJESHWAR REDDY", parentPhone: "8179741326", parentName: "", studentPhone: "8374030148" },
  { rollNumber: "22WJ1A04W9", name: "V SRAVANI", parentPhone: "9573172426", parentName: "", studentPhone: "9573737449" },
  { rollNumber: "22WJ1A04X0", name: "VADITYA SATISH", parentPhone: "9705059607", parentName: "", studentPhone: "7893963624" },
  { rollNumber: "22WJ1A04X1", name: "VADTHYAVATH SIDDU", parentPhone: "7660924855", parentName: "", studentPhone: "9391048566" },
  { rollNumber: "22WJ1A04X2", name: "VALLAPU SANDEEP", parentPhone: "9177842945", parentName: "", studentPhone: "9347986782" },
  { rollNumber: "22WJ1A04X3", name: "VALLOJU KARTHIK", parentPhone: "9618355585", parentName: "", studentPhone: "9493556005" },
  { rollNumber: "22WJ1A04X4", name: "VARAKANTHAM SREE VARSHITH REDDY", parentPhone: "9392232327", parentName: "", studentPhone: "6304081291" },
  { rollNumber: "22WJ1A04X5", name: "VARTYAVATH PRAVEEN KUMAR", parentPhone: "9010557448", parentName: "", studentPhone: "7893561311" },
  { rollNumber: "22WJ1A04X6", name: "VEEREDDY NAVYA", parentPhone: "9704321863", parentName: "", studentPhone: "9515665285" },
  { rollNumber: "22WJ1A04X7", name: "VELJARLA HARISH", parentPhone: "9666515042", parentName: "", studentPhone: "8309434430" },
  { rollNumber: "22WJ1A04X8", name: "VELPULA KARTHIK", parentPhone: "9550378570", parentName: "", studentPhone: "7842537127" },
  { rollNumber: "22WJ1A04X9", name: "VEMIREDDY YASHWANTH SAI", parentPhone: "9848129221", parentName: "", studentPhone: "9014624508" },
  { rollNumber: "22WJ1A04Y0", name: "VEMULA RAJESH", parentPhone: "8978979144", parentName: "", studentPhone: "7337482843" },
  { rollNumber: "22WJ1A04Y1", name: "VEMULA SAKETH GOUD", parentPhone: "9441761272", parentName: "", studentPhone: "6303276425" },
  { rollNumber: "22WJ1A04Y2", name: "VODNALA LASYAPRIYA", parentPhone: "9100587100", parentName: "", studentPhone: "6302660657" },
  { rollNumber: "22WJ1A04Y3", name: "WANAPARTHI MADHU KUMAR", parentPhone: "9652762272", parentName: "", studentPhone: "7893866451" },
  { rollNumber: "22WJ1A04Y4", name: "YADARI RAMANJANEYULU", parentPhone: "9985458239", parentName: "", studentPhone: "9392877359" },
  { rollNumber: "22WJ1A04Y7", name: "NETHALA KAVERI", parentPhone: "9182810728", parentName: "", studentPhone: "7989621814" },
  { rollNumber: "22WJ1A04Y8", name: "YAMPALLA HARISH KUMAR REDDY", parentPhone: "9701860670", parentName: "", studentPhone: "6300454238" },
  { rollNumber: "22WJ1A04Z0", name: "AVULA SHIVAJI", parentPhone: "9010762452", parentName: "", studentPhone: "9010762452" },
  { rollNumber: "22WJ1A04Z1", name: "KONIDINA VEERA NAGA SANTHOSH", parentPhone: "9000851693", parentName: "", studentPhone: "7989935721" },
  { rollNumber: "21WJ1A0455", name: "CHENNURI SAI TEJA", parentPhone: "7382732878", parentName: "", studentPhone: "7382732878" },
  { rollNumber: "23WJ5A0427", name: "SOUDOJU UDAY KIRAN", parentPhone: "9989516436", parentName: "", studentPhone: "7569639641" },
  { rollNumber: "23WJ5A0428", name: "TEKUMATLA SRIVIDYA", parentPhone: "9704893198", parentName: "", studentPhone: "6303132341" },
  { rollNumber: "23WJ5A0429", name: "THATIKANTI NAVEENKUMAR", parentPhone: "9701782801", parentName: "", studentPhone: "7893758110" },
  { rollNumber: "23WJ5A0430", name: "THUDUM VIDHYA", parentPhone: "9381606325", parentName: "", studentPhone: "7569721009" },
  { rollNumber: "23WJ5A0431", name: "VADDE SANDEEP", parentPhone: "6305944125", parentName: "", studentPhone: "7013043855" },
  { rollNumber: "23WJ5A0432", name: "VARANASI CHARAN RAJ", parentPhone: "9290560893", parentName: "", studentPhone: "8074934643" },
  { rollNumber: "23WJ5A0433", name: "YANAM JHANSI RANI", parentPhone: "9963811035", parentName: "", studentPhone: "9704397343" }
];
   
   let messageLogs = [];
   
   // FACULTY CONFIGURATION
   // Change this value when deploying to a different faculty
   const FACULTY_NAME = "y_srinivasa_rao";
   const DISPLAY_FACULTY_NAME = "Y. Srinivasa Rao";
   
   // Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCs1Wgew-Y1hcY8xIUm9uFagdeByDTDGU0",
    authDomain: "collegeapp-59309.firebaseapp.com",
    projectId: "collegeapp-59309",
    storageBucket: "collegeapp-59309.firebasestorage.app",
    messagingSenderId: "298826677970",
    appId: "1:298826677970:web:3989fed84dd5bb4d73f70b"
  };
  
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Get a reference to the database service
   const database = firebase.database();
   
   // Replace localStorageDatabase with firebaseDatabase
   const firebaseDatabase = {
     saveMessage: function (log) {
       // Always save under the configured faculty name
       return database.ref(`faculty/${FACULTY_NAME}`).push(log);
     },
     getAllMessages: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const messages = [];
           snapshot.forEach(childSnapshot => {
             messages.push(childSnapshot.val());
           });
           return messages;
         });
     },
     cleanupOldMessages: function () {
       const oneMonthAgo = new Date();
       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
       
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const updates = {};
           snapshot.forEach(childSnapshot => {
             const message = childSnapshot.val();
             if (new Date(message.timestamp) <= oneMonthAgo) {
               updates[childSnapshot.key] = null;
             }
           });
           return database.ref(`faculty/${FACULTY_NAME}`).update(updates);
         });
     },
     clearAllLogs: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).remove();
     }
   };
   
   document.addEventListener('DOMContentLoaded', function () {
     fetchMessagesFromServer();
     periodicCleanup();
     setupEventListeners();
   });
   
   function fetchMessagesFromServer() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         messageLogs = messages;
         updateMessageLogs();
       })
       .catch(error => console.error('Error fetching messages:', error));
   }
   
   function periodicCleanup() {
     firebaseDatabase.cleanupOldMessages()
       .then(() => console.log('Old messages cleaned up'))
       .catch(error => console.error('Error cleaning up messages:', error));
   }
   
   function setupEventListeners() {
     const searchBtn = document.getElementById('searchBtn');
     if (searchBtn) searchBtn.addEventListener('click', toggleSearch);
   
     const whatsappParentBtn = document.getElementById('whatsappParentBtn');
     if (whatsappParentBtn) {
       whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
     }
   
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     if (sendCustomMessageBtn) {
       sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
     }
   
     const printBtn = document.getElementById('printBtn');
     if (printBtn) printBtn.addEventListener('click', openPrintModal);
   
     const closeModalBtn = document.getElementById('closeModal');
     if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);
   
     const printPreviewBtn = document.getElementById('printPreviewBtn');
     if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);
   
     const clearLogsBtn = document.getElementById('clearLogsBtn');
     if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);
   
     // Initialize date inputs with current date range
     const today = new Date();
     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
   
     const startDateInput = document.getElementById('startDate');
     const endDateInput = document.getElementById('endDate');
     if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
     if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];
   
     const exportLogsBtn = document.getElementById('exportLogsBtn');
     if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);
   
     const studentsBtn = document.getElementById('studentsBtn');
     if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
   
     // Add event listener for the new print button
     const newPrintBtn = document.getElementById('newPrintBtn');
     if (newPrintBtn) newPrintBtn.addEventListener('click', openPrintModal);
   
     const allParentsBtn = document.getElementById('allParentsBtn');
     if (allParentsBtn) allParentsBtn.addEventListener('click', toggleBulkMessageForm);
   
     const bulkMessageContent = document.getElementById('bulkMessageContent');
     if (bulkMessageContent) {
       bulkMessageContent.addEventListener('input', saveBulkMessage);
       loadBulkMessage(); // Load the saved message when the page loads
     }
  
     const dialNumberBtn = document.getElementById('dialNumberBtn');
     if (dialNumberBtn) dialNumberBtn.addEventListener('click', openDialPad);
   }
   
   function toggleSearch() {
     const profileCard = document.getElementById('profileCard');
     if (profileCard.style.display === 'none') {
       searchStudent();
     } else {
       profileCard.style.display = 'none';
     }
   }
   
   function toggleWhatsAppParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
       customMessageArea.style.display = 'block';
     } else {
       customMessageArea.style.display = 'none';
     }
   }
   
   function searchStudent() {
     const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
     const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
     const profileCard = document.getElementById('profileCard');
   
     // Hide the profile card first
     profileCard.style.display = 'none';
   
     if (student) {
       document.getElementById('studentName').textContent = student.name;
       document.getElementById('studentRoll').textContent = student.rollNumber;
       document.getElementById('parentName').textContent = student.parentName || 'Not available';
       document.getElementById('parentPhone').textContent = student.parentPhone;
       document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
   
       profileCard.style.display = 'block';
       profileCard.classList.add('fade-in');
     } else {
       alert('Student not found. Please check the roll number and try again.');
     }
   }
   
   function toggleBulkMessageForm() {
     const bulkMessageForm = document.getElementById('bulkMessageForm');
     if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
       bulkMessageForm.style.display = 'block';
       bulkMessageForm.classList.add('fade-in');
       document.getElementById('bulkMessageContent').value = ''; // Clear previous message
     } else {
       bulkMessageForm.style.display = 'none';
     }
   }
   
   function toggleCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     if (crProfiles.style.display === 'none') {
       showCRProfiles();
       crProfiles.style.display = 'block';
       crProfiles.classList.add('fade-in');
     } else {
       crProfiles.style.display = 'none';
     }
   }
   
   function showCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     crProfiles.innerHTML = ''; // Clear existing profiles
   
     const crs = [
      { name: 'YASHWANTH SAI', rollNumber: '22WJ1A04X9', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'SANTHOSH', rollNumber: '22WJ1A04Z1', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'PUSHPA SHREE', rollNumber: '22WJ1A04W4', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'ANUSHA', rollNumber: '22WJ1A04W3', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    ];
   
     crs.forEach(cr => {
       const profileCard = document.createElement('div');
       profileCard.className = 'profile-card cr-card';
       profileCard.innerHTML = `
         <div class="cr-info">
           <h3>${cr.name}</h3>
           <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
           <p><strong>Email:</strong> ${cr.email}</p>
           <button onclick="callCR('${cr.rollNumber}')">Call</button>
           <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
         </div>
       `;
       crProfiles.appendChild(profileCard);
     });
   }
   
   function openPrintModal() {
     document.getElementById('printModal').style.display = 'block';
   }
   
   function closePrintModal() {
     document.getElementById('printModal').style.display = 'none';
   }
   
   function filterData() {
     const startDate = new Date(document.getElementById('startDate').value);
     const endDate = new Date(document.getElementById('endDate').value);
     endDate.setHours(23, 59, 59, 999); // Set to end of day

     // Change this to use faculty-specific path
     return firebase.database().ref(`faculty/${FACULTY_NAME}`).once('value')
       .then(snapshot => {
         const messages = [];
         snapshot.forEach(childSnapshot => {
           const message = childSnapshot.val();
           const messageDate = new Date(message.timestamp);
           
           // Ensure recipient is always 10 digits
           if (message.recipient && message.recipient.startsWith('+91')) {
             message.recipient = message.recipient.slice(3);
           }
           
           if (messageDate >= startDate && messageDate <= endDate) {
             messages.push(message);
           }
         });
         
         // Sort messages by timestamp (newest first)
         messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
         
         return messages;
       });
   }
   
   function generatePrintableTable(data) {
    let tableHtml = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p>Message Logs Report</p>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Parent Name</th>
            <th style="width: 25%;">Message</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    let currentDate = '';
    data.forEach(log => {
      const date = new Date(log.timestamp);
      const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const highlightClass = dateString !== currentDate ? 'highlight' : '';
      currentDate = dateString;
  
      const formattedPhone = log.recipient ? log.recipient.slice(-10) : 'N/A';
      tableHtml += `
        <tr class="${highlightClass}">
          <td>${dateString}</td>
          <td>${log.sender || 'N/A'}</td>
          <td>${formattedPhone}</td>
          <td>${log.studentName || 'N/A'}</td>
          <td>${log.studentRoll || 'N/A'}</td>
          <td>${log.parentName || 'N/A'}</td>
          <td style="width: 25%;">${log.message || 'N/A'}</td>
          <td>${log.status || 'N/A'}</td>
          <td>${log.platform || 'N/A'}</td>
          <td>${log.duration || 'N/A'}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 20px;">
        <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
      </div>
    `;
  
    return tableHtml;
  }
   
   function showPrintPreview() {
     filterData().then(filteredData => {
       const printContent = generatePrintableTable(filteredData);
       const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
       const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
       // Open a new window for the print preview
       const printWindow = window.open('', '_blank');
       printWindow.document.write(`
         <html>
           <head>
             <title>Message Logs ${startDate} to ${endDate}</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 margin: 0;
                 padding: 20px;
               }
               .header, .footer {
                 text-align: center;
                 margin-bottom: 20px;
               }
               table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
               }
               th, td {
                 border: 1px solid #ddd;
                 padding: 8px;
                 text-align: left;
                 font-size: 12px;
               }
               th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
               .highlight {
                 background-color: #ffffd0;
               }
               td:nth-child(7) {
                 width: 25%;
                 word-break: break-word;
               }
               @media print {
                 @page {
                   size: A4 landscape;
                   margin: 10mm;
                 }
                 body {
                   padding: 0;
                 }
                 .no-print {
                   display: none;
                 }
               }
             </style>
           </head>
           <body>
             <div class="header">
             
               <p>Date Range: ${startDate} to ${endDate}</p>
             </div>
             ${printContent}
             <div class="footer">
               <p>© 2024 Croxton Technologies Hyderabad India. All rights reserved.</p>
             </div>
             <div class="no-print" style="text-align: center; margin-top: 20px;">
               <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
               <button onclick="downloadCSV()" style="background-color: #008CBA; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Download CSV</button>
             </div>
             <script>
               function downloadCSV() {
                 const rows = document.querySelectorAll('table tr');
                 let csv = [];
                 for (let i = 0; i < rows.length; i++) {
                   let row = [], cols = rows[i].querySelectorAll('td, th');
                   for (let j = 0; j < cols.length; j++) {
                     let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
                     data = data.replace(/"/g, '""');
                     row.push('"' + data + '"');
                   }
                   csv.push(row.join(','));
                 }
                 let csvContent = csv.join('\\n');
                 let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                 let link = document.createElement('a');
                 if (link.download !== undefined) {
                   let url = URL.createObjectURL(blob);
                   link.setAttribute('href', url);
                   link.setAttribute('download', 'Message_Logs_${startDate}_to_${endDate}.csv');
                   link.style.visibility = 'hidden';
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }
               }
               window.onload = function() {
                 // Automatically open print dialog when the page loads
                 window.print();
               }
             </script>
           </body>
         </html>
       `);
       printWindow.document.close();
  
       // Hide the modal
       document.getElementById('printModal').style.display = 'none';
     });
   }
   
   function updateMessageLogs() {
     const logsContainer = document.getElementById('messageLogs');
     logsContainer.innerHTML = '';
   
     // Only show the most recent message
     if (messageLogs.length > 0) {
       const mostRecentLog = messageLogs[messageLogs.length - 1];
       const logEntry = document.createElement('p');
       const timestamp = new Date(mostRecentLog.timestamp);
       const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
       logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
       logEntry.classList.add('fade-in');
       logsContainer.appendChild(logEntry);
     }
   
     // Add a message indicating there are more logs if applicable
     if (messageLogs.length > 1) {
       const moreLogsMessage = document.createElement('p');
       moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
       moreLogsMessage.style.fontStyle = 'italic';
       moreLogsMessage.style.color = '#666';
       logsContainer.appendChild(moreLogsMessage);
     }
   }
   
   function clearAllLogs() {
     if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
       firebaseDatabase.clearAllLogs()
         .then(() => {
           messageLogs = [];
           updateMessageLogs();
           alert("All message logs have been cleared.");
         })
         .catch(error => {
           console.error('Error clearing logs:', error);
           alert("An error occurred while clearing logs. Please try again.");
         });
     }
   }
   
   function callParent() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (parentPhone) {
       const startTime = new Date();
       window.location.href = `tel:${parentPhone}`;
       
       // Create and show popup after 10 seconds
       setTimeout(() => {
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.left = '50%';
         popup.style.top = '50%';
         popup.style.transform = 'translate(-50%, -50%)';
         popup.style.backgroundColor = '#ffffff';
         popup.style.padding = '30px';
         popup.style.borderRadius = '10px';
         popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         popup.style.zIndex = '1000';
         popup.style.fontFamily = 'Arial, sans-serif';
         popup.style.textAlign = 'center';
         popup.innerHTML = `
           <h3 style="margin-top: 0; color: #333;">Call Status</h3>
           <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
           <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
           <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
         `; 
         document.body.appendChild(popup);
   
         document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
         document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));
   
         function handleCallResponse(wasAnswered) {
           const endTime = new Date();
           const durationInSeconds = Math.round((endTime - startTime) / 1000);
           let durationString;
           
           if (durationInSeconds >= 60) {
             const minutes = Math.floor(durationInSeconds / 60);
             const seconds = durationInSeconds % 60;
             durationString = `${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds !== 1 ? 's' : ''}`;
           } else {
             durationString = `${durationInSeconds} sec${durationInSeconds !== 1 ? 's' : ''}`;
           }
           
           // Log the call
           const log = {
             sender: DISPLAY_FACULTY_NAME,
             recipient: parentPhone,
             studentName: studentName,
             studentRoll: studentRoll,
             parentName: parentName,
             message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
             timestamp: new Date().toISOString(),
             status: wasAnswered ? 'answered' : 'not answered',
             platform: 'Phone',
             duration: wasAnswered ? durationString : 'N/A'
           };
           firebaseDatabase.saveMessage(log)
             .then(() => fetchMessagesFromServer())
             .catch(error => console.error('Error saving message:', error));
           document.body.removeChild(popup);
         }
       }, 10000);
     } else {
       alert('Parent phone number not available.');
     }
   }
   
   function callStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       window.location.href = `tel:${studentPhone}`;
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function whatsappParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     customMessageArea.style.display = 'block';
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
   }
   
   function whatsappStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent('Hello, this is a message from your faculty.');
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: 'WhatsApp message sent to student',
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function sendCustomWhatsAppMessage() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     const customMessage = document.getElementById('customMessageContent').value;
     
     if (parentPhone && customMessage.trim() !== '') {
       // Format the phone number with country code
       const formattedPhone = `+91${parentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent(customMessage);
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the custom WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: customMessage,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
       
       // Clear and hide the custom message area
       document.getElementById('customMessageContent').value = '';
       document.getElementById('customMessageArea').style.display = 'none';
     } else {
       alert('Please enter a message and ensure parent phone number is available.');
     }
   }
   
   function exportMessageLogs() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         const today = new Date();
         const dateString = today.toISOString().split('T')[0];
         const csvContent = "data:text/csv;charset=utf-8,"
           + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
           + messages.map(e => {
             return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
           }).join("\n");
   
         const encodedUri = encodeURI(csvContent);
         const link = document.createElement("a");
         link.setAttribute("href", encodedUri);
         link.setAttribute("download", `message_logs_${dateString}.csv`);
         document.body.appendChild(link);
         link.click();
       })
       .catch(error => console.error('Error exporting logs:', error));
   }
   
   function callCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       window.location.href = `tel:${cr.studentPhone}`;
     } else {
       alert('Phone number not available for this CR.');
     }
   }
   
   function whatsappCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
       window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
     } else {
       alert('WhatsApp number not available for this CR.');
     }
   }
   
   function openStudentsPage() {
     window.open('students.html', '_blank');
   }
   
   function sendBulkWhatsAppMessage(parentPhones, message) {
     const encodedMessage = encodeURIComponent(message);
     const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
     window.open(whatsappUrl, '_blank');
   }
   
   function sendBulkSMSMessage(parentPhones, message) {
     const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
     window.location.href = smsUrl;
   }
   
   function sendBulkMessage(group) {
     const messageTextArea = document.getElementById('bulkMessageContent');
     const message = messageTextArea.value;
     if (message.trim() === '') {
       alert('Please enter a message.');
       return;
     }
   
     let parentPhones = students.map(student => student.parentPhone);
     let startIndex, endIndex;
   
     switch (group) {
       case 'first':
         startIndex = 0;
         endIndex = 25;
         break;
       case 'second':
         startIndex = 25;
         endIndex = 50;
         break;
       case 'third':
         startIndex = 50;
         endIndex = parentPhones.length;
         break;
     }
   
     parentPhones = parentPhones.slice(startIndex, endIndex);
     const phoneNumbers = parentPhones.join(',');
   
     // Open SMS app with pre-filled message for bulk sending
     window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
   
     // Log the bulk message to Firebase
     const bulkLog = {
       sender: DISPLAY_FACULTY_NAME,
       recipients: parentPhones,
       message: message,
       timestamp: new Date().toISOString(),
       status: 'sent',
       platform: 'SMS (Bulk)',
       group: group
     };
   
     // Save bulk message log
     firebaseDatabase.saveMessage(bulkLog)
       .then(() => console.log('Bulk message logged successfully'))
       .catch(error => console.error('Error saving bulk message:', error));
   
     // Log individual messages
     parentPhones.forEach(phone => {
       const student = students.find(s => s.parentPhone === phone);
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: phone,
         studentName: student ? student.name : 'N/A',
         studentRoll: student ? student.rollNumber : 'N/A',
         parentName: student ? student.parentName : 'N/A',
         message: message,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'SMS',
         bulkGroup: group
       };
       firebaseDatabase.saveMessage(log)
         .then(() => console.log('Individual message logged successfully'))
         .catch(error => console.error('Error saving individual message:', error));
     });
   
     // Fetch updated messages
     fetchMessagesFromServer();
   
     alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
   }
   
   // Add this function to save the message to local storage
   function saveBulkMessage() {
     const message = document.getElementById('bulkMessageContent').value;
     localStorage.setItem('bulkMessage', message);
   }
  
   // Add this function to load the message from local storage
   function loadBulkMessage() {
     const message = localStorage.getItem('bulkMessage') || '';
     document.getElementById('bulkMessageContent').value = message;
   }
  
   function openDialPad(event) {
     // Get the parent profile card of the clicked button
     const profileCard = event.target.closest('.profile-card');
    
     // Extract information from this specific card
     const studentPhone = profileCard.querySelector('#studentPhone').textContent;
     const studentName = profileCard.querySelector('#studentName').textContent;
     const studentRoll = profileCard.querySelector('#studentRoll').textContent;
     const parentName = profileCard.querySelector('#parentName').textContent;
  
     localStorage.setItem('dialpadInfo', JSON.stringify({
       phone: studentPhone,
       studentName: studentName,
       studentRoll: studentRoll,
       parentName: parentName
     }));
  
     window.location.href = 'dialpad.html';
   }
  
   // Add this function to add sample data (for testing purposes)
   // document.addEventListener('DOMContentLoaded', addSampleData);

// Add this showMessageLogs function to your script.js
function showMessageLogs() {
  // Hide other sections
  hideAllSections();
  
  // Show message logs section
  document.getElementById('messageLogs').style.display = 'block';
  
  // Update active tab in navbar
  updateActiveTab('messages');
  
  // Load/refresh message logs
  loadMessageLogs();
}

// Helper function to hide all sections
function hideAllSections() {
  // Hide profile card
  document.getElementById('profileCard').style.display = 'none';
  
  // Hide bulk message form if it exists
  if (document.getElementById('bulkMessageForm')) {
    document.getElementById('bulkMessageForm').style.display = 'none';
  }
  
  // Hide message form
  if (document.getElementById('messageForm')) {
    document.getElementById('messageForm').style.display = 'none';
  }
  
  // Hide CR profiles
  if (document.getElementById('crProfiles')) {
    document.getElementById('crProfiles').style.display = 'none';
  }
}

// Function to update active tab in the navbar
function updateActiveTab(activeTab) {
  // Remove active class from all tabs
  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Add active class to selected tab
  if (activeTab === 'home') {
    document.querySelector('.nav-item:nth-child(1)').classList.add('active');
  } else if (activeTab === 'messages') {
    document.querySelector('.nav-item:nth-child(2)').classList.add('active');
  } else if (activeTab === 'students') {
    document.querySelector('.nav-item:nth-child(3)').classList.add('active');
  }
}

// Load message logs from Firebase
function loadMessageLogs() {
  const logsContainer = document.getElementById('logsContent');
  
  // Clear existing logs display
  logsContainer.innerHTML = '';
  
  // Get logs from Firebase using faculty-specific path
  firebaseDatabase.getAllMessages()
    .then(logs => {
      if (logs.length === 0) {
        // Display a message if no logs exist
        logsContainer.innerHTML = '<p class="no-logs">No message logs found.</p>';
        return;
      }
      
      // Sort logs by timestamp (newest first)
      logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Create log entries
      logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        
        const formattedDate = new Date(log.timestamp).toLocaleString();
        
        logEntry.innerHTML = `
          <div class="log-header">
            <span class="log-recipient">${log.recipient || 'N/A'}</span>
            <span class="log-timestamp">${formattedDate}</span>
          </div>
          <div class="log-message">${log.message || 'N/A'}</div>
        `;
        
        logsContainer.appendChild(logEntry);
      });
    })
    .catch(error => {
      console.error('Error loading message logs:', error);
      logsContainer.innerHTML = '<p class="error">Error loading messages. Please try again later.</p>';
    });
}

// Function to show home screen (main search interface)
function showHomeScreen() {
  hideAllSections();
  updateActiveTab('home');
  
  // Optional: Clear search field
  document.getElementById('rollNumber').value = '';
}

// Add event listener for the home tab
document.addEventListener('DOMContentLoaded', function() {
  // Set up click events for bottom navbar
  const homeTab = document.querySelector('.nav-item:nth-child(1)');
  homeTab.addEventListener('click', function(e) {
    e.preventDefault();
    showHomeScreen();
  });
  
  // Initial setup
  showHomeScreen();
  
  // Set up clear logs button
  const clearLogsBtn = document.getElementById('clearLogsBtn');
  clearLogsBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all message logs?')) {
      localStorage.removeItem('messageLogs');
      loadMessageLogs();
    }
  });
});
