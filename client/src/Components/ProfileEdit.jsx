function ProfileEdit(props) {
    return (
        <div className="flex justify-center  min-h-screen">
            <div className='mt-12 w-4/5 sm:w-3/5'>
                <form className="bg-white overflow-hidden shadow rounded-lg border w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="name" name='name' defaultValue={props.user.username} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Name" required
                                        onChange={(e) => {
                                            props.setUser({
                                                ...props.user,
                                                username: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Email Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="email" name='email' defaultValue={props.user.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Email" required
                                        onChange={(e) => {
                                            props.setUser({
                                                ...props.user,
                                                email: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    City
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="cityName" name='cityName' defaultValue={props.user.cityName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter City Name" required
                                        onChange={(e) => {
                                            props.setUser({
                                                ...props.user,
                                                cityName: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div></div>
                        </dl>
                    </div>
                    <div className='flex justify-between py-3 px-5'>
                        <button onClick={() => props.setEdit(false)} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out' >Cancel</button>
                        <button onClick={(event) => props.save(event)} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out' >Save</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ProfileEdit