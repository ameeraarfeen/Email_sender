const sendBtn = document.getElementById("sendBtn");
const statusText = document.getElementById("status");

sendBtn.addEventListener("click", () => {
  const to = document.getElementById("to").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!to || !subject || !message) {
    statusText.textContent = "⚠ Please fill all fields.";
    statusText.style.color = "orange";
    return;
  }

  // Fake sending state
  statusText.textContent = "⏳ Sending...";
  statusText.style.color = "cyan";
  sendBtn.disabled = true;

  // Simulate server delay
  setTimeout(() => {
    // Fake success
    statusText.textContent = "✅ Email sent successfully!";
    statusText.style.color = "lightgreen";
    sendBtn.disabled = false;

    // Optional: clear form
    document.getElementById("to").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }, 2000);
});
