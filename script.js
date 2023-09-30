function calculateMarks() {
    const studentName = document.getElementById("studentName").value;
    const className = document.getElementById("class").value;
    const totalMarks = parseInt(document.getElementById("totalMarks").value);
    const chemistryMarks = parseInt(document.getElementById("chemistry").value);
    const physicsMarks = parseInt(document.getElementById("physics").value);
    const biologyMarks = parseInt(document.getElementById("biology").value);
    const englishMarks = parseInt(document.getElementById("english").value);
    const urduMarks = parseInt(document.getElementById("urdu").value);

   
    const totalObtainedMarks = chemistryMarks + physicsMarks + biologyMarks + englishMarks + urduMarks;

    
    const percentage = (totalObtainedMarks / totalMarks) * 100;

    
    let grade, remarks;
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent!";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good!";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Good!";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Average";
    } else {
        grade = "F";
        remarks = "Failed";
    }

   
    document.getElementById("percentage").textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById("grade").textContent = `Grade: ${grade}`;
    document.getElementById("remarks").textContent = `Remarks: ${remarks}`;
    document.getElementById("result").classList.remove("hidden");
}
