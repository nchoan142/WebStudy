// Chờ cho tất cả nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', function() {

    // --- Phần 1: Logic ẩn/hiện thông tin em bé ---

    // Lấy các phần tử (elements)
    const babyCheckbox = document.getElementById('with-baby');
    const babyFields = [
        ...document.querySelectorAll('[name^="baby-"]'), // Tất cả select/input bắt đầu bằng "baby-"
        document.getElementById('baby-last-name'),
        document.getElementById('baby-first-name')
    ];

    // Hàm để bật/tắt các trường thông tin em bé
    function toggleBabyFields(enabled) {
        babyFields.forEach(field => {
            field.disabled = !enabled;
            // Tùy chọn: Thêm yêu cầu "required" nếu bật
            // field.required = enabled;
        });
    }

    // Gắn sự kiện "change" cho checkbox
    babyCheckbox.addEventListener('change', function() {
        if (this.checked) {
            toggleBabyFields(true); // Bật các trường
        } else {
            toggleBabyFields(false); // Tắt các trường
        }
    });

    // --- Phần 2: Tự động điền các dropdown Ngày/Tháng/Năm ---
    
    // Lấy tất cả các dropdown
    const daySelects = document.querySelectorAll('.select-day');
    const monthSelects = document.querySelectorAll('.select-month');
    const adultYearSelects = document.querySelectorAll('.select-year-adult');
    const babyYearSelects = document.querySelectorAll('.select-year-baby');
    const futureYearSelects = document.querySelectorAll('.select-year-future');

    const currentYear = new Date().getFullYear();

    // Điền ngày (1-31)
    daySelects.forEach(select => {
        select.innerHTML = '<option value="">Ngày</option>';
        for (let i = 1; i <= 31; i++) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });

    // Điền tháng (1-12)
    monthSelects.forEach(select => {
        select.innerHTML = '<option value="">Tháng</option>';
        for (let i = 1; i <= 12; i++) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });

    // Điền năm sinh người lớn (100 năm trước -> hiện tại)
    adultYearSelects.forEach(select => {
        select.innerHTML = '<option value="">Năm</option>';
        for (let i = currentYear; i >= currentYear - 100; i--) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });

    // Điền năm sinh em bé (10 năm trước -> hiện tại)
    babyYearSelects.forEach(select => {
        select.innerHTML = '<option value="">Năm</option>';
        for (let i = currentYear; i >= currentYear - 10; i--) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });

    // Điền năm hết hạn (hiện tại -> 20 năm tới)
    futureYearSelects.forEach(select => {
        select.innerHTML = '<option value="">Năm</option>';
        for (let i = currentYear; i <= currentYear + 20; i++) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });

});