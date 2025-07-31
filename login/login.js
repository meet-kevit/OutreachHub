const loginForm = document.getElementById('login-form');
 
loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
 
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
 
      try {
        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
 
        const data = await response.json();
        
          if (data['user'] !== undefined) {
          const jwtToken= data.token;
          const payload = atob(jwtToken.split('.')[1]);
          console.log("payload", payload);
          let o = JSON.parse(payload);
          localStorage.setItem('user', o.username);
          localStorage.setItem('access_token', data.token);
          window.location.href = 'homepage/homepage.html';
        } 
        else {
          alert(data.message || 'Invalid credentials');
        }
      } 
      catch (error) 
      {
        console.error('Login error:', error);
        alert('Failed to connect to server.');
      }
    });