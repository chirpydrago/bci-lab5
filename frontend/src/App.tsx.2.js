<div className="min-h-screen bg-gray-800">
          {/* <!-- nav bar goes here --> */}
          <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                {/* <div className="flex space-x-4"> */}
                  {/* <!-- logo -->     */}
                  <div>
                    <a href="#" className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900">
                      <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span className="font-bold">My Swap</span>
                    </a>
                  </div>

                  {/* <!-- primary nav --> */}
                  <div className="hidden md:flex items-center space-x-1">
                    <a href="" className="px-5 py-4 text-gray-700 hover:text-gray-900">Swap</a>
                    <a href="" className="px-5 py-4 text-gray-700 hover:text-gray-900">Add Liquidity</a>
                  </div>

                {/* </div> */}
                {/* <!-- secondary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                  <a href="#" className="px-3 py-5 text-gray-700">Login</a>
                  <a href="#" className="px-3 py-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                </div>

                {/* <!--       mobile button goes here --> */}
                <div className="md:hidden flex items-center">
                  <button className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* <!--   mobile menu here --> */}
            <div className="mobile-menu hidden md:hidden">
              <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
              <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>
          </nav>

          {/* <!-- content goes here --> */}
          <div className=" max-h-screen py-32 text-center bg-pink-500">
            <h2 className=" max-h-full font-extrabold text-4xl bg-pink-800">Navbars in Tailwind</h2>
          </div>
        </div>