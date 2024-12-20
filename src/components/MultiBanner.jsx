import React from 'react'

const MultiBanner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto'>
                {/* first banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://clipkulture.com/wp-content/uploads/2020/07/screenshot-1593618466k84ng.png" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
                {/* second banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                    </div>
                </div>
                {/* third banner */}
                <div className='relative h-[250px] col-span-1 sm:col-span-2'>
                    <img 
                    src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="season sale" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                        <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                        <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fourth banner */}
                <div className='relative h-[250px] col-span-1 sm:col-span-2'>
                    <img 
                    src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="season sale" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                        <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                        <button className='text-white bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fifth banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                    </div>
                </div>
                {/* sixth banner */}
                <div className='relative h-[250px]'>
                    <img 
                    src="https://cdn.shopify.com/s/files/1/0659/8374/2186/products/photo_2022-08-06_21-27-58_2.jpg?v=1666965546" 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiBanner
