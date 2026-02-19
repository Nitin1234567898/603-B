import React, { useState } from 'react'

const BasicForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        const trimmed = name.trim();
        if (!trimmed) {
            setError('Name is required');
            return;
        }
        setError('');
        alert(`Form submitted with name: ${trimmed}`);
        setName('');
    };

    const onChangeName = (e) => {
        setName(e.target.value);
        if (error) setError('');
    };
  return (
    <div>
      <h2>Basic Form</h2>
      <form onSubmit={handlesubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={onChangeName}
            aria-invalid={Boolean(error)}
          />
        </label>
        {error ? <div style={{ color: 'crimson' }}>{error}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BasicForm
