import React from 'react'

export default function App() {
  return (
    <div>
      <h1>bai 1</h1>
      <h3 className="text-red-600 text-[32px]">day la tieu de</h3>
      <h1>bai2</h1>
      <div className="w-[200px] h-[200px] bg-red-500 rounded-none"></div>
      <h1>bai3</h1>
      <div className="flex space-x-4 my-8">
  <div className="w-[200px] h-[200px] rounded-full bg-blue-500"></div>
  <div className="w-[200px] h-[200px] rounded-full bg-green-500"></div>
  <div className="w-[200px] h-[200px] rounded-full bg-red-500"></div>
</div>
  <h1>bai4</h1>
  <div className="p-5">
    <button className="h-9 rounded-3xl text-white bg-blue-500 hover:bg-blue-800 focus:bg-blue-900 outline-none px-5">submit</button>
  </div>
  <h1>bai5</h1>
  <div className="w-[600px] h-[400px] bg-blue-200 flex justify-center items-center">

  <div className="w-[400px] h-[300px] bg-blue-400 relative">
  <p>Relative parent</p>
  <button className="absolute left-0 bottom-0 bg-blue-700">
    <p>Absolute child</p>
    </button>
  </div>
</div>
  <h1>bai6</h1>
    <div className="max-h-[300px] max-w-[500px] overflow-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio, error odit et itaque ipsum, asperiores temporibus officiis suscipit minus aliquam fugiat rem nemo molestiae quam deleniti porro distinctio harum.
Culpa possimus, porro blanditiis iure perferendis placeat repudiandae quam odio nesciunt neque, praesentium assumenda impedit magnam doloribus sequi tempore. Consequuntur aliquid veniam quam commodi necessitatibus quas fugiat, enim cumque porro.
Totam quae consectetur excepturi fuga magnam, quaerat harum. Neque delectus reiciendis placeat esse cum eum perferendis dignissimos assumenda possimus ducimus temporibus sed autem maxime, quia tempore dolore, illum quaerat fugit!
Voluptatem, iusto necessitatibus sed, asperiores voluptates ea eveniet blanditiis quis voluptas esse in? Repellendus, accusantium! Ut temporibus, veritatis provident eligendi neque animi expedita odit reiciendis quia itaque ab doloribus. Odio.
Illum id, et amet voluptatum fuga doloribus in similique eveniet. Mollitia, exercitationem. Ex similique, eligendi repellendus totam quo consequuntur perferendis laboriosam excepturi veritatis praesentium at voluptatem sed ducimus adipisci asperiores.
In facilis quos modi, quae debitis repellendus quasi amet cumque, voluptatem possimus nobis cum itaque eligendi non dicta? Officiis, cumque id! Itaque eius ad facilis placeat beatae dolores accusamus vitae!
Placeat, pariatur excepturi error laboriosam laborum rem non tenetur deleniti accusantium nulla aut. Excepturi vero esse natus ipsum unde voluptates iure deleniti vel, voluptate odit officia enim culpa corrupti ipsam?
Perspiciatis ad porro aspernatur similique laboriosam inventore repellendus. Minus iste illum ea est odio fugit quasi distinctio officia sunt laudantium. Rerum nam fugit expedita cum unde voluptatum, reiciendis quis soluta.
Distinctio debitis eaque doloremque fugit corporis porro soluta ut aliquid, libero corrupti expedita necessitatibus aspernatur suscipit quibusdam voluptas eum magnam laborum accusantium rerum sunt nesciunt placeat. Reiciendis quisquam consequuntur quam?
Optio dolorem, amet impedit et quisquam error modi atque necessitatibus aliquam ratione voluptatum architecto quas consectetur earum nesciunt laborum in unde temporibus, minima iste ab sint accusamus! Delectus, perspiciatis quisquam.
    </div>

    <h1>bai7</h1>
    <div className="flex space-x-4 my-8">
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  </div>
  <div className="flex space-x-4 my-8">
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  </div>
  <div className="flex space-x-4 my-8">
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  <div className="w-[100px] h-[50px]  bg-purple-500"></div>
  </div>

  <h1>bai 8</h1>
    <div>
       
        <div className="flex justify-start gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-end gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-center gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-between gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div><br />
        <div className="flex justify-around gap-3">
            <button className='bg-blue-500 p-3'>01</button>
            <button className='bg-blue-500 p-3'>02</button>
            <button className='bg-blue-500 p-3'>03</button>
        </div>
    </div>
    <h1>bai9</h1>
    <div>
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
            <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ">
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                    <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                    <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-square-pen"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Posts</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-regular fa-image"></i>
                <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Media</span>
                </div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-align-left"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Pages</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-message"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Comments</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-table"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">appearance</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">plugins</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-users"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">user</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-gear"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">settings</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-bars-progress"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">tools</span>
            </div>
            <div className=" p-2.5 mt-20 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-moon"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">light Mode</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </div>
        </div>
      <h1>bai10</h1>
  
    <div>
      
      <div className="max-w-md mx-auto p-4 space-y-4 bg-white rounded-lg shadow-md">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Username"
            type="text"
            id="username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Password"
            type="password"
            id="password"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input-text"
          >
            Input text label
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter label"
            type="text"
            id="input-text"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="remember-me"
              name="radio-group"
            />
            <label className="text-gray-700" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <div className="flex items-center">
            <input className="mr-2" type="radio" id="radio1" name="radio-group" />
            <label className="text-gray-700" htmlFor="radio1">
              Radio Selection 1
            </label>
          </div>
          <div className="flex items-center">
            <input className="mr-2" type="radio" id="radio2" name="radio-group" />
            <label className="text-gray-700" htmlFor="radio2">
              Radio Selection 2
            </label>
          </div>
          <div className="flex items-center">
            <input className="mr-2" type="radio" id="radio3" name="radio-group" />
            <label className="text-gray-700" htmlFor="radio3">
              Radio Selection 3
            </label>
          </div>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dropdown"
          >
            Dropdown
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="dropdown"
          >
            <option value="">Dropdown option</option>
            <option value="1">Dropdown option 1</option>
            <option value="2">Dropdown option 2</option>
          </select>
        </div>
        <div className="flex space-x-4 mt-4 justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Next
          </button>
        </div>
      </div>
    </div>

    </div>
  );
}
