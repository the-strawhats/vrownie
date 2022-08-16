export function redirectToWhatsappMessage(message: string) {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER ?? `5511988256175`;
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
  );
}
