        function validateEmail() {
            const emailInput = document.getElementById('email');
            const emailResult = document.getElementById('emailResult');

            const isValid = Safe.validateEmail(emailInput.value);
            emailResult.textContent = isValid ? 'Valid email address' : 'Invalid email address';
            emailResult.className = isValid ? 'result valid' : 'result invalid';
        }

        function validatePassword() {
            const passwordInput = document.getElementById('password');
            const passwordResult = document.getElementById('passwordResult');

            const isValid = Safe.validatePassword(passwordInput.value);
            passwordResult.textContent = isValid ? 'Valid password' : 'Invalid password';
            passwordResult.className = isValid ? 'result valid' : 'result invalid';
        }

        function validateURL() {
            const urlInput = document.getElementById('url');
            const urlResult = document.getElementById('urlResult');

            const isValid = Safe.validateURL(urlInput.value);
            urlResult.textContent = isValid ? 'Valid URL' : 'Invalid URL';
            urlResult.className = isValid ? 'result valid' : 'result invalid';
        }

        function validatePhoneNumber() {
            const phoneNumberInput = document.getElementById('phoneNumber');
            const phoneNumberResult = document.getElementById('phoneNumberResult');

            const isValid = Safe.validatePhoneNumber(phoneNumberInput.value);
            phoneNumberResult.textContent = isValid ? 'Valid phone number' : 'Invalid phone number';
            phoneNumberResult.className = isValid ? 'result valid' : 'result invalid';
        }

        function sanitizeInput() {
            const input = document.getElementById('input');
            const sanitizedResult = document.getElementById('sanitizedInput');

            const sanitizedInput = Safe.sanitizeInput(input.value);
            sanitizedResult.textContent = sanitizedInput;
        }

        function escapeHTML() {
            const htmlStringInput = document.getElementById('htmlString');
            const escapedResult = document.getElementById('escapedHTML');

            const escapedHTML = Safe.escapeHTML(htmlStringInput.value);
            escapedResult.textContent = escapedHTML;
        }

        function encryptText() {
            const plaintextInput = document.getElementById('plaintext');
            const keyInput = document.getElementById('encryptionKey');
            const encryptedResult = document.getElementById('encryptedText');

            const encryptedText = Safe.encryptText(plaintextInput.value, parseInt(keyInput.value));
            encryptedResult.textContent = encryptedText;
        }

        function decryptText() {
            const encryptedInput = document.getElementById('encryptedText');
            const keyInput = document.getElementById('encryptionKey');
            const decryptedResult = document.getElementById('decryptedText');

            const decryptedText = Safe.decryptText(encryptedInput.value, parseInt(keyInput.value));
            decryptedResult.textContent = decryptedText;
        }
        
        function generateRandomString() {
            const lengthInput = document.getElementById('randomStringLength');
            const randomStringResult = document.getElementById('randomString');

            const randomString = Safe.generateRandomString(parseInt(lengthInput.value));
            randomStringResult.textContent = randomString;
        }

        function capitalizeString() {
            const stringInput = document.getElementById('stringToCapitalize');
            const capitalizedResult = document.getElementById('capitalizedString');

            const capitalizedString = Safe.capitalizeString(stringInput.value);
            capitalizedResult.textContent = capitalizedString;
        }

        function reverseString() {
            const stringInput = document.getElementById('stringToReverse');
            const reversedResult = document.getElementById('reversedString');

            const reversedString = Safe.reverseString(stringInput.value);
            reversedResult.textContent = reversedString;
        }
