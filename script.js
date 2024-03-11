function generatePassword() {
    const length = document.getElementById('password-length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById('password-output').textContent = `Generated Password: ${password}`;
    updateStrengthIndicator(password);
  }
  
  function updateStrengthIndicator(password) {
    const strengthIndicator = document.getElementById('strength-indicator');
    const strength = calculatePasswordStrength(password);
    strengthIndicator.style.backgroundColor = getStrengthColor(strength);
  }
  
  function calculatePasswordStrength(password) {
    // You can implement a more sophisticated strength calculation logic here
    // For simplicity, let's just check the length
    if (password.length < 8) {
      return 0; // Weak
    } else if (password.length < 12) {
      return 1; // Moderate
    } else {
      return 2; // Strong
    }
  }
  
  function getStrengthColor(strength) {
    switch (strength) {
      case 0:
        return 'red'; // Weak
      case 1:
        return 'orange'; // Moderate
      case 2:
        return 'green'; // Strong
      default:
        return 'gray';
    }
  }
  