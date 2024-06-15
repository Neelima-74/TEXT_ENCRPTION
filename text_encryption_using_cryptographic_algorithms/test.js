const { encrypt, decrypt } = require('./encryption');

const originalText = 'Hello, World!';
console.log('Original Text:', originalText);

const encryptedText = encrypt(originalText);
console.log('Encrypted Text:', encryptedText);

const decryptedText = decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
