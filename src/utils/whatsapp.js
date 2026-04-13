export const sendToWhatsApp = (data) => {
  const phone = "919515567932"; // Provided by user

  let message = `New Gym Inquiry:\n`;
  message += `Name: ${data.name || 'N/A'}\n`;
  if (data.age) message += `Age: ${data.age}\n`;
  if (data.gender) message += `Gender: ${data.gender}\n`;
  if (data.height) message += `Height: ${data.height}\n`;
  if (data.weight) message += `Weight: ${data.weight}\n`;
  if (data.work) message += `Work Style: ${data.work}\n`;
  if (data.marriage) message += `Marriage Status: ${data.marriage}\n`;
  if (data.plan) message += `Plan: ${data.plan}\n`;
  
  if (data.address) message += `Address: ${data.address}\n`;
  if (data.city) message += `City: ${data.city}\n`;
  if (data.email) message += `Email: ${data.email}\n`;
  if (data.location) message += `Location: ${data.location}\n`;
  if (data.pincode) message += `Pincode: ${data.pincode}\n`;
  if (data.phone) message += `Phone: ${data.phone}\n`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
