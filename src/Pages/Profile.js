import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

import '../App.css';

function Profile() {

    const navigate = useNavigate();
    const profile = JSON.parse(localStorage.getItem('profile'));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: "#cccccc", height: '100vh' }}>
            <div className='page-card'>
                <p className="registration-header">Profile</p>
                <div className='registration-form-body profile-body'>
                    {
                        profile === null ?
                            <p>Profile is empty</p>
                            :
                            <>
                                <p className='profile-left-col'>First Name:</p><p className='profile-right-col'>{profile.firstName}</p>
                                <p className='profile-left-col'>Last Name:</p><p className='profile-right-col'>{profile.lastName}</p>
                                <p className='profile-left-col'>Email:</p><p className='profile-right-col'>{profile.email}</p>
                            </>
                    }
                </div>
                <div className='profile-back' onClick={() => navigate("/")} >
                    <ArrowLeftOutlined />
                </div>
            </div>
        </div>
    );
}

export default Profile;
