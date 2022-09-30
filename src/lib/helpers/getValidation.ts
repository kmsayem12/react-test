export default function getValidateMessages(inputName = 'label') {
  const validateMessages = {
    required: `\${${inputName}} is required!`,
    types: {
      email: `\${${inputName}} is not valid!`,
    },
  }

  return validateMessages
}

export const phoneNumberValidate = (value: string) => {
  if (!value) return Promise.resolve()
  value = value?.replaceAll('_', '')
  if (value && value?.length < 14) {
    return Promise.reject('Some message here')
  } else {
    return Promise.resolve()
  }
}

export const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return ''
}
