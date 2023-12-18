import React from 'react'

const Stat = () => {
  return (
    <div className="mt-10 w-full bg-cover l bg-[url(/teal.jpg)] 
    bg-no-repeat">
      <div className="flex flex-wrap justify-evenly gap-10 py-4">
        <div
          className="flex items-center p-16 card m-2 cursor-pointer border rounded-lg hover:shadow-md hover:border-opacity-0 transform  hover:bg-gray-500/10 transition-all duration-500 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-6xl"
        >
          <svg
            fill="#FFFFFF"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 470 470"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <polygon
                  points="440,7.5 440,105.5 415,105.5 415,135.5 440,135.5 440,333.5 415,333.5 415,363.5 440,363.5 440,462.5 470,462.5 470,7.5 "
                ></polygon>
                <polygon
                  points="163,333.5 223,333.5 223,264.5 292,264.5 292,204.5 223,204.5 223,135.5 163,135.5 163,204.5 94,204.5 94,264.5 163,264.5 "
                ></polygon>
                <path
                  d="M0,427.5h385v-385H0V427.5z M64,174.5h69v-69h120v69h69v120h-69v69H133v-69H64V174.5z"
                ></path>
              </g>
            </g>
          </svg>
          <div>
            <p className="pl-2 font-semibold text-gray-50 stroke-gray-800 font-primary">20</p>
            <p className="text-gray-50 text-sm pl-2">Салбарууд</p>
          </div>
        </div>
        
        <div
          className="flex items-center p-16 card m-2 cursor-pointer border rounded-lg hover:shadow-md  transform  hover:bg-gray-500/10 transition-all duration-500  focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-6xl"
        >
          <svg
            fill="#FFFFFF"
            height="40px"
            width="40px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {/* <style type="text/css">
                .st0 {
                  fill: #029f89;
                }
              </style> */}
              <g>
                <path
                  className="st0"
                  d="M471.786,276.239L234.34,41.502l0.064,0.068C207.64,14.794,172.399,1.333,137.313,1.357 c-35.086-0.023-70.33,13.437-97.096,40.214C13.434,68.346-0.018,103.58,0,138.669c-0.018,35.09,13.434,70.331,40.218,97.1 l237.439,234.73l-0.064-0.068c26.772,26.776,62.006,40.228,97.092,40.214c35.09,0.014,70.323-13.438,97.095-40.207 c26.784-26.784,40.236-62.032,40.221-97.114C512.016,338.241,498.567,303.008,471.786,276.239z M79.604,178.202 c-22.745-22.74-22.745-60.226,0.287-83.254c11.151-11.155,25.982-17.292,41.763-17.292L79.604,178.202z M448.653,447.311 c-20.466,20.45-47.14,30.615-73.969,30.623c-26.826-0.008-53.504-10.173-73.973-30.631l-0.053-0.052l-0.007-0.016L191.244,339.079 c0.321-2.108,0.805-4.58,1.504-7.323c2.532-10.134,7.629-23.783,15.319-38.219c11.522-21.69,28.881-45.208,51.826-63.339 c22.838-18.017,50.855-30.896,85.582-32.846l103.137,101.958l0.049,0.038c20.45,20.473,30.615,47.144,30.638,73.973 C479.276,400.152,469.119,426.83,448.653,447.311z"
                ></path>
              </g>
            </g>
          </svg>
          <div>
            <p className="pl-2 font-semibold text-gray-50  font-primary">5000</p>
            <p className="text-sm pl-2 text-gray-50">Бүтээгдэхүүний нэр төрөл</p>
          </div>
        </div>
        
          <div
          className="flex items-center p-16 card m-2 cursor-pointer border- border rounded-lg hover:shadow-md transform  hover:bg-gray-500/10 transition-all duration-500  focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-6xl"
        >
          <svg
            fill="#FFFFFF"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M483.733,499.397l-26.79-58.266c-6.909-15.027-22.842-31.328-36.529-37.46c-15.172-9.292-55.04-35.272-65.797-49.136 l-27.77-35.964c28.638-15.464,48.277-45.746,48.277-80.498v-0.922c20.571-4.248,36.571-22.717,36.571-44.792 c0-22.078-16-40.545-36.571-44.792V128.54c0-0.004,0-0.009,0-0.009v-27.654C375.124,45.451,329.72,0,274.242,0h-36.491 c-55.478,0-100.341,45.451-100.341,100.877v46.69c-20.571,4.248-36.571,22.714-36.571,44.792c0,22.076,16,40.545,36.571,44.792 v0.922c0,34.752,19.368,65.034,48.007,80.498l-27.973,35.964c-10.723,13.819-50.647,39.83-65.832,49.136 c-13.685,6.132-29.634,22.431-36.545,37.46l-26.797,58.266c-1.301,2.83-1.076,5.951,0.605,8.571 c1.683,2.625,4.578,4.031,7.694,4.031h438.857c3.116,0,6.016-1.406,7.699-4.031C484.805,505.348,485.034,502.228,483.733,499.397z M375.124,166.531c11.429,3.777,18.286,13.913,18.286,25.828s-6.857,22.051-18.286,25.828V166.531z M137.409,218.187 c-11.429-3.777-18.286-13.913-18.286-25.828c0-11.915,6.857-22.051,18.286-25.828V218.187z M155.695,100.877 c0-45.344,36.661-82.592,82.056-82.592h36.491c45.395,0,82.596,37.248,82.596,82.592v20.797 c-6.857,1.504-12.551,0.92-18.134-1.808c-19.085-9.321-28.051-39.444-28.136-39.732c-0.924-3.237-3.585-5.703-6.87-6.422 c-3.29-0.714-6.721,0.429-8.913,2.982c-26.469,30.884-64.77,43.308-92.344,48.292c-19.864,3.592-37.603,3.96-46.746,3.775V100.877 z M155.695,238.074v-90.982c2.286,0.031,2.942,0.054,4.705,0.054c28.795,0,92.995-5.214,138.056-47.784 c5.65,12.19,16.036,28.98,32.187,36.902c8.239,4.04,17.051,5.386,26.194,4.043v97.768c0,40.331-33.103,72.784-73.458,72.784 h-54.768C188.258,310.857,155.695,278.404,155.695,238.074z M50.833,493.714l20.828-45.125 c5.1-11.087,18.062-24.344,27.741-28.471c0.406-0.174,0.799-0.333,1.176-0.563c5.728-3.496,56.382-34.679,71.243-53.833 l30.866-39.77c0.047-0.06,0.074-0.304,0.118-0.366c8.19,2.413,16.846,3.556,25.806,3.556h54.768c8.96,0,17.614-1.138,25.806-3.549 c0.045,0.06,0.072,0.219,0.118,0.281l30.866,39.826c14.893,19.197,65.522,50.389,71.246,53.88c0.377,0.23,0.768,0.442,1.174,0.616 c9.681,4.127,22.643,17.301,27.739,28.389l20.83,45.129H50.833z"
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <polygon
                    points="329.409,420.571 329.409,384 311.124,384 311.124,420.571 274.552,420.571 274.552,438.857 311.124,438.857 311.124,475.429 329.409,475.429 329.409,438.857 365.981,438.857 365.981,420.571 "
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
          <div>
            <p className="pl-2 font-semibold text-gray-50 font-primary">200</p>
            <p className="text-sm pl-2 text-gray-50">Ажилчид</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stat