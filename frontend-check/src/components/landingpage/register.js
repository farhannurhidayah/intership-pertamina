import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroimg from '../../assets/roket.png';

const Register = () => {
    const [username, setUsername] = useState('');
    const [namaperusahaan, setNamaperusahaan] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Pastikan password dan password confirm cocok POST http://localhost:3000/api/register 404 (Not Found)
        if (password !== passwordConfirm) {
            alert('Password dan konfirmasi password tidak cocok');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    namaperusahaan,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registrasi berhasil! Silakan login.');
                navigate('/login'); // Arahkan pengguna ke halaman login setelah registrasi berhasil
            } else {
                alert(`Registrasi gagal: ${data.error || data.message}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Terjadi kesalahan saat registrasi.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-[90%] items-center py-10 px-8 gap-12 h-full my-12 mx-auto bg-white shadow-lg rounded-lg">
            {/* Left side: Form section */}
            <div className="flex-1 md:text-left space-y-6">
                <form onSubmit={handleRegister}>
                    <div className="mb-4"> {/* Menambahkan margin bawah */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            required 
                        />
                    </div>
                    <div className="mb-4"> {/* Menambahkan margin bawah */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Namaperusahaan">Nama Perusahaan:</label>
                        <input 
                            type="text" 
                            id="Namaperusahaan" 
                            name="Namaperusahaan" 
                            value={namaperusahaan}
                            onChange={(e) => setNamaperusahaan(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            required 
                        />
                    </div>
                    <div className="mb-4"> {/* Menambahkan margin bawah */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            required 
                        />
                    </div>
                    <div className="mb-6"> {/* Menambahkan margin bawah */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordconfirm">Password Confirm:</label>
                        <input 
                            type="password" 
                            id="passwordconfirm" 
                            name="passwordconfirm" 
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#45a049] text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out mb-6" // Menambahkan margin bawah
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-600">
                    Sudah memiliki akun? <a href="/login" className="text-indigo-600 hover:underline">Login</a>
                </p>
            </div>

            {/* Right side: Image section */}
            <div className="flex-1 flex justify-center items-center">
                <img 
                    src={heroimg} 
                    alt="Register" 
                    className="w-[240px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px]" 
                />
            </div>
        </div>
    );
};

export default Register;
