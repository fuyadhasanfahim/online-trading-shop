import { faAt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({ email, password });
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex justify-center items-center h-dvh">
                <div className="mx-auto w-full max-w-lg">
                    <form
                        action=""
                        className="mb-0 mt-6 space-y-4 ring-1 ring-gray-200 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        onSubmit={handleSubmit}
                    >
                        <p className="text-center text-2xl font-medium">
                            Sign in to your account
                        </p>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <FontAwesomeIcon icon={faAt} />
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />

                                <button
                                    className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? (
                                        <FontAwesomeIcon icon={faEye} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
