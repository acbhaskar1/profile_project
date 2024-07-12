// ProfileList.js
import React, { useContext, useEffect } from 'react';
import ProfileItem from './ProfileItem';
import ProfileContext from '../context/ProfileContext';

const ProfileList = () => {
    const profileContext = useContext(ProfileContext);

    const { profiles, getProfiles, loading, Spinner } = profileContext;

    useEffect(() => {
        getProfiles();
        // eslint-disable-next-line
    }, []);

    if (profiles !== null && profiles.length === 0 && !loading) {
        return <h4>Please add a profile</h4>;
    }

    return (
        <>
            {profiles !== null && !loading ? (
                profiles.map(profile => (
                    <ProfileItem key={profile.id} profile={profile} />
                ))
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default ProfileList;
