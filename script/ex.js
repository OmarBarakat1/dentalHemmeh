document.addEventListener("DOMContentLoaded", function() {
    const batchSelect = document.getElementById("batchSelect");
    const yearSelect = document.getElementById("yearSelect");

    // تعبئة قائمة الدفعات
    const batches = [2021, 2022, 2023, 2024, 2025];
    batches.forEach(batch => {
        const option = document.createElement("option");
        option.value = batch;
        option.textContent = `دفعة ${batch}`;
        batchSelect.appendChild(option);
    });

    // تحديث السنوات بناءً على الدفعة المختارة
    batchSelect.addEventListener("change", function() {
        const selectedBatch = parseInt(this.value);
        yearSelect.innerHTML = "<option value=''>اختر السنة الدراسية</option>";
        if (selectedBatch) {
            const currentYear = new Date().getFullYear();
            const maxYears = currentYear - selectedBatch + 1;
            for (let i = 1; i <= maxYears && i <= 5; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = `السنة ${i}`;
                yearSelect.appendChild(option);
            }
        }
    });

    // التنقل إلى الصفحة المناسبة
    document.getElementById("submitYear").addEventListener("click", function() {
        const batch = batchSelect.value;
        const year = yearSelect.value;
        if (batch && year) {
            window.location.href = `year${year}.html?batch=${batch}`;
        } else {
            alert("يرجى اختيار الدفعة والسنة الدراسية!");
        }
    });
});