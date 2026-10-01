function initFormValidation() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  const fechaInput = document.getElementById("fecha");
  const today = new Date().toISOString().split("T")[0];
  fechaInput.setAttribute("min", today);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    form.querySelectorAll("[required]").forEach((field) => {
      const errorEl = field.parentElement.querySelector(".bl-field__error");
      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        if (errorEl) errorEl.style.display = "block";
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
        if (errorEl) errorEl.style.display = "none";
      }
    });

    const emailField = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
      emailField.classList.add("is-invalid");
      const err = emailField.parentElement.querySelector(".bl-field__error");
      if (err) err.style.display = "block";
      isValid = false;
    }

    if (fechaInput.value && fechaInput.value < today) {
      fechaInput.classList.add("is-invalid");
      const err = fechaInput.parentElement.querySelector(".bl-field__error");
      if (err) err.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      const btn = form.querySelector(".bl-btn");
      btn.innerHTML = "<span>V Reserva Confirmada</span>";
      btn.disabled = true;
      btn.style.background = "var(--color-success)";
      btn.style.boxShadow = "0 4px 20px rgba(46, 204, 113, 0.3)";
      setTimeout(() => {
        form.reset();
        btn.innerHTML =
          '<span>Confirmar Reserva</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
        btn.disabled = false;
        btn.style.background = "";
        btn.style.boxShadow = "";
      }, 2800);
    }
  });

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      field.classList.remove("is-invalid");
      const err = field.parentElement.querySelector(".bl-field__error");
      if (err) err.style.display = "none";
    });
  });
}
