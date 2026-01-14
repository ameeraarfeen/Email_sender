const sendBtn = document.getElementById("sendBtn");
const statusText = document.getElementById("status");

const toInput = document.getElementById("to");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");


sendBtn.addEventListener("click", async() => {
  const to = toInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

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

       // clear form fields
      toInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";

    } else {
      statusText.textContent = "❌ " + data.error;
    }
  } catch (error) {
    statusText.textContent = "❌ Server error.";
  }

  sendBtn.disabled = false;
});
