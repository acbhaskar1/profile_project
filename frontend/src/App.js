import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileState from './context/ProfileState';
import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';
import './App.css';
import './styles.css';
const App = () => {
    return (
        <ProfileState>
            <Router>
                <div className='App'>
                    <div className='container'>
                        <ProfileForm />
                        <ProfileList />
                    </div>
                </div>
            </Router>
        </ProfileState>
    );
};

export default App;
