export const formatPhoneNumber = (phoneNumberString) => {
  const clean = ('' + phoneNumberString).replace(/\D/g, '')
  const match = clean.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return ['(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}