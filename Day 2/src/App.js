import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegister) {
      // Handle register logic here
      console.log('Register Email:', email);
      console.log('Register Password:', password);
    } else {
      // Handle login logic here
      console.log('Login Email:', email);
      console.log('Login Password:', password);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className='new1'>
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>
        
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Switch to Login' : 'Switch to Register'}
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
