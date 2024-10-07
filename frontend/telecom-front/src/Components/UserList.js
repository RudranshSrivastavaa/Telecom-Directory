import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserList() {
    const { letter } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:5000/tel/users/${letter}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [letter]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Users with First Name Starting with '{letter}'</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && users.length > 0 && (
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>
                            {user.firstName} {user.lastName} - {user.contact}, {user.address}
                        </li>
                    ))}
                </ul>
            )}
            {!loading && !error && users.length === 0 && <p>No users found</p>}
        </div>
    );
}

export default UserList;
