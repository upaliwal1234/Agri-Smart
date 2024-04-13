import React from 'react';

function ProfilePage() {
    return (
        <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Profile</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Name</h3>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Email</h3>
                        <p>johndoe@example.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Location</h3>
                        <p>New York, USA</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Bio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
