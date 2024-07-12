import React, { useState, useContext, useEffect } from 'react';
import ProfileContext from '../context/ProfileContext';

const ProfileForm = () => {
    const profileContext = useContext(ProfileContext);
    const { addProfile, updateProfile, clearCurrent, current } = profileContext;

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        bio: '',
        type: 'personal' // Default value for type
    });

    useEffect(() => {
        if (current !== null) {
            setProfile(current);
        } else {
            setProfile({
                name: '',
                email: '',
                bio: '',
                type: 'personal'
            });
        }
    }, [profileContext, current]);

    const { name, email, bio, type } = profile;

    const onChange = e => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addProfile(profile);
        } else {
            updateProfile(profile);
        }
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Profile' : 'Add Profile'}</h2>
            <div className="form-columns">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        name="bio"
                        value={bio}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
            <div>
                <input
                    type="submit"
                    value={current ? 'Update Profile' : 'Add Profile'}
                    className="btn btn-primary btn-block"
                />
            </div>
        </form>
    );
};

export default ProfileForm;
