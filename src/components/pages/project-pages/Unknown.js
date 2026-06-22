import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import '../../../AppStyle.css'
import '../project-pages/Unknown.css';


function Unknown() {
  const [key, setKey] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (key === '1368') {
      sessionStorage.setItem('auth', 'true');
      navigate('/portfolio');
    } else {
      alert('Incorrect password.');
    }
  };

  return (
    <div className="white-page">
      <div>
        <video playsInline autoPlay loop muted src="/images/home-images/lock.webm" />
        <p>Please enter the password to access this page.</p>
        <form
          onSubmit={handleSubmit}
          style={{ padding: 'var(--space-4) var(--space-4) 0' }}
        >
          <input
            ref={inputRef}
            type="password"
            className="input"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter password"
          />
        </form>
      </div>

      <div className="modal-footer">
        <Button variant="primary" onClick={handleSubmit} size="lg">
          Access
        </Button>
      </div>
    </div>
  );
}

export default Unknown;