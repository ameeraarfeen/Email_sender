const sendBtn = document.getElementById("sendBtn");
const statusText = document.getElementById("status");

sendBtn.addEventListener("click", async() => {
  const to = document.getElementById("to").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!to || !subject || !message) {
    statusText.textContent = "⚠ Please fill all fields.";
    statusText.style.color = "orange";
    return;
  }

  statusText.textContent = "⏳ Sending...";
  statusText.style.color = "cyan";
  sendBtn.disabled = true;

  try {
    const response = await fetch("http://127.0.0.1:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message })
    });

    const data = await response.json();

    if (data.success) {
      statusText.textContent = "✅ Email sent successfully!";
    } else {
      statusText.textContent = "❌ " + data.error;
    }
  } catch (error) {
    statusText.textContent = "❌ Server error.";
  }

  sendBtn.disabled = false;
});
