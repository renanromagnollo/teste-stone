import { styled } from 'styled-components';

interface LogoLogomarcaRomagnolloProps {
  theme?: string;
  // width?: string;
  height?: string;
}

const Logomarca = styled.div`
  width: 45px;
  overflow: hidden;
  /* position: absolute; */
  right: 50px;
  transition: all 1s ease-in-out;
  opacity: 0.8;

  &:hover {
    width: 300px;
    opacity: 1;
  }
`;

export function LogoRomagnollo({ height = '31' }: LogoLogomarcaRomagnolloProps) {
  return (
    <Logomarca>
      <svg
        width="299"
        height={height}
        viewBox="0 0 299 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_925_3938)">
          <path
            d="M40.4545 30.2822V30.3613L36.1659 30.3734C32.8395 26.861 29.3979 23.0625 26.0696 19.55C27.197 19.6231 28.5548 19.4121 29.8301 18.8889C33.1296 22.371 37.1819 26.7758 40.4526 30.2802L40.4545 30.2822Z"
            fill="#0D99FF"
          />
          <path
            d="M0.000793457 0.610596H26.7155C36.6582 0.610596 37.4782 19.0917 25.8763 19.0917H24.8526L35.2523 30.2396V30.3694L28.2078 30.3917L12.1348 13.4316L11.814 13.0807H12.1348H26.0241C30.1687 13.0807 30.063 6.69863 26.0241 6.69863H9.6592L7.41408 8.43054L0.000793457 0.612624L0.000793457 0.610596Z"
            fill="#2D2E32"
          />
        </g>
        <path
          d="M49.4012 14.6491H56.0247C56.5642 14.6491 57.0243 14.4838 57.4019 14.1526C57.7823 13.822 57.9709 13.4181 57.9709 12.9479C57.9709 12.4776 57.7823 12.0767 57.4019 11.7461C57.0243 11.412 56.5642 11.2466 56.0247 11.2466H49.4012V14.6491V14.6491ZM53.3202 16.3503H49.4089L49.4012 20.816C49.4012 21.2427 49.2067 21.4545 48.8187 21.4545H48.0394C47.6486 21.4545 47.4546 21.2427 47.4546 20.816V10.1839C47.4546 9.76022 47.6486 9.54541 48.0394 9.54541H56.0247C57.0987 9.54541 58.0162 9.87902 58.7764 10.5413C59.5371 11.2061 59.9197 12.0074 59.9197 12.9479C59.9197 13.8888 59.5371 14.6927 58.7764 15.3549C58.0162 16.0197 57.0986 16.3503 56.0247 16.3503H55.7187L59.5289 20.177C59.7896 20.4616 59.9197 20.6705 59.9197 20.8071C59.9197 21.2397 59.7229 21.4545 59.3349 21.4545H58.7501C58.4895 21.4545 58.1649 21.2427 57.7768 20.816L53.3202 16.3503L53.3202 16.3503Z"
          fill="#2D2E32"
        />
        <path
          d="M64.0307 12.9476C64.0307 12.0072 64.411 11.2058 65.1713 10.5411C65.932 9.87879 66.8518 9.54517 67.9261 9.54517H75.911C76.2991 9.54517 76.4958 9.75999 76.4958 10.1837V10.6103C76.4958 11.0345 76.2991 11.2464 75.911 11.2464H67.9261C67.3862 11.2464 66.9266 11.4117 66.5462 11.7458C66.1686 12.0765 65.9773 12.4774 65.9773 12.9476V14.6488H74.3529C74.741 14.6488 74.9377 14.8607 74.9377 15.2879V15.7116C74.9377 16.1382 74.741 16.3501 74.3529 16.3501H65.9773V18.0518C65.9773 18.522 66.1686 18.9225 66.5462 19.2566C66.9266 19.5872 67.3862 19.753 67.9261 19.753H75.911C76.2991 19.753 76.4958 19.9649 76.4958 20.3915V20.8157C76.4958 21.2424 76.2991 21.4543 75.911 21.4543H67.9261C66.8518 21.4543 65.932 21.1231 65.1713 20.4584C64.411 19.7966 64.0307 18.9922 64.0307 18.0518V12.9476V12.9476Z"
          fill="#2D2E32"
        />
        <path
          d="M80.6153 10.0297C80.6098 10.0094 80.6071 9.98618 80.6071 9.96292C80.6071 9.68425 80.8011 9.54517 81.1919 9.54517H81.9712C82.1013 9.54517 82.3592 9.75999 82.7505 10.1837L91.1234 18.6121V10.1837C91.1234 9.75998 91.3174 9.54517 91.7082 9.54517H92.4874C92.8755 9.54517 93.0722 9.75999 93.0722 10.1837V20.8068C93.0722 21.2394 92.8755 21.4543 92.4874 21.4543H91.7082C91.5781 21.4543 91.3174 21.2424 90.9294 20.8157L82.5537 12.2071V20.8157C82.5537 21.2424 82.3592 21.4543 81.9712 21.4543H81.1919C80.8011 21.4543 80.6071 21.2424 80.6071 20.8157V10.1837C80.6071 10.1342 80.6098 10.0822 80.6153 10.0297Z"
          fill="#2D2E32"
        />
        <path
          d="M100.066 18.9022L99.1303 20.8157C98.8723 21.2424 98.6117 21.4543 98.3537 21.4543H97.7685C97.3777 21.4543 97.1837 21.2454 97.1837 20.8242C97.1837 20.6762 97.2476 20.4613 97.3777 20.1767L102.443 10.1837C102.571 9.75998 102.768 9.54517 103.026 9.54517H103.805C104.065 9.54517 104.259 9.75999 104.39 10.1837L109.452 20.1856C109.583 20.4643 109.649 20.6732 109.649 20.8157C109.649 21.2424 109.452 21.4543 109.064 21.4543H108.479C108.219 21.4543 107.961 21.2424 107.7 20.8157L106.767 18.9022H100.066H100.066ZM105.94 17.2009L103.416 12.0126L100.893 17.2009H105.94H105.94Z"
          fill="#2D2E32"
        />
        <path
          d="M113.768 10.0297C113.763 10.0094 113.76 9.98618 113.76 9.96292C113.76 9.68425 113.954 9.54517 114.345 9.54517H115.124C115.254 9.54517 115.512 9.75999 115.903 10.1837L124.276 18.6121V10.1837C124.276 9.75998 124.47 9.54517 124.861 9.54517H125.64C126.028 9.54517 126.225 9.75999 126.225 10.1837V20.8068C126.225 21.2394 126.028 21.4543 125.64 21.4543H124.861C124.731 21.4543 124.47 21.2424 124.082 20.8157L115.706 12.2071V20.8157C115.706 21.2424 115.512 21.4543 115.124 21.4543H114.345C113.954 21.4543 113.76 21.2424 113.76 20.8157V10.1837C113.76 10.1342 113.763 10.0822 113.768 10.0297Z"
          fill="#2D2E32"
        />
        <path
          d="M137.152 14.6489H143.775C144.315 14.6489 144.775 14.4835 145.152 14.1524C145.533 13.8217 145.721 13.4179 145.721 12.9476C145.721 12.4774 145.533 12.0765 145.152 11.7458C144.775 11.4117 144.315 11.2464 143.775 11.2464H137.152V14.6488V14.6489ZM141.071 16.3501H137.159L137.152 20.8157C137.152 21.2424 136.957 21.4543 136.569 21.4543H135.79C135.399 21.4543 135.205 21.2424 135.205 20.8157V10.1837C135.205 9.75998 135.399 9.54517 135.79 9.54517H143.775C144.849 9.54517 145.767 9.87878 146.527 10.5411C147.288 11.2058 147.67 12.0072 147.67 12.9476C147.67 13.8886 147.288 14.6924 146.527 15.3547C145.767 16.0194 144.849 16.3501 143.775 16.3501H143.469L147.279 20.1767C147.54 20.4614 147.67 20.6702 147.67 20.8068C147.67 21.2394 147.473 21.4543 147.085 21.4543H146.501C146.24 21.4543 145.915 21.2424 145.527 20.8158L141.071 16.3501L141.071 16.3501Z"
          fill="#0D99FF"
        />
        <path
          d="M153.728 18.0518C153.728 18.522 153.92 18.9225 154.297 19.2566C154.677 19.5872 155.137 19.7531 155.677 19.7531H160.352C160.891 19.7531 161.351 19.5872 161.729 19.2566C162.109 18.9225 162.298 18.5221 162.298 18.0518V12.9476C162.298 12.4774 162.109 12.0765 161.729 11.7458C161.351 11.4117 160.891 11.2464 160.352 11.2464H155.677C155.137 11.2464 154.677 11.4117 154.297 11.7458C153.92 12.0765 153.728 12.4774 153.728 12.9476V18.0518ZM164.247 18.0518C164.247 18.9923 163.864 19.7966 163.103 20.4584C162.343 21.1231 161.426 21.4543 160.352 21.4543H155.677C154.603 21.4543 153.683 21.1231 152.922 20.4584C152.162 19.7966 151.782 18.9923 151.782 18.0518V12.9476C151.782 12.0072 152.162 11.2058 152.922 10.5411C153.683 9.87879 154.603 9.54517 155.677 9.54517H160.352C161.426 9.54517 162.343 9.87878 163.103 10.5411C163.864 11.2058 164.247 12.0072 164.247 12.9476V18.0518Z"
          fill="#0D99FF"
        />
        <path
          d="M170.304 12.7442V20.8157C170.304 21.2424 170.11 21.4543 169.722 21.4543H168.942C168.552 21.4543 168.358 21.2424 168.358 20.8157V10.1837C168.358 9.75998 168.552 9.54517 168.942 9.54517H170.304C170.564 9.54517 170.825 9.75999 171.083 10.1837L175.369 18.9863L179.653 10.1837C179.913 9.75998 180.171 9.54517 180.432 9.54517H181.796C182.185 9.54517 182.379 9.75999 182.379 10.1837V20.8157C182.379 21.2424 182.185 21.4543 181.796 21.4543H181.017C180.626 21.4543 180.432 21.2424 180.432 20.8157V12.7358L176.343 20.8157C176.212 21.2424 176.018 21.4543 175.758 21.4543H174.979C174.721 21.4543 174.524 21.2424 174.396 20.8157L170.304 12.7442Z"
          fill="#0D99FF"
        />
        <path
          d="M189.374 18.9022L188.439 20.8157C188.181 21.2424 187.92 21.4543 187.662 21.4543H187.077C186.686 21.4543 186.492 21.2454 186.492 20.8242C186.492 20.6762 186.556 20.4613 186.686 20.1767L191.752 10.1837C191.88 9.75998 192.076 9.54517 192.334 9.54517H193.113C193.374 9.54517 193.568 9.75999 193.698 10.1837L198.761 20.1856C198.891 20.4643 198.957 20.6732 198.957 20.8157C198.957 21.2424 198.761 21.4543 198.373 21.4543H197.788C197.527 21.4543 197.269 21.2424 197.008 20.8157L196.075 18.9022H189.374ZM195.248 17.2009L192.725 12.0126L190.201 17.2009H195.248Z"
          fill="#0D99FF"
        />
        <path
          d="M206.964 21.4543C205.889 21.4543 204.97 21.1231 204.209 20.4584C203.449 19.7966 203.068 18.9923 203.068 18.0518V12.9476C203.068 12.0072 203.449 11.2058 204.209 10.5411C204.97 9.87879 205.889 9.54517 206.964 9.54517H214.949C215.337 9.54517 215.533 9.75999 215.533 10.1837V10.6103C215.533 11.0345 215.337 11.2464 214.949 11.2464H206.964C206.424 11.2464 205.964 11.4117 205.584 11.7458C205.206 12.0765 205.015 12.4774 205.015 12.9476V18.0518C205.015 18.522 205.206 18.9225 205.584 19.2566C205.964 19.5872 206.424 19.753 206.964 19.753H213.585V15.2879C213.585 14.8607 213.779 14.6489 214.169 14.6489H214.949C215.337 14.6489 215.533 14.8607 215.533 15.2879V20.8158C215.533 21.2424 215.337 21.4543 214.949 21.4543H206.964V21.4543Z"
          fill="#0D99FF"
        />
        <path
          d="M219.653 10.0297C219.648 10.0094 219.645 9.98618 219.645 9.96292C219.645 9.68425 219.839 9.54517 220.23 9.54517H221.009C221.139 9.54517 221.397 9.75999 221.788 10.1837L230.161 18.6121V10.1837C230.161 9.75998 230.355 9.54517 230.746 9.54517H231.525C231.913 9.54517 232.11 9.75999 232.11 10.1837V20.8068C232.11 21.2394 231.913 21.4543 231.525 21.4543H230.746C230.616 21.4543 230.355 21.2424 229.967 20.8157L221.591 12.2071V20.8157C221.591 21.2424 221.397 21.4543 221.009 21.4543H220.23C219.839 21.4543 219.645 21.2424 219.645 20.8157V10.1837C219.645 10.1342 219.648 10.0822 219.653 10.0297Z"
          fill="#0D99FF"
        />
        <path
          d="M238.168 18.0518C238.168 18.522 238.359 18.9225 238.737 19.2566C239.117 19.5872 239.577 19.7531 240.117 19.7531H244.791C245.331 19.7531 245.791 19.5872 246.168 19.2566C246.549 18.9225 246.737 18.5221 246.737 18.0518V12.9476C246.737 12.4774 246.549 12.0765 246.168 11.7458C245.791 11.4117 245.331 11.2464 244.791 11.2464H240.117C239.577 11.2464 239.117 11.4117 238.737 11.7458C238.359 12.0765 238.168 12.4774 238.168 12.9476V18.0518ZM248.686 18.0518C248.686 18.9923 248.304 19.7966 247.543 20.4584C246.783 21.1231 245.865 21.4543 244.791 21.4543H240.117C239.042 21.4543 238.122 21.1231 237.362 20.4584C236.601 19.7966 236.221 18.9923 236.221 18.0518V12.9476C236.221 12.0072 236.601 11.2058 237.362 10.5411C238.122 9.87879 239.042 9.54517 240.117 9.54517H244.791C245.865 9.54517 246.783 9.87878 247.543 10.5411C248.304 11.2058 248.686 12.0072 248.686 12.9476V18.0518Z"
          fill="#0D99FF"
        />
        <path
          d="M252.797 10.1837C252.797 9.75998 252.992 9.54517 253.382 9.54517H254.162C254.55 9.54517 254.744 9.75999 254.744 10.1837V18.0518C254.744 18.522 254.935 18.9225 255.313 19.2566C255.693 19.5872 256.153 19.753 256.693 19.753H264.678C265.066 19.753 265.263 19.9649 265.263 20.3916V20.8158C265.263 21.2424 265.066 21.4543 264.678 21.4543H256.693C255.619 21.4543 254.699 21.1231 253.938 20.4584C253.178 19.7966 252.797 18.9923 252.797 18.0518V10.1837Z"
          fill="#0D99FF"
        />
        <path
          d="M269.374 10.1837C269.374 9.75998 269.568 9.54517 269.959 9.54517H270.738C271.126 9.54517 271.32 9.75999 271.32 10.1837V18.0518C271.32 18.522 271.512 18.9225 271.889 19.2566C272.27 19.5872 272.729 19.753 273.269 19.753H281.254C281.642 19.753 281.839 19.9649 281.839 20.3916V20.8158C281.839 21.2424 281.642 21.4543 281.254 21.4543H273.269C272.195 21.4543 271.275 21.1231 270.514 20.4584C269.754 19.7966 269.374 18.9923 269.374 18.0518V10.1837Z"
          fill="#0D99FF"
        />
        <path
          d="M287.897 18.0518C287.897 18.522 288.088 18.9225 288.466 19.2566C288.846 19.5872 289.306 19.7531 289.845 19.7531H294.52C295.06 19.7531 295.52 19.5872 295.897 19.2566C296.278 18.9225 296.466 18.5221 296.466 18.0518V12.9476C296.466 12.4774 296.278 12.0765 295.897 11.7458C295.52 11.4117 295.06 11.2464 294.52 11.2464H289.845C289.306 11.2464 288.846 11.4117 288.466 11.7458C288.088 12.0765 287.897 12.4774 287.897 12.9476V18.0518ZM298.415 18.0518C298.415 18.9923 298.033 19.7966 297.272 20.4584C296.512 21.1231 295.594 21.4543 294.52 21.4543H289.845C288.771 21.4543 287.851 21.1231 287.091 20.4584C286.33 19.7966 285.95 18.9923 285.95 18.0518V12.9476C285.95 12.0072 286.33 11.2058 287.091 10.5411C287.851 9.87879 288.771 9.54517 289.845 9.54517H294.52C295.594 9.54517 296.512 9.87878 297.272 10.5411C298.033 11.2058 298.415 12.0072 298.415 12.9476V18.0518Z"
          fill="#0D99FF"
        />
        <defs>
          <clipPath id="clip0_925_3938">
            <rect
              width="40.4546"
              height="29.7791"
              fill="white"
              transform="translate(0 0.610352)"
            />
          </clipPath>
        </defs>
      </svg>
    </Logomarca>
  );
}
