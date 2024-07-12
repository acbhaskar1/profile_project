import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../context/ProfileContext';

const ProfileItem = ({ profile }) => {
    const profileContext = useContext(ProfileContext);
    const { deleteProfile, setCurrent, clearCurrent } = profileContext;

    // Log profile to check if type exists
    console.log(profile);

    const { id, name, email, bio, type } = profile;

    const onDelete = () => {
        deleteProfile(id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span style={{ float: 'right' }}
                      className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Unknown'}
                </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fas fa-envelope-open' /> {email}
                    </li>
                )}
                {bio && (
                    <li>
                        <i className='fas fa-info-circle' /> {bio}
                    </li>
                )}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={() => setCurrent(profile)}>
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                </button>
            </p>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileItem;
