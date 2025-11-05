// --- 1. Lấy tất cả các yếu tố DOM cần thiết (Đưa ra toàn cục) ---
const processBtn = document.querySelector('input[name="process"]');
const resetBtn = document.querySelector('input[name="reset"]');

// Lấy tất cả các trường dữ liệu
const firstNameInput = document.querySelector('input[name="first_name"]');
const lastNameInput = document.querySelector('input[name="last_name"]');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const addressInput = document.querySelector('textarea[name="address"]');
const magazineCheckboxes = document.querySelectorAll('input[name="choice"]');
const durationRadios = document.querySelectorAll('input[name="duration"]');
const paymentRadios = document.querySelectorAll('input[name="payment_option"]');


// --- 2. Gán sự kiện cho nút "Process" ---
processBtn.addEventListener('click', function(event) {
    // Ngăn hành vi "submit" mặc định của nút (tải lại trang)
    event.preventDefault(); 
    
    // --- A. VALIDATION (Kiểm tra dữ liệu) ---
    let errors = [];
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const address = addressInput.value.trim();

    // 1. Kiểm tra First Name
    if (firstName === '') {
        errors.push('Trường first name không được để trống.');
    } else if (firstName.length > 35) {
        errors.push('Trường first name tối đa 35 ký tự.');
    }

    // 2. Kiểm tra Last Name
    if (lastName === '') {
        errors.push('Trường last name không được để trống.');
    } else if (lastName.length > 35) {
        errors.push('Trường last name tối đa 35 ký tự.');
    }

    // 3. Kiểm tra Address
    if (address === '') {
        errors.push('Trường address không được để trống.');
    }

    // 4. Kiểm tra Magazines (phải chọn ít nhất 1)
    const selectedMagazines = getCheckedValues(magazineCheckboxes);
    if (selectedMagazines.length === 0) {
        errors.push('Người sử dụng phải chọn ít nhất một tạp chí.');
    }

    // 5. Kiểm tra các trường radio (giả định là bắt buộc)
    const selectedGender = getRadioValue(genderRadios);
    const selectedDuration = getRadioValue(durationRadios);
    const selectedPayment = getRadioValue(paymentRadios);

    if (!selectedGender) {
        errors.push('Bạn phải chọn Giới tính (Gender).');
    }
    if (!selectedDuration) {
        errors.push('Bạn phải chọn Thời hạn (Duration).');
    }
    if (!selectedPayment) {
        errors.push('Bạn phải chọn Phương thức thanh toán (Payment).');
    }

    // --- B. HIỂN THỊ KẾT QUẢ ---
    
    // Nếu có lỗi, hiển thị thông báo và dừng lại
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    // Nếu không có lỗi (form đã điền đầy đủ)
    // --- B1. Hiển thị hộp thoại xác nhận (Hình 2) ---

    // Tạo chuỗi tạp chí (ví dụ: "TIME, Newsweek and People")
    let magazineString = '';
    if (selectedMagazines.length === 1) {
        magazineString = selectedMagazines[0];
    } else if (selectedMagazines.length > 1) {
        // Lấy cái cuối cùng ra
        let lastMagazine = selectedMagazines[selectedMagazines.length - 1];
        // Nối các cái còn lại bằng dấu phẩy
        let firstMagazines = selectedMagazines.slice(0, -1).join(', ');
        magazineString = `${firstMagazines} and ${lastMagazine}`;
    }
    
    // Tạo thông điệp xác nhận
    const confirmMsg = `Do you want to order ${magazineString} magazins for ${selectedDuration.toLowerCase()} and to pay with ${selectedPayment.toLowerCase()}?`;

    // Hiển thị hộp thoại confirm và chờ người dùng bấm OK/Cancel
    const userConfirmed = confirm(confirmMsg);

    // --- B2. Xử lý sau khi xác nhận ---
    if (userConfirmed) {
        // Nếu người dùng bấm OK -> Hiển thị thông báo (Hình 3)
        
        // Lấy xưng hô (Mr./Ms.)
        const title = (selectedGender === 'Male') ? 'Mr.' : 'Ms.';
        // Ghép họ và tên
        const fullName = `${lastName} ${firstName}`;

        const alertMsg = `Thank you very much for your order, we will supply as soon as possible the magazins for you to the address:\n${title} ${fullName}\n${address}`;
        
        alert(alertMsg);

        // (Tùy chọn: Sau khi OK, có thể reset form)
        // resetForm(); // Gọi hàm reset nếu muốn

    } else {
        // Nếu người dùng bấm Cancel
        // "trường last name sẽ nhận tiêu điểm (focus)"
        lastNameInput.focus();
    }
});

// --- 3. Gán sự kiện cho nút "Reset" ---
resetBtn.addEventListener('click', function(event) {
    // Ngăn hành vi "submit" mặc định
    event.preventDefault(); 
    resetForm();
});

// --- 4. CÁC HÀM HỖ TRỢ (Helper Functions) ---

/**
 * Hàm lấy giá trị của radio button đang được chọn
 * @param {NodeListOf<Element>} radioNodeList - Danh sách các radio button (cùng name)
 * @returns {string|null} Giá trị của radio được chọn, hoặc null nếu không có
 */
function getRadioValue(radioNodeList) {
    for (const radio of radioNodeList) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

/**
 * Hàm lấy giá trị của các checkbox đang được chọn
 * @param {NodeListOf<Element>} checkboxNodeList - Danh sách các checkbox
 * @returns {string[]} Mảng chứa các giá trị (value) của checkbox được chọn
 */
function getCheckedValues(checkboxNodeList) {
    let values = [];
    checkboxNodeList.forEach(checkbox => {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    });
    return values;
}

/**
 * Hàm xóa trắng (reset) tất cả các trường
 */
function resetForm() {
    // Xóa text
    firstNameInput.value = '';
    lastNameInput.value = '';
    addressInput.value = '';

    // Bỏ check tất cả radio và checkbox
    uncheckAll(genderRadios);
    uncheckAll(durationRadios);
    uncheckAll(paymentRadios);
    uncheckAll(magazineCheckboxes);

    // (Tùy chọn) Di chuyển tiêu điểm về trường đầu tiên
    firstNameInput.focus();
}

/**
 * Hàm bỏ check một danh sách các radio/checkbox
 * @param {NodeListOf<Element>} nodeList 
 */
function uncheckAll(nodeList) {
    nodeList.forEach(input => {
        input.checked = false;
    });
}

// KHÔNG CÓ DẤU } Ở ĐÂY (đã xóa)