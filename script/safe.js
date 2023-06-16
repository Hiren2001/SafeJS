const Safe = {
  validateEmail: function(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  },

  validatePassword: function(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  },

  validateURL: function(url) {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/.*)?$/i;
    return urlRegex.test(url);
  },

  validatePhoneNumber: function(phoneNumber) {
    const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
    return phoneRegex.test(phoneNumber);
  },

  sanitizeInput: function(input) {
    const sanitizedInput = input.replace(/[<>"'&/]/g, (match) => {
      const htmlEntities = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
        '/': '&#x2F;'
      };
      return htmlEntities[match];
    });
    return sanitizedInput;
  },

  encryptText: function(text, key) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const encryptedCharCode = charCode + key;
      encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return encryptedText;
  },

  decryptText: function(encryptText, key) {
    let decryptedText = '';
    for (let i = 0; i < encryptText.length; i++) {
      const charCode = encryptText.charCodeAt(i);
      const decryptedCharCode = charCode - key;
      decryptedText += String.fromCharCode(decryptedCharCode);
    }
    return decryptedText;
  },

  generateRandomString: function(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  },

  capitalizeString: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};

module.exports = Safe;
