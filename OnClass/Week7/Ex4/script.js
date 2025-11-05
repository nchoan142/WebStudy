/**
 * Hàm này là cốt lõi, dùng để lấy và kiểm tra dữ liệu đầu vào.
 * Nó thực hiện cả 3 yêu cầu validate.
 */
function getValidatedNumbers() {
    // 1. Lấy giá trị từ 2 textbox
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    
    const val1 = num1Input.value.trim(); // .trim() để xóa khoảng trắng thừa
    const val2 = num2Input.value.trim();

    // 2. Validate: Bắt buộc phải nhập dữ liệu
    if (val1 === '' || val2 === '') {
        alert('Vui lòng nhập cả hai số.');
        return null; // Trả về null nếu có lỗi
    }

    // 3. Validate: Giá trị phải là số
    if (isNaN(val1) || isNaN(val2)) {
        alert('Giá trị nhập vào phải là số.');
        return null; // Trả về null nếu có lỗi
    }

    // Chuyển đổi giá trị sang kiểu số (float)
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    // 4. Validate: Giá trị phải từ 1-100
    if (n1 < 1 || n1 > 100 || n2 < 1 || n2 > 100) {
        alert('Giá trị nhập vào phải nằm trong khoảng từ 1 đến 100.');
        return null; // Trả về null nếu có lỗi
    }

    // Nếu tất cả đều hợp lệ, trả về 2 con số
    return { n1, n2 };
}

/**
 * Hàm hỗ trợ để set kết quả vào textbox thứ 3
 */
function setResult(value) {
    document.getElementById('result').value = value;
}

// --- CÁC HÀM TÍNH TOÁN ---

function performAddition() {
    const numbers = getValidatedNumbers(); // Gọi hàm kiểm tra
    
    // Nếu 'numbers' không phải là null (tức là đã hợp lệ)
    if (numbers) {
        const result = numbers.n1 + numbers.n2;
        setResult(result);
    }
}

function performSubtraction() {
    const numbers = getValidatedNumbers();
    if (numbers) {
        const result = numbers.n1 - numbers.n2;
        setResult(result);
    }
}

function performMultiplication() {
    const numbers = getValidatedNumbers();
    if (numbers) {
        const result = numbers.n1 * numbers.n2;
        setResult(result);
    }
}

function performDivision() {
    const numbers = getValidatedNumbers();
    if (numbers) {
        // Kiểm tra trường hợp đặc biệt: chia cho 0
        if (numbers.n2 === 0) {
            alert('Không thể chia cho 0.');
            setResult('Lỗi');
        } else {
            const result = numbers.n1 / numbers.n2;
            setResult(result);
        }
    }
}

/**
 * Hàm cho nút "Xóa trắng"
 */
function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    setResult('');
}