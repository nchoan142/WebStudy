// script.js
document.addEventListener("DOMContentLoaded", () => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const btnProcess = $('input[type="submit"][name="process"]');
  const btnReset   = $('input[type="submit"][name="reset"]');

  btnProcess?.addEventListener("click", (e) => {
    e.preventDefault();

    // Lấy dữ liệu
    const first    = $('input[name="first_name"]')?.value.trim() || "";
    const last     = $('input[name="last_name"]')?.value.trim()  || "";
    const genderEl = $('input[name="gender"]:checked');
    const gender   = genderEl?.value || ""; // "Male" | "Female"
    const address  = $('textarea[name="address"]')?.value.trim() || "";

    const magsChecked = $$('input[name="choice"]:checked');
    const magazines   = magsChecked.map(i => i.value); // ["TIME", "Newsweek", ...]
    const duration    = $('input[name="duration"]:checked')?.value || ""; // "1 Year", ...
    const payment     = $('input[name="payment_option"]:checked')?.value || ""; // "Credit Card" | "Demand Draft"

    // Validate theo yêu cầu
    const errs = [];
    if (!first || first.length > 35) errs.push("- Trường first name không được để trống. Tối đa 35 ký tự.");
    if (!last  || last.length  > 35) errs.push("- Trường last name không được để trống. Tối đa 35 ký tự.");
    if (!address)                    errs.push("- Trường address không được để trống.");
    if (magazines.length === 0)      errs.push("- Người sử dụng phải chọn ít nhất một tạp chí.");
    // Thêm điều kiện này để hộp thoại xác nhận hiển thị đúng (có đủ duration & payment)
    if (!duration)                   errs.push("- Vui lòng chọn thời hạn (Duration).");
    if (!payment)                    errs.push("- Vui lòng chọn phương thức thanh toán (Payment).");

    if (errs.length) {
      alert("Vui lòng kiểm tra lại:\n" + errs.join("\n"));
      return;
    }

    // Hộp thoại xác nhận (Hình 2)
    const magsText = magazines.join(", ").replace(/, ([^,]*)$/, " and $1");
    const confirmMsg =
      `Do you want to order ${magsText} magazins for ${duration} and to pay with ${payment}?`;

    const ok = confirm(confirmMsg);

    if (!ok) {
      // Nếu Cancel → focus vào ô last name để người dùng chỉnh sửa
      $('input[name="last_name"]')?.focus();
      return;
    }

    // Hộp thoại cảm ơn (Hình 3)
    const honor = gender === "Male" ? "Mr." : gender === "Female" ? "Ms." : "";
    const fullLine = `${honor} ${last} ${first}`.trim().replace(/\s+/g, " ");
    const thanks =
`Thank you very much for your order, we will supply as soon as possible the magazins for you to the address:
   ${fullLine}
   ${address}`;
    alert(thanks);
  });

  btnReset?.addEventListener("click", (e) => {
    e.preventDefault();
    // Xóa trắng toàn bộ trường
    $$('input[type="text"]').forEach(i => (i.value = ""));
    $$('input[type="radio"], input[type="checkbox"]').forEach(i => (i.checked = false));
    $('textarea[name="address"]') && ($('textarea[name="address"]').value = "");
  });
});
