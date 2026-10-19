import { useNavigate , Link } from 'react-router';
import { useState } from 'react';
import { account } from '../appwrite';

import './LoginForm.css';

function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newError = {};
        if (!formData.email) {
            newError.email = 'Email is required';
        }
        if (!formData.password) {
            newError.password = 'Password is required';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAuthError('');

        if (!validate()) return; 
        setLoading(true);
        try {
            await account.createEmailPasswordSession(
                formData.email,
                formData.password
            );
            navigate('/dashboard');
        } catch (err) {
            setAuthError(err.message || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-text">Login</h1>

            <p className="login-subtext">
                Welcome back! Please enter your credentials to log in.
            </p>

            <form className="form-container" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="janedoe@gmail.com"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <p id="email-error" className="error-message">{error.email}</p>
                </div>
                    
                <div className = "field">
                    <label htmlFor="password" className ="form-label">Password</label>
                    <input type="password" placeholder="Enter your password" id="password" name="password" onChange = {handleChange}  value = {formData.password}  />
                    <p id="password-error" className ="error-message">{error.password}</p>
                </div>

                <p className="forgot-password">
                    <Link to ="/">Forgot Password?</Link>
                </p>

                {authError && <p className="error-message">{authError}</p>}

                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;







