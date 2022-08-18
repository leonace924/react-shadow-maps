import React from 'react';

export interface IIconProps {
  type: string;
  onClick?: () => void;
}

const Icon = ({ type, onClick, ...props }: IIconProps) => {
  return (
    <div onClick={onClick}>
      {type === 'wind' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1 6.80001C12.1 3.56915 15.1892 0.950012 19 0.950012C22.8107 0.950012 25.9 3.56915 25.9 6.80001V7.77501C25.9 11.5444 22.2959 14.6 17.85 14.6H2.89998C1.62972 14.6 0.599976 13.727 0.599976 12.65C0.599976 11.5731 1.62972 10.7 2.89998 10.7H17.85C19.7554 10.7 21.3 9.39044 21.3 7.77501V6.80001C21.3 5.72306 20.2702 4.85001 19 4.85001C17.7297 4.85001 16.7 5.72306 16.7 6.80001V7.33183C16.7 8.40879 15.6702 9.28183 14.4 9.28183C13.1297 9.28183 12.1 8.40879 12.1 7.33183V6.80001ZM21.3 31.175C21.3 34.9444 24.9041 38 29.35 38C33.7959 38 37.4 34.9444 37.4 31.175V30.2C37.4 25.8922 33.281 22.4 28.2 22.4H5.19998C3.92972 22.4 2.89998 23.2731 2.89998 24.35C2.89998 25.427 3.92972 26.3 5.19998 26.3H28.2C30.7405 26.3 32.8 28.0461 32.8 30.2V31.175C32.8 32.7904 31.2554 34.1 29.35 34.1C27.4446 34.1 25.9 32.7904 25.9 31.175V30.2C25.9 29.1231 24.8702 28.25 23.6 28.25C22.3297 28.25 21.3 29.1231 21.3 30.2V31.175ZM7.49998 16.55C6.22972 16.55 5.19998 17.4231 5.19998 18.5C5.19998 19.577 6.22972 20.45 7.49998 20.45H30.5C31.7702 20.45 32.8 19.577 32.8 18.5C32.8 17.4231 31.7702 16.55 30.5 16.55H7.49998Z"
            fill="#231815"
          />
        </svg>
      )}
      {type === 'sun' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 21C32 27.0751 27.0751 32 21 32C14.9249 32 10 27.0751 10 21C10 14.9249 14.9249 10 21 10C27.0751 10 32 14.9249 32 21Z"
            stroke="#231815"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="21"
            x2="36"
            y2="21"
            stroke="#F25022"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="6"
            y1="21"
            x2="2"
            y2="21"
            stroke="#F25022"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="40"
            y1="21"
            x2="36"
            y2="21"
            stroke="#231815"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="6"
            y1="21"
            x2="2"
            y2="21"
            stroke="#231815"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g clip-path="url(#clip0_44_215)">
            <line
              x1="37.4545"
              y1="30.5"
              x2="33.9904"
              y2="28.5"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip1_44_215)">
            <line
              x1="8.00963"
              y1="13.5"
              x2="4.54553"
              y2="11.5"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip2_44_215)">
            <line
              x1="30.5"
              y1="37.4545"
              x2="28.5"
              y2="33.9904"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip3_44_215)">
            <line
              x1="13.5"
              y1="8.00962"
              x2="11.5"
              y2="4.54551"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip4_44_215)">
            <line
              x1="21"
              y1="40"
              x2="21"
              y2="36"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip5_44_215)">
            <line
              x1="21"
              y1="6"
              x2="21"
              y2="2"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip6_44_215)">
            <line
              x1="11.5"
              y1="37.4545"
              x2="13.5"
              y2="33.9904"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip7_44_215)">
            <line
              x1="28.5"
              y1="8.00962"
              x2="30.5"
              y2="4.54551"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip8_44_215)">
            <line
              x1="4.54551"
              y1="30.5"
              x2="8.00962"
              y2="28.5"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clip-path="url(#clip9_44_215)">
            <line
              x1="33.9904"
              y1="13.5"
              x2="37.4545"
              y2="11.5"
              stroke="#231815"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z"
            fill="#FFB900"
          />
          <defs>
            <clipPath id="clip0_44_215">
              <rect
                x="33.2583"
                y="25.7679"
                width="8"
                height="4"
                rx="2"
                transform="rotate(30 33.2583 25.7679)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip1_44_215">
              <rect
                x="3.81348"
                y="8.76794"
                width="8"
                height="4"
                rx="2"
                transform="rotate(30 3.81348 8.76794)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip2_44_215">
              <rect
                x="29.2321"
                y="31.2583"
                width="8"
                height="4"
                rx="2"
                transform="rotate(60 29.2321 31.2583)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip3_44_215">
              <rect
                x="12.2321"
                y="1.81348"
                width="8"
                height="4"
                rx="2"
                transform="rotate(60 12.2321 1.81348)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip4_44_215">
              <rect
                x="23"
                y="34"
                width="8"
                height="4"
                rx="2"
                transform="rotate(90 23 34)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip5_44_215">
              <rect x="23" width="8" height="4" rx="2" transform="rotate(90 23 0)" fill="white" />
            </clipPath>
            <clipPath id="clip6_44_215">
              <rect
                x="16.2321"
                y="33.2583"
                width="8"
                height="4"
                rx="2"
                transform="rotate(120 16.2321 33.2583)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip7_44_215">
              <rect
                x="33.2321"
                y="3.81348"
                width="8"
                height="4"
                rx="2"
                transform="rotate(120 33.2321 3.81348)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip8_44_215">
              <rect
                x="10.7417"
                y="29.2321"
                width="8"
                height="4"
                rx="2"
                transform="rotate(150 10.7417 29.2321)"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip9_44_215">
              <rect
                x="40.1865"
                y="12.2321"
                width="8"
                height="4"
                rx="2"
                transform="rotate(150 40.1865 12.2321)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === 'hot' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="35"
          viewBox="0 0 19 35"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 0C12.2483 0 14.4762 2.20988 14.4762 4.9359V17.5491C17.1882 19.2064 19 22.1798 19 25.5769C19 30.7811 14.7467 35 9.5 35C4.25329 35 0 30.7811 0 25.5769C0 22.1798 1.81179 19.2064 4.52381 17.5491V4.9359C4.52381 2.20988 6.75173 0 9.5 0ZM6.78571 18.9193C4.13311 19.9844 2.2619 22.5639 2.2619 25.5769C2.2619 29.542 5.50251 32.7564 9.5 32.7564C13.4975 32.7564 16.7381 29.542 16.7381 25.5769C16.7381 22.5639 14.8669 19.9844 12.2143 18.9193V4.9359C12.2143 3.44898 10.9991 2.24359 9.5 2.24359C8.00094 2.24359 6.78571 3.44898 6.78571 4.9359V18.9193Z"
            fill="#231815"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 5C10.3284 5 11 5.67157 11 6.5V19.689C13.5878 20.3551 15.5 22.7042 15.5 25.5C15.5 28.8137 12.8137 31.5 9.5 31.5C6.18629 31.5 3.5 28.8137 3.5 25.5C3.5 22.7042 5.41216 20.3551 8 19.689V6.5C8 5.67157 8.67157 5 9.5 5Z"
            fill="#F25022"
          />
        </svg>
      )}
      {type === 'chevron-down' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.289218 1.74964C0.287486 1.49365 0.383752 1.23699 0.577428 1.04067C0.965774 0.647038 1.59776 0.642762 1.9914 1.03111L5.31868 4.31367L8.59009 1.11147C8.98549 0.725782 9.61855 0.732499 10.0042 1.1269C10.3899 1.5223 10.3832 2.15536 9.98979 2.54103L6.01601 6.43C5.62559 6.81165 5.00257 6.81087 4.61396 6.42749L0.586995 2.45464C0.39068 2.26097 0.29095 2.00563 0.289218 1.74964Z"
            fill="black"
          />
        </svg>
      )}
      {/* {type === 'wind' && (
      )} */}
    </div>
  );
};

export default Icon;
