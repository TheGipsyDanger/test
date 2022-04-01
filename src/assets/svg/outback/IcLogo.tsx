import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import { colors } from '~/styles';
import Svg, { Path } from 'react-native-svg';

export const IcLogo = ({
  color = 'modals',
  width = 224,
  height = 81,
}: ISvgIconProps) => {
  return (
    <Svg width={width} height={height} viewBox={`0 0 224 81`} fill="none">
      <Path
        d="M99.2829 29.3544C101.338 29.3544 103.519 29.3736 105.698 29.3544C109.195 29.3161 112.695 29.2614 116.196 29.1902C117.797 29.1574 119.179 29.5844 120.703 30.2357C122.411 30.9609 123.303 32.0557 124.116 33.4514C124.869 34.7404 124.516 36.0103 124.319 37.4498C123.985 39.9293 122.045 41.5112 121.582 43.4324C122.874 45.3672 124.395 46.9518 125.049 48.8375C125.387 49.7481 125.515 50.723 125.424 51.6898C125.334 52.6567 125.027 53.5909 124.527 54.4232C124.026 55.2251 123.834 56.2267 123.298 56.993C122.824 57.7212 122.173 58.318 121.407 58.7281C119.491 59.634 117.428 59.8693 115.282 59.6449C113.982 59.5081 112.614 59.883 111.338 59.6613C109.896 59.415 108.423 59.415 106.981 59.6613C106.16 59.7927 105.282 59.4944 104.428 59.4287C103.949 59.3899 103.468 59.3991 102.991 59.4561C101.866 59.5984 100.747 59.7736 99.6277 59.9624C98.4618 60.1567 97.9857 59.4643 98.3031 58.5584C98.9271 56.7604 98.2894 54.8228 98.7164 53.2245C99.3622 50.7997 98.5658 48.572 98.7437 46.2813C98.9873 43.1806 99.1789 40.0771 99.3704 36.9763C99.3841 36.6147 99.3341 36.2534 99.2227 35.909C98.8477 34.672 98.6753 33.5143 99.2227 32.2007C99.5593 31.366 99.2829 30.2795 99.2829 29.3544ZM109.475 46.0487C109.379 47.9069 109.201 49.6858 109.231 51.4593C109.25 52.4828 110.099 52.9453 111.067 53.167C112.036 53.3887 112.709 52.8578 113.054 52.1188C113.511 51.1925 113.809 50.1962 113.935 49.1713C114.16 46.908 113.158 45.9611 110.887 46.0459C110.572 46.0514 110.257 46.0405 109.475 46.0405V46.0487ZM114.16 36.4919C114.098 36.1531 113.991 35.8244 113.84 35.5149C113.257 34.5625 111.65 34.0699 110.405 34.4886C109.228 34.8882 108.872 35.8734 108.955 36.9928C109.014 37.9016 109.173 38.8011 109.431 39.6748C109.505 39.9375 109.643 40.1776 109.834 40.3733C110.024 40.5691 110.26 40.7142 110.521 40.7958C110.781 40.8773 111.058 40.8925 111.326 40.8402C111.594 40.7878 111.845 40.6694 112.055 40.4958C113.331 39.538 114.02 38.2544 114.152 36.4837L114.16 36.4919Z"
        fill={colors[color]}
      />
      <Path
        d="M16.7564 59.3687C14.3481 58.9363 11.8029 58.8569 9.55876 58.0003C6.21991 56.7113 3.45579 54.7518 1.76447 51.1256C0.338621 48.0686 -0.0828465 45.1047 0.0129401 41.9191C0.0650132 39.3196 1.02774 36.8207 2.73328 34.8582C3.97851 33.4078 5.37152 32.0859 6.70158 30.7093C6.76118 30.6401 6.83616 30.5857 6.92052 30.5506C10.2594 29.4969 13.3629 27.6688 17.115 28.0519C20.5934 28.4077 23.5737 29.891 26.2229 31.8834C28.0052 33.2081 29.4477 34.9367 30.432 36.9273C31.4118 39.0346 31.8442 41.536 31.9071 43.8841C31.9673 46.0379 31.2175 48.2164 30.8124 50.3812C30.8097 50.4281 30.7925 50.473 30.7632 50.5098C28.4424 52.3379 27.4407 55.5263 24.5726 56.7441C22.0822 57.7978 19.7806 59.6205 16.7564 59.3687ZM19.9338 43.2218C19.7395 40.1758 19.3509 39.3383 17.2573 37.8112C15.2239 36.3306 11.6223 37.8824 11.4444 40.4303C11.3194 42.5523 11.345 44.6804 11.521 46.7987C11.6579 48.657 13.2205 50.3073 14.6765 50.4441C15.615 50.5207 16.5522 50.2825 17.3402 49.7671C18.1282 49.2516 18.7221 48.4884 19.0279 47.5979C19.474 46.1802 19.641 44.6805 19.9338 43.2218Z"
        fill={colors[color]}
      />
      <Path
        d="M223.348 34.6341C222.927 34.9461 222.5 35.217 222.128 35.5454C220.335 37.1327 218.512 38.6872 216.791 40.3484C215.696 41.3994 215.51 42.7951 215.735 44.2757C215.978 45.8958 216.342 47.1712 218.288 47.7596C219.744 48.1947 220.954 49.4482 222.262 50.3513C222.44 50.4745 222.68 50.6797 222.686 50.8521C222.741 52.5571 222.782 54.2648 222.765 55.9698C222.765 57.3218 222.653 58.6738 222.593 60.0367C221.586 60.0367 220.844 60.1407 220.149 60.0066C219.454 59.8725 218.597 59.6645 218.091 59.1855C217.078 58.2468 215.945 57.6283 214.771 56.9414C213.266 56.0574 212.128 54.4783 210.967 53.1099C210.056 52.0152 209.051 51.1942 207.62 50.8822C206.487 52.1794 206.681 53.7558 206.55 55.2775C206.427 56.7061 206.131 58.121 205.953 59.2786C204.648 59.3552 203.14 59.5167 201.635 59.514C200.13 59.5112 198.663 59.3361 197.078 59.2403V29.2646H206.501C206.558 29.5359 206.553 29.8168 206.484 30.0856C205.748 31.818 206.167 33.46 206.758 35.1158C207.366 36.8372 208.6 37.2723 209.979 36.0764C211.057 35.1459 211.947 34.0019 212.99 33.0112C213.863 32.171 214.812 31.4102 215.726 30.6275C215.932 30.455 216.233 30.3839 216.408 30.1923C217.664 28.7993 217.834 28.7665 219.391 29.7873C220.508 30.5207 221.498 31.3171 221.895 32.7238C222.054 33.315 222.672 33.7857 223.348 34.6341Z"
        fill={colors[color]}
      />
      <Path
        d="M161.403 59.0041C160.692 58.8645 160.194 58.6428 159.728 58.6975C158.264 58.8727 156.819 59.5185 155.366 58.536C155.142 58.3855 154.545 58.7331 154.145 58.9028C153.13 59.3352 152.383 59.3078 151.855 58.1036C150.987 56.1195 149.542 54.8879 147.202 54.981C146.072 55.0248 144.931 54.8332 143.8 54.8715C140.79 54.9728 139.334 56.9268 138.535 59.4118H129.846L131.761 55.1014C131.995 54.5814 132.229 54.0633 132.462 53.5469C133.009 52.3674 133.579 51.207 134.063 50.0083C134.594 48.7301 135.058 47.4257 135.456 46.1002C136.099 43.867 137.473 41.85 137.158 39.324C136.953 37.6573 136.545 36.8308 134.879 36.6967C133.557 36.5927 133.51 36.0043 133.614 34.9069C133.754 33.4947 133.614 32.0552 133.614 30.6293C133.614 30.1942 133.614 29.759 133.614 29.5127C135.618 29.5127 137.479 29.5456 139.337 29.5127C143.048 29.4334 146.759 29.2801 150.47 29.2637C150.902 29.2637 151.603 29.8493 151.726 30.29C152.46 32.8899 153.004 35.5445 153.735 38.1444C154.033 39.209 154.643 40.1833 155.103 41.2042C155.284 41.5982 155.601 42.0252 155.582 42.4001C155.506 43.7904 156.069 44.8632 156.707 46.0783C157.75 48.0597 158.387 50.2601 159.17 52.3729C159.849 54.1983 160.5 56.0347 161.149 57.871C161.255 58.2435 161.34 58.6218 161.403 59.0041ZM144.296 41.7296C143.814 42.7258 143.434 43.5934 142.988 44.4253C142.49 45.3531 142.58 47.0499 143.261 47.589C143.978 48.161 144.75 48.7439 145.708 48.0953C146.666 47.4467 147.851 46.9459 147.418 45.3941C147.284 44.9179 147.301 44.4034 147.213 43.9136C146.819 41.7871 146.236 41.4012 144.296 41.7296Z"
        fill={colors[color]}
      />
      <Path
        d="M65.2928 58.6517C64.7338 58.7894 64.1645 58.8809 63.5905 58.9253C61.4978 58.9418 59.3996 58.919 57.296 58.8569C56.8691 58.8569 56.2861 58.742 56.0508 58.4546C54.8521 56.9877 53.3906 57.2888 52.1071 58.0113C49.0447 59.7382 46.2668 59.0649 43.2619 57.7376C41.4857 56.9467 40.7222 55.8219 39.9367 54.1798C39.1157 52.4858 38.2481 50.8519 38.1496 48.98C38.0073 46.2213 37.9772 43.4544 37.9964 40.6903C38.0155 38.3011 38.27 35.9092 38.229 33.5228C38.2098 32.0969 37.8623 30.6792 37.6816 29.33C39.0008 29.0399 40.1174 28.6705 41.2558 28.5829C42.1343 28.5117 43.0347 28.81 43.9297 28.9113C44.5208 28.977 45.1749 29.1576 45.7003 28.9797C46.795 28.6102 47.1234 29.0646 46.9565 29.9814C46.5652 32.1516 46.7704 34.2535 46.9976 36.4456C47.2712 39.144 46.8717 41.9356 46.5925 44.6723C46.3462 47.0861 47.7119 50.7944 49.3703 51.6511C51.5077 52.7458 53.2866 52.0314 53.8614 49.6888C54.1455 48.4441 54.276 47.1693 54.25 45.8929C54.2144 41.1173 54.0967 36.3416 54.0064 31.566C54.0064 30.9748 53.9763 30.381 53.9517 29.7898C53.9079 28.7498 54.4142 28.6486 55.3365 28.7635C56.2588 28.8785 57.1455 28.5829 58.0459 28.6157C59.3416 28.648 60.6251 28.8759 61.8527 29.2917L63.0569 28.29L63.4619 28.3749C63.4619 29.3081 63.4619 30.2414 63.4619 31.1746C63.4948 33.3476 63.5632 35.5206 63.5714 37.6936C63.5714 38.5885 63.399 39.4861 63.4044 40.3811C63.4044 41.64 63.5495 42.8989 63.5659 44.1578C63.5659 44.9214 63.711 45.8382 63.3497 46.4129C62.7148 47.4337 62.7038 48.304 63.2265 49.2892C63.2965 49.4082 63.3403 49.5406 63.3552 49.6778C63.4564 52.7019 63.3087 55.7808 65.6568 58.3041L65.2928 58.6517Z"
        fill={colors[color]}
      />
      <Path
        d="M188.759 37.2473C186.57 37.2473 184.331 36.9736 182.191 37.3185C180.889 37.5366 179.645 38.018 178.536 38.7332C177.426 39.4485 176.474 40.3826 175.738 41.4783C174.293 43.561 174.665 45.9037 175.886 47.9508C177.106 49.9979 179.274 50.8161 181.543 50.9174C183.576 51.0077 185.626 50.7012 187.667 50.5698L188.8 50.5014C188.8 53.2382 188.833 55.8436 188.759 58.438C188.759 58.7582 188.212 59.2946 187.873 59.3329C187.052 59.4233 186.181 59.2864 185.333 59.2344C185.199 59.2344 185.059 59.1386 184.933 59.1578C182.372 59.5574 179.821 59.4616 177.243 59.2317C175.385 59.0647 173.433 59.5054 171.917 57.9646C171.786 57.8366 171.629 57.737 171.458 57.6717C169.041 56.7248 167.755 54.5573 166.312 52.6498C165.535 51.6262 165.355 50.1538 164.876 48.8949C163.781 46.0296 163.907 43.0821 164.509 40.1811C164.761 38.9687 165.62 37.874 166.239 36.7437C166.408 36.4345 166.728 36.2101 166.934 35.9227C169.703 31.927 173.376 29.5132 178.357 29.3545C180.938 29.2751 183.518 29.1684 186.102 29.0808C186.375 29.1001 186.65 29.1001 186.923 29.0808C188.809 28.7332 188.792 28.7278 188.773 30.6927C188.743 32.8219 188.759 34.943 188.759 37.2473Z"
        fill={colors[color]}
      />
      <Path
        d="M91.1638 35.8324C90.9476 35.8105 90.7287 35.7968 90.5098 35.7612C87.4035 35.244 85.6082 36.73 85.6246 39.9211C85.6383 42.4581 85.8381 44.9923 85.8518 47.5293C85.8518 50.5397 85.756 53.5748 85.7341 56.5962C85.7579 57.305 85.8191 58.0121 85.9175 58.7144C84.155 58.8622 82.3788 59.0264 80.6027 59.1523C79.6722 59.2207 78.7253 59.1523 77.8112 59.281C76.9902 59.4069 76.6809 59.0894 76.6481 58.3806C76.618 57.7456 76.67 57.108 76.6946 56.4648C76.8479 52.4418 77.5156 48.427 76.7822 44.3957C76.7425 43.9889 76.7425 43.5792 76.7822 43.1724C76.7822 41.6589 76.8944 40.1428 76.8013 38.6403C76.6973 36.9271 75.7066 36.0048 73.9934 35.9036C73.0985 35.8461 72.1981 35.9036 71.2402 35.9036V28.8236C72.0284 28.8838 72.636 28.9577 73.2435 28.9686C74.3191 28.9878 75.3974 28.9358 76.4702 28.9686C77.543 29.0015 78.5364 29.1657 79.5709 29.1657C80.5069 29.1657 81.4401 28.9741 82.3788 28.9412C83.9142 28.8892 85.4249 29.0014 86.7741 30.2877C87.6608 27.9806 89.6969 29.4913 91.5251 28.7031C91.4129 31.1799 91.2979 33.4213 91.1638 35.8324Z"
        fill={colors[color]}
      />
      <Path
        d="M122.605 75.0006C122.605 71.6043 124.825 69.2781 128.032 69.3C131.024 69.3219 133.117 71.6754 133.128 75.028C133.142 78.0384 130.813 80.6986 128.202 80.6958C124.847 80.6931 122.6 78.4051 122.605 75.0006ZM127.855 79.4697C129.987 79.508 131.924 77.5349 131.987 75.2579C132.064 72.5403 130.293 70.5151 127.756 70.4275C125.638 70.3536 123.829 72.3816 123.749 74.9158C123.667 77.606 125.307 79.4232 127.855 79.4697Z"
        fill={colors[color]}
      />
      <Path
        d="M82.0176 80.5048C83.2683 77.0099 84.5053 73.5123 85.7888 70.0284C85.8615 69.8756 85.9693 69.7421 86.1034 69.6389C86.2376 69.5357 86.3942 69.4657 86.5606 69.4346C86.7287 69.4548 86.8895 69.5151 87.0295 69.6104C87.1695 69.7056 87.2846 69.833 87.3652 69.9819C88.7664 73.4166 90.1266 76.8676 91.4977 80.3159L91.0626 80.6799C90.7314 80.3707 90.2716 80.1325 90.0938 79.7412C89.6906 78.8286 89.3371 77.8949 89.0346 76.9442C88.7609 76.1697 88.3121 75.7154 87.4172 75.8495C86.3745 76 85.0636 75.3022 84.4697 76.8211C84.0893 77.7899 83.7472 78.7779 83.3203 79.7303C83.0874 80.1299 82.8121 80.5033 82.4993 80.8441L82.0176 80.5048ZM86.8863 71.7937L86.4566 71.7663C86.1446 72.6174 85.8353 73.4685 85.4768 74.4483H87.8961C87.5075 73.4275 87.1955 72.6119 86.8863 71.7937Z"
        fill={colors[color]}
      />
      <Path
        d="M164.859 69.4233C166.969 69.4233 169.014 69.2153 171.009 69.7654C171.009 69.9488 171.028 70.1322 171.036 70.3128C169.859 70.4113 168.683 70.5399 167.503 70.6029C165.888 70.6905 165.207 71.6811 165.861 73.1782C165.979 73.4518 166.469 73.6899 166.805 73.7255C167.941 73.8186 169.085 73.7775 170.221 73.8569C170.494 73.8788 170.768 74.1634 171.02 74.3249C170.746 74.4863 170.503 74.76 170.229 74.7846C168.784 74.9051 167.333 74.9625 165.812 75.0583C165.812 76.2816 165.708 77.4284 165.872 78.5368C165.921 78.8843 166.657 79.3195 167.123 79.3824C168.154 79.5275 169.219 79.4235 170.262 79.5001C170.535 79.5193 170.765 79.8449 171.014 80.031C170.798 80.1952 170.582 80.499 170.363 80.5045C168.554 80.5428 166.745 80.5264 164.868 80.5264L164.859 69.4233Z"
        fill={colors[color]}
      />
      <Path
        d="M110.92 69.585C110.975 70.4334 111.068 71.2818 111.079 72.1302C111.101 73.9638 111.202 74.0842 112.995 74.0459C113.679 74.0459 114.363 73.9857 115.045 73.972C116.908 73.9337 116.98 73.8652 117.034 71.9413C117.059 71.1832 117.089 70.4252 117.116 69.6671L117.817 69.6808C117.979 73.1797 117.959 76.6847 117.76 80.1817C117.76 80.3514 117.365 80.5019 116.87 80.8823C116.87 79.1445 116.835 77.7542 116.87 76.3639C116.9 75.4115 116.468 75.0448 115.576 75.053C114.481 75.053 113.386 75.0722 112.292 75.053C111.353 75.0257 111 75.4389 111.008 76.3694C111.008 77.7898 110.929 79.2129 110.874 80.8495C109.807 80.0284 109.716 71.4104 110.45 69.6479L110.92 69.585Z"
        fill={colors[color]}
      />
      <Path
        d="M139.104 69.4294C139.232 69.8043 139.46 70.1765 139.47 70.5542C139.531 72.6013 139.517 74.6594 139.572 76.6955C139.618 78.4717 140.732 79.4842 142.544 79.4705C143.983 79.4705 145.261 78.1898 145.281 76.6407C145.324 74.4513 145.303 72.2619 145.322 70.0862C145.322 69.8782 145.412 69.6729 145.817 69.3418C145.976 69.7058 146.266 70.0698 146.271 70.4365C146.299 72.7107 146.31 74.9877 146.23 77.262C146.165 79.1777 144.588 80.5981 142.618 80.6556C140.461 80.7185 138.576 79.3228 138.485 77.355C138.368 74.777 138.455 72.188 138.455 69.6045L139.104 69.4294Z"
        fill={colors[color]}
      />
      <Path
        d="M76.7855 80.5131H70.543V69.8397C73.2797 69.2212 76.5638 69.6098 76.7965 70.7182C75.45 70.7182 74.1418 70.7675 72.8364 70.7182C71.3914 70.647 71.3366 71.5638 71.3831 72.5956C71.4269 73.5808 71.6842 74.2377 72.9404 74.0434C73.9402 73.9317 74.9487 73.9207 75.9508 74.0105C76.2409 74.0105 76.5173 74.3088 76.7992 74.4703C76.5255 74.6838 76.2518 75.0614 75.9426 75.0806C75.0395 75.1353 74.1281 75.0286 73.2223 75.0313C71.5994 75.0313 71.3722 75.2831 71.405 76.8376C71.468 79.7632 71.4652 79.7222 74.4155 79.5306C75.2365 79.4758 76.26 79.2158 76.895 80.0232L76.7855 80.5131Z"
        fill={colors[color]}
      />
      <Path
        d="M98.1802 69.3633V74.0514C100.734 73.1811 101.464 70.001 104.409 70.0885L99.4829 74.4673L104.163 80.5895L103.837 81C103.385 80.7263 102.819 80.5265 102.499 80.1352C101.174 78.5314 99.9235 76.8647 98.6481 75.209L98.1309 75.2501L97.8025 80.7236L97.1895 80.6825C96.8036 77.174 97.2031 73.6545 97.3263 70.1433C97.3454 69.9736 97.7067 69.7984 98.1802 69.3633Z"
        fill={colors[color]}
      />
      <Path
        d="M53.1043 70.9448C52.5049 70.7642 51.8916 70.6333 51.2707 70.5534C50.6497 70.4924 50.0231 70.5719 49.4371 70.786C49.2233 70.8983 49.0382 71.058 48.8958 71.253C48.7535 71.448 48.6578 71.6731 48.616 71.9108C48.5996 72.2748 49.032 72.803 49.4069 73.0055C50.3183 73.5091 51.3227 73.8512 52.2696 74.2918C53.4136 74.8228 54.2264 75.6137 54.2346 76.9903C54.2428 78.3669 53.5887 79.4123 52.3572 80.0773C50.6385 81.0051 48.9253 80.8299 47.2558 79.987C46.9466 79.831 46.7961 79.3576 46.3691 78.7336C47.6664 79.0647 48.5586 79.3904 49.4672 79.4944C50.165 79.571 51.0873 79.6094 51.5635 79.2207C52.2422 78.6734 52.9811 77.7429 52.9839 76.9711C52.9839 76.3307 52.0616 75.5453 51.3747 75.0773C50.644 74.5792 49.6752 74.4423 48.8705 74.0291C47.9209 73.5419 47.3735 72.803 47.5022 71.5988C47.6308 70.3947 48.3095 69.7461 49.3905 69.6065C50.418 69.481 51.4574 69.4884 52.4831 69.6284C52.8306 69.6749 53.1043 70.2743 53.4108 70.6218L53.1043 70.9448Z"
        fill={colors[color]}
      />
      <Path
        d="M157.853 70.7427C156.959 70.6496 156.039 70.4033 155.171 70.521C154.624 70.5949 153.828 71.1778 153.765 71.6157C153.702 72.0536 154.29 72.7761 154.775 73.1209C155.429 73.5861 156.252 73.8078 157.005 74.1362C158.248 74.6836 158.992 75.5675 158.937 76.9797C158.882 78.3919 158.3 79.5194 156.978 80.1763C155.472 80.9207 153.951 80.7646 152.487 80.1242C152.114 79.9628 151.923 79.3826 151.646 78.994L151.904 78.7203C152.481 78.8927 153.056 79.202 153.636 79.2129C154.649 79.2293 155.779 79.3196 156.647 78.9228C158.335 78.162 158.319 76.2189 156.707 75.3103C155.895 74.8997 155.059 74.5396 154.203 74.232C153.05 73.764 152.243 73.0744 152.426 71.6759C152.602 70.3513 153.453 69.6233 154.662 69.4345C155.516 69.3306 156.381 69.3779 157.219 69.5741C157.583 69.6479 157.862 70.1488 158.179 70.458L157.853 70.7427Z"
        fill={colors[color]}
      />
      <Path
        d="M61.3333 70.5891C60.4548 70.5891 59.6912 70.6328 58.9331 70.5644C58.7998 70.5235 58.6774 70.453 58.5751 70.3583C58.4727 70.2635 58.393 70.1469 58.342 70.0171C58.2982 69.8994 58.6157 69.4697 58.7635 69.4697C60.9337 69.5299 63.104 69.6312 65.2715 69.7598C65.3809 69.7598 65.4712 70.1074 65.6875 70.5152C64.9951 70.5535 64.4806 70.6274 63.9743 70.6027C62.8796 70.548 62.3979 71.0461 62.3951 72.1381C62.3951 74.6833 62.3404 77.2312 62.3048 79.7763C62.3048 79.9925 62.2583 80.2087 62.2337 80.425L61.8067 80.5618C61.6726 80.1786 61.4263 79.7982 61.4209 79.4124C61.3853 76.9493 61.4044 74.5026 61.399 72.045C61.3935 71.6098 61.3579 71.1692 61.3333 70.5891Z"
        fill={colors[color]}
      />
      <Path
        d="M148.058 0.00307623C148.739 0.10941 149.418 0.232956 150.103 0.319621C152.229 0.591295 154.354 0.865424 156.483 1.10759C159.13 1.40816 161.481 2.43584 163.615 4.03147C163.976 4.30314 164.355 4.5576 164.717 4.83051C165.491 5.41796 166.439 5.71607 167.403 5.67501C168.366 5.63396 169.286 5.25622 170.01 4.60494C171.333 3.42666 172.887 2.86303 174.635 2.84275C175.362 2.83414 176.036 3.06955 176.689 3.36089C178.328 4.09109 179.816 5.05302 181.11 6.32902C181.75 6.95965 182.459 7.51835 183.142 8.1035C183.763 8.63517 184.494 8.84908 185.291 8.94496C186.062 9.03716 186.82 9.23752 187.585 9.38197C188.145 9.48769 188.705 9.60016 189.269 9.67146C190.037 9.77238 190.766 10.0785 191.382 10.559C191.499 10.6383 191.61 10.7275 191.712 10.8258C192.57 11.7348 193.665 12.2229 194.779 12.7004C196.191 13.3053 197.573 13.9795 198.973 14.6145C199.782 14.9832 200.618 15.1166 201.487 14.8505C201.952 14.7085 202.38 14.778 202.821 14.9968C204.144 15.652 205.467 16.325 206.921 16.6317C207.538 16.762 208.159 16.8665 208.781 16.9722C209.436 17.0835 210.066 17.2494 210.655 17.5869C210.88 17.7153 211.17 17.7406 211.437 17.7768C212.26 17.8893 213.086 17.9772 213.908 18.0921C214.069 18.1149 214.269 18.1739 214.365 18.2913C214.813 18.8444 215.435 18.9059 216.053 18.9342C216.365 18.9496 216.683 18.8488 216.996 18.7879C218.359 18.5255 219.672 18.6281 220.879 19.3823C221.361 19.6828 221.785 20.0627 221.969 20.646C222.064 20.9496 221.94 21.2244 221.64 21.3221C221.479 21.3813 221.311 21.4151 221.141 21.4223C220.333 21.4223 219.526 21.4954 218.718 21.308C218.352 21.2231 217.946 21.3295 217.559 21.3227C217.124 21.3159 216.689 21.2655 216.253 21.2612C215.945 21.2582 215.637 21.303 215.328 21.3227C214.629 21.3645 213.93 21.437 213.231 21.437C209.311 21.437 205.392 21.4106 201.474 21.41C200.542 21.41 199.609 21.4979 198.679 21.4979C197.217 21.4979 195.755 21.4579 194.293 21.4364C193.051 21.4161 191.809 21.3805 190.564 21.375C187.467 21.3651 184.37 21.3811 181.273 21.3627C179.359 21.351 177.445 21.2594 175.531 21.2668C171.633 21.2815 167.735 21.3418 163.837 21.3762C163.347 21.3805 162.857 21.3196 162.367 21.3233C161.065 21.3325 159.765 21.3731 158.463 21.3792C155.857 21.3903 153.251 21.3926 150.645 21.386C149.232 21.3817 147.818 21.3694 146.407 21.311C145.558 21.276 144.712 21.1555 143.867 21.0559C142.802 20.9299 141.749 21.0178 140.692 21.1537C139.869 21.2594 139.039 21.367 138.211 21.3707C134.061 21.3922 129.911 21.3811 125.762 21.3743C125.596 21.3673 125.432 21.3281 125.281 21.2588C124.596 20.9687 123.913 21.0246 123.223 21.2336C123.062 21.2849 122.894 21.3123 122.726 21.3147C120.291 21.3061 117.854 21.2649 115.42 21.2846C112.965 21.3043 110.511 21.4075 108.056 21.4272C106.544 21.4389 105.031 21.3657 103.518 21.3178C103.296 21.311 103.075 21.244 102.857 21.2053L102.896 20.7671L102.828 20.7118C102.708 20.8156 102.567 20.9029 102.473 21.0271C102.264 21.3024 102.01 21.3958 101.668 21.3829C100.987 21.3565 100.305 21.3903 99.6229 21.3713C97.7615 21.3196 95.9001 21.2551 94.0387 21.193C92.9189 21.1561 91.7894 20.9957 90.6822 21.0947C87.1675 21.4094 83.6498 21.1826 80.1351 21.268C79.8988 21.2742 79.6739 21.2864 79.4736 21.0676C79.399 20.9847 79.1362 21.0013 79.0021 21.0676C78.5763 21.2729 78.1384 21.2828 77.6832 21.2735C76.1502 21.2416 74.6159 21.2028 73.0841 21.2121C71.3508 21.2231 69.617 21.2686 67.8849 21.335C67.4831 21.3504 67.0754 21.4745 66.6911 21.6104C66.1237 21.8138 65.5272 21.9193 64.9259 21.9226C62.3603 21.9398 59.794 21.9509 57.2278 21.9964C55.8794 22.0197 54.5466 21.9349 53.2325 21.6208C52.2805 21.3922 51.3134 21.3319 50.3397 21.3239C49.7383 21.3196 49.1369 21.2852 48.5355 21.2717C48.438 21.2717 48.3412 21.3172 48.2432 21.3239C47.7584 21.3565 47.2508 21.4893 46.7944 21.3854C46.2254 21.2569 45.6691 21.2846 45.1068 21.2723C43.6032 21.2403 42.0997 21.2336 40.5962 21.1942C39.4968 21.1654 38.4172 21.2637 37.3539 21.5581C35.9538 21.946 34.5519 21.9355 33.1326 21.6282C32.462 21.4831 31.7643 21.4438 31.0769 21.4131C29.3328 21.3424 27.5887 21.3282 25.85 21.2403C25.384 21.209 24.9165 21.209 24.4505 21.2403C24.1288 21.2668 23.7986 21.1635 23.4726 21.1666C23.0945 21.1754 22.7173 21.2083 22.3431 21.2649C20.848 21.4739 19.3445 21.4278 17.8421 21.437C16.2785 21.4469 14.7148 21.5053 13.1511 21.5255C12.4005 21.5354 11.6475 21.5065 10.8976 21.4954C9.82585 21.4794 8.75351 21.4733 7.68179 21.4444C7.0924 21.4284 6.50422 21.3516 5.91423 21.3442C5.35551 21.3368 4.79559 21.4094 4.23627 21.4008C3.59937 21.3909 2.96307 21.3338 2.32737 21.2877C2.10124 21.2711 2.04951 21.1279 2.01403 20.898C1.90998 20.2219 2.40495 20.0651 2.82775 19.866C4.44496 19.1026 6.05977 18.3325 7.69502 17.6121C10.4164 16.4141 13.1818 15.3311 16.0343 14.4989C17.8385 13.9715 19.6428 13.4036 21.4759 12.9887C22.8676 12.674 24.3026 12.5683 25.7231 12.3741C26.7251 12.2388 27.7258 12.0876 28.7302 11.9918C30.0365 11.8688 31.3464 11.7754 32.6563 11.6998C35.3771 11.5418 38.1003 11.4214 40.8205 11.2529C42.8388 11.13 44.85 10.9192 46.872 10.8061C48.8646 10.6876 50.8639 10.8168 52.826 11.1909C53.2897 11.28 53.6078 11.4927 53.7618 12.0059C54.0156 12.848 54.5045 13.5425 55.2539 14.0189C55.5853 14.2297 55.907 14.4577 56.2408 14.6649C56.5879 14.88 56.9325 14.9519 57.3523 14.8007C57.7612 14.6532 58.2303 14.6833 58.6441 14.5456C59.3369 14.3163 60.0081 14.0182 60.6889 13.7466C61.5622 13.3932 62.433 13.0317 63.3057 12.6789C63.6587 12.537 63.9919 12.6298 64.2589 12.8707C64.5025 13.0914 64.7401 13.3409 64.9055 13.6249C65.3024 14.3133 65.8232 14.7706 66.6129 14.947C67.5595 15.1584 68.4911 15.4424 69.4245 15.7128C69.8296 15.8248 70.2262 15.9667 70.6111 16.1375C70.9341 16.2857 71.1927 16.2414 71.4856 16.065C71.8413 15.8384 72.2185 15.6489 72.6114 15.4995C72.8953 15.4 73.2206 15.3901 73.5256 15.3981C73.8936 15.408 73.8864 15.3981 73.9718 15.017C74.0896 14.4701 74.2521 13.9343 74.4578 13.4153C74.7585 12.6808 75.4008 12.3009 76.099 12.076C77.4143 11.6525 78.7453 11.2702 80.0732 10.9001C81.0481 10.6291 82.0465 10.4299 82.9462 9.93822C83.2632 9.76883 83.5483 9.54323 83.7882 9.27194C84.1298 8.87365 84.3896 8.40468 84.7125 7.98734C85.0132 7.59581 85.3404 7.22087 85.6748 6.86007C85.8552 6.66584 86.0898 6.64249 86.3658 6.70887C87.6522 7.02582 88.8916 7.51631 90.0513 8.16742C91.6657 9.05971 93.4229 9.65043 95.2403 9.9118C95.585 9.97195 95.9236 10.0639 96.2519 10.1865C96.5971 10.3064 96.9357 10.3095 97.2389 10.1208C97.9161 9.70466 98.5951 9.28609 99.238 8.81834C100.296 8.04696 100.954 6.97009 101.322 5.70945C101.472 5.19376 101.762 4.87353 102.292 4.79916C103.571 4.6203 104.845 4.41255 106.127 4.26565C108.544 3.98844 110.97 4.01979 113.394 4.14272C114.753 4.21156 116.11 4.3437 117.466 4.47524C118.601 4.58526 119.744 4.67194 120.863 4.88522C122.216 5.14275 123.592 5.40459 124.778 6.18519C125.276 6.51402 125.722 6.93753 126.15 7.36225C126.501 7.71014 126.891 7.69599 127.293 7.60257C128.175 7.39851 128.917 6.90371 129.589 6.31181C131.079 5.00753 132.796 4.20172 134.72 3.85998C135.28 3.7604 135.859 3.78499 136.424 3.70693C138.363 3.43686 140.235 2.79588 141.943 1.81751C143.475 0.944094 145.088 0.352197 146.823 0.0965037C147.049 0.0633128 147.275 0.0350349 147.501 0L148.058 0.00307623Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
