import * as React from 'react';
import { ISvgIconProps } from '~/utils';
import Svg, { Path, Rect } from 'react-native-svg';
import { theme } from '~/styles/Theme';

export const IcOutbackLocalization = ({
  color = '#221E1E',
  width = 24,
  height = 24,
}: ISvgIconProps) => {
  return (
    <Svg width="79" height="36" viewBox="0 0 79 36" fill="none">
      <Path
        d="M37.5858 34.5858L30 27H48L40.4142 34.5858C39.6332 35.3668 38.3668 35.3668 37.5858 34.5858Z"
        fill="#A00F2D"
      />
      <Rect width="79" height="28" rx="10" fill="#A00F2D" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.5043 18.7532C56.4695 18.8917 56.4521 19.0336 56.4524 19.176C56.4524 19.2197 56.4524 19.2618 56.4524 19.304C56.4524 19.3426 56.4524 19.3804 56.4524 19.4192C56.4552 19.5131 56.4435 19.6068 56.4176 19.6974C56.3281 19.7442 56.1887 19.7581 56.0328 19.7661C56.0328 19.7661 55.9258 19.7758 55.8404 19.7827C55.5742 19.6484 55.3061 19.6992 55.1063 19.7457C54.9983 19.7705 54.8968 19.7954 54.8208 19.7879L54.7746 19.7837L54.7287 19.7924C54.6568 19.8091 54.5535 19.7837 54.4432 19.7564C54.2631 19.7106 54.0261 19.6616 53.7827 19.7564C53.6409 19.719 53.4948 19.6984 53.3477 19.6949C53.1222 19.687 53.0104 19.6748 52.9642 19.6079L52.9382 19.5728L52.9065 19.548C52.7789 19.4435 52.6317 19.3669 52.4913 19.2931C52.2341 19.1598 52.0743 19.0675 52.0348 18.9201L52.0107 18.8251L51.9284 18.7654C51.6245 18.5396 51.3798 18.1778 51.2726 17.7956C51.2466 17.4987 51.1699 17.2079 51.0458 16.9347C51.0559 16.8154 51.092 16.3797 51.092 16.3797C51.1179 15.8167 51.1392 15.3301 51.576 15.012L51.6162 14.983L51.6759 14.8977C51.898 14.5764 52.1298 14.2434 52.4615 14.1362L52.5427 14.1114L52.5967 14.0455C52.9504 13.6227 53.5252 13.573 54.133 13.5168C54.133 13.5168 54.6088 13.4621 54.678 13.4544C54.9482 13.5096 55.207 13.4939 55.4343 13.4701C55.6025 13.4527 55.7621 13.4367 55.9142 13.4517L56.0439 13.4648L56.1428 13.3815C56.1687 13.3587 56.2313 13.3631 56.3535 13.3781L56.3818 13.3805C56.4205 13.4395 56.4397 13.5186 56.4397 13.6354C56.4397 13.6872 56.4373 13.7461 56.4368 13.8095C56.4363 13.8729 56.4285 13.9403 56.4285 14.0054C56.4292 14.1009 56.4413 14.1961 56.4646 14.2889C56.4408 14.3747 56.4282 14.463 56.427 14.5518C56.4287 14.6552 56.4374 14.7585 56.4529 14.8609C56.4656 14.942 56.4731 15.0238 56.4752 15.1058C56.4752 15.1287 56.4667 15.1481 56.4649 15.1699C56.4233 15.1674 56.3819 15.1622 56.3411 15.1543C56.1952 15.1294 55.9964 15.0936 55.7846 15.1831C55.6808 15.2192 55.5275 15.2043 55.3663 15.1893C55.0894 15.163 54.7149 15.1356 54.4141 15.4318C54.4009 15.4378 54.2195 15.539 54.2195 15.539C53.9958 15.6556 53.7204 15.8016 53.5836 16.0913C53.586 16.0878 53.5873 16.0818 53.5896 16.0773L53.5759 16.1072C53.5784 16.101 53.5813 16.0965 53.5836 16.0913C53.4932 16.254 53.4469 16.4358 53.4489 16.6202C53.4489 16.9407 53.5699 17.2595 53.7144 17.487L53.7562 17.5547L54.4678 17.9145L54.5109 17.9207C54.9002 17.998 55.2635 17.9655 55.6126 17.9339L56.1534 17.8988L56.2424 17.8635L56.238 17.8655C56.2622 17.8593 56.3354 17.8707 56.3841 17.8794C56.3841 17.8794 56.427 17.8829 56.4646 17.8881C56.4735 17.912 56.4775 17.9374 56.4765 17.9627C56.4738 18.0277 56.467 18.0925 56.4563 18.1567C56.4409 18.2482 56.4322 18.3407 56.4303 18.4334C56.4327 18.5435 56.4582 18.6519 56.5053 18.7522L56.5043 18.7532ZM42.6658 17.4443C42.7208 17.5305 42.7437 17.627 42.7437 17.7491C42.7437 17.8307 42.7341 17.9232 42.7245 18.0328C42.7148 18.1425 42.7016 18.2566 42.7016 18.3787C42.7016 18.4285 42.7076 18.4782 42.7123 18.5279C42.705 18.5473 42.6892 18.5931 42.6819 18.6105C42.6526 18.6185 42.6136 18.6309 42.6136 18.6309L42.5578 18.7149C42.4691 18.845 42.4128 18.9865 42.3616 19.1228C42.268 19.3605 42.202 19.5092 42.0461 19.5671C42.0461 19.5671 41.322 19.7937 41.2524 19.8138C41.0786 19.8262 40.8948 19.8138 40.7004 19.8016C40.403 19.7822 40.0942 19.7673 39.7719 19.8297C39.7075 19.8208 39.6162 19.8093 39.6162 19.8093C39.5482 19.8041 39.4462 19.7954 39.4161 19.7753L39.291 19.6952L39.1508 19.7429C38.8305 19.8491 38.4823 19.8491 38.162 19.7429L38.0582 19.7079L37.957 19.7444C37.6196 19.8688 37.2823 19.8688 36.9086 19.8588C36.8773 19.7707 36.8613 19.6783 36.8613 19.5853C36.8613 19.4333 36.8938 19.2744 36.9631 19.1822L37.0578 19.0578L37.0033 18.9156C36.9524 18.7813 36.9261 18.6395 36.9254 18.4966C36.9254 18.3666 36.9514 18.2479 37.0056 18.1776L37.0804 18.0781L37.0593 17.958C37.0108 17.6996 36.9571 17.3624 36.9571 17.0347C36.9542 16.8435 36.9776 16.6528 37.0266 16.4675L37.0451 16.4041L37.0336 16.3392C36.9981 16.1588 36.9798 15.9757 36.9791 15.7921C36.9754 15.5722 37.012 15.3534 37.0871 15.1456L37.1224 15.0568L37.0881 14.9479C37.0336 14.7738 36.9791 14.593 36.9791 14.4332C36.9783 14.3768 36.9871 14.3207 37.0051 14.267C37.0692 14.177 37.1052 14.0713 37.1089 13.9624C37.1056 13.8579 37.0855 13.7545 37.0492 13.6558C37.0324 13.6101 37.0207 13.5627 37.0144 13.5146C37.0138 13.5085 37.0149 13.5024 37.0174 13.4969C37.02 13.4913 37.0239 13.4864 37.029 13.4827C37.0349 13.4758 37.057 13.4566 37.057 13.4566C37.1057 13.4695 37.1533 13.4861 37.1992 13.5064C37.3583 13.5661 37.6337 13.6556 37.9033 13.486C38.12 13.4676 38.3167 13.486 38.5243 13.5044C38.8153 13.5317 39.1186 13.5556 39.4586 13.4745C39.854 13.5255 40.2548 13.5249 40.6501 13.4728H40.676C41.0207 13.4571 41.4492 13.4377 41.6622 13.6633L41.7463 13.7521L41.8714 13.7555C42.0894 13.7625 42.2023 13.911 42.4084 14.2499C42.4084 14.2499 42.514 14.4108 42.5641 14.4906C42.593 14.6047 42.6092 14.7214 42.6126 14.8387C42.6126 14.9847 42.5796 15.0953 42.5145 15.1744L42.4216 15.2851L42.4592 15.4246C42.4645 15.448 42.4674 15.4718 42.468 15.4957C42.468 15.5984 42.3993 15.6986 42.262 15.8727C42.168 15.9938 42.0593 16.13 41.997 16.2914L41.9018 16.5369L42.1481 16.6485C42.236 16.6891 42.2589 16.7443 42.3056 16.9066C42.3523 17.069 42.432 17.2896 42.6668 17.4433L42.6658 17.4443ZM63.8054 18.991L63.746 19.1106L63.8 19.2299C63.8162 19.2653 63.8244 19.3037 63.8239 19.3423C63.8239 19.4055 63.8044 19.4793 63.7761 19.5803C63.7414 19.6939 63.7187 19.8105 63.7084 19.9284L63.6881 19.917L63.6689 19.91C63.5132 19.8486 63.3575 19.868 63.2306 19.8819C63.1787 19.8872 63.0832 19.8986 63.0593 19.8891L63.0118 19.86L62.9236 19.8334C62.8403 19.8213 62.777 19.7564 62.6744 19.6422C62.5387 19.4972 62.3425 19.2881 62.0124 19.2759C61.8806 19.1889 61.7485 19.0521 61.6195 18.9079L61.2837 18.5707L61.3195 18.6075L61.2416 18.5023C61.1261 18.3494 60.9821 18.1597 60.7431 18.0699L60.4771 17.9704L60.3642 18.2206C60.3168 18.3357 60.2944 18.4589 60.2983 18.5826C60.2983 18.6212 60.2983 18.659 60.3001 18.6975C60.3001 18.7266 60.3022 18.759 60.3022 18.7898C60.3022 18.8557 60.2975 18.9164 60.2762 18.9355L60.2469 18.9653L60.2266 18.9997C60.1759 19.0937 60.1492 19.1979 60.1488 19.3038C60.1488 19.4405 60.1903 19.5644 60.2233 19.6604C60.2334 19.6962 60.2492 19.7409 60.2552 19.7718L60.2002 19.8016C60.168 19.8237 60.156 19.8307 59.9962 19.7596C59.8405 19.6937 59.5379 19.5786 59.2436 19.8034C59.2225 19.8034 59.2124 19.8034 59.1981 19.8034C59.1628 19.7656 59.1276 19.7268 59.1276 19.7268L58.9311 19.7847C58.878 19.7934 58.8234 19.7854 58.7754 19.7621L58.7123 19.7191L58.6363 19.7101C58.478 19.6934 58.3415 19.7392 58.2338 19.777C58.2338 19.777 58.2078 19.7832 58.1819 19.7902C58.1518 19.6218 58.1355 19.4515 58.1331 19.2807C58.1329 19.1506 58.1457 19.0209 58.1715 18.8932C58.2024 18.8056 58.2178 18.7137 58.2169 18.6212C58.2154 18.5371 58.208 18.4532 58.1948 18.37L58.179 18.196L58.1948 16.8213L58.2135 16.1116L58.2 16.0714C58.1677 15.9616 58.1519 15.848 58.1533 15.7339C58.1547 15.5499 58.1844 15.367 58.2415 15.1913L58.2742 15.0894L58.2314 14.9899C58.1888 14.8949 58.1684 14.7921 58.1715 14.6888C58.1746 14.5664 58.1863 14.4444 58.2062 14.3235C58.2293 14.1786 58.2422 14.0324 58.2449 13.8858C58.2415 13.7781 58.2251 13.6712 58.1961 13.567C58.2013 13.5372 58.2052 13.5011 58.2052 13.5011C58.2052 13.5011 58.2099 13.4696 58.2151 13.439C58.2742 13.4442 58.3332 13.4512 58.3999 13.4626C58.589 13.4969 58.8195 13.5302 59.0624 13.439L59.079 13.4432C59.1024 13.4929 59.1309 13.5511 59.1309 13.5511H59.3235C59.4823 13.5511 59.6427 13.5118 59.7971 13.4748C60.141 13.3915 60.2352 13.3967 60.2902 13.4634C60.293 13.4748 60.2943 13.4866 60.2941 13.4984C60.2941 13.582 60.2702 13.6725 60.2422 13.7752C60.2111 13.8896 60.1737 14.0238 60.1737 14.1661C60.1737 14.2904 60.2183 14.4175 60.2972 14.5465C60.3037 14.7107 60.3605 14.8467 60.475 14.9479L60.5879 15.0474L60.74 15.016C60.9901 14.9641 61.1241 14.7882 61.2229 14.6602C61.2715 14.5988 61.3247 14.5301 61.3579 14.5222L61.4825 14.4973L61.5476 14.3909C61.7383 14.087 61.9966 13.8518 62.2413 13.7613L62.3846 13.7068L62.4212 13.5636C62.4357 13.5066 62.4632 13.4837 62.7253 13.4519C62.7253 13.4519 62.7611 13.4477 62.7897 13.4432C62.819 13.4619 62.853 13.4803 62.853 13.4803C63.1644 13.6638 63.5194 13.8729 63.5706 14.173L63.5898 14.2777L63.6759 14.3461C63.7696 14.4207 63.8519 14.5015 63.8768 14.5746C63.7886 14.7151 63.6383 14.8196 63.4551 14.9337C63.2075 15.0874 62.936 15.2667 62.7738 15.5802C62.7585 15.5907 62.7401 15.6021 62.7401 15.6021C62.5844 15.7016 62.3744 15.8394 62.3075 16.0853C62.3093 16.0791 62.3075 16.0739 62.3111 16.0666L62.2974 16.1089C62.3001 16.1004 62.3035 16.0921 62.3075 16.084C62.2693 16.184 62.2495 16.2895 62.2488 16.3959C62.2488 16.56 62.2891 16.7157 62.3238 16.8489L62.3981 17.1493L62.5714 17.1991C62.8969 17.2809 63.1919 17.496 63.5057 17.7213C63.5057 17.7213 63.7733 17.9162 63.7912 17.9321C63.7778 17.9999 63.7705 18.0686 63.7694 18.1375C63.7717 18.2642 63.7866 18.3903 63.814 18.5143C63.8333 18.6044 63.8444 18.6959 63.8472 18.7878C63.8513 18.8578 63.837 18.9277 63.8054 18.991ZM50.5026 19.4652C50.5189 19.5305 50.5292 19.597 50.5332 19.6641C50.5092 19.6853 50.4821 19.7031 50.4528 19.7168L50.406 19.7089C50.377 19.6492 50.3409 19.5711 50.3409 19.5711L49.934 19.6422C49.6524 19.6957 49.4715 19.7203 49.3262 19.628L49.1736 19.5316L49.015 19.6186C48.8764 19.6974 48.6815 19.7292 48.5544 19.6827C48.5323 19.6422 48.5102 19.6027 48.5102 19.6027C48.3636 19.3102 48.1184 18.8281 47.5731 18.849C47.5472 18.8455 47.4901 18.841 47.4901 18.841C47.0336 18.7955 46.4675 18.7415 46.0108 19.0457L46.0001 19.0529L45.9898 19.0616C45.8569 19.1688 45.8081 19.2996 45.7712 19.3963L45.7344 19.4788L45.6493 19.5557L45.6207 19.68C45.6124 19.7123 45.5997 19.7434 45.5828 19.7725C45.5569 19.7864 45.5218 19.7902 45.3864 19.7549C45.2333 19.7128 45.0095 19.6634 44.7716 19.7636C44.7267 19.7583 44.6696 19.7541 44.6696 19.7541C44.531 19.7327 44.3532 19.7171 44.185 19.7812C44.0523 19.769 43.9184 19.7752 43.7875 19.7996C43.7378 19.8085 43.6876 19.8146 43.6372 19.818C43.6631 19.6994 43.7221 19.5853 43.8022 19.4597C43.9188 19.2789 44.0405 19.0723 44.0636 18.8114L44.1799 18.801L44.2318 18.5814C44.3023 18.2803 44.3675 17.9973 44.5559 17.8215L44.6566 17.7295L44.6449 17.5949C44.6449 17.587 44.6449 17.5783 44.6449 17.5701C44.6449 17.4666 44.6984 17.3629 44.784 17.211C44.8736 17.0466 44.9787 16.8472 44.995 16.605C45.2218 16.3608 45.2587 16.048 45.2587 15.7871C45.2587 15.7538 45.2587 15.723 45.2587 15.6917L45.2652 15.3622L45.1951 15.256C45.0134 15.0476 44.7775 15.0424 44.6376 15.0399C44.6046 15.0397 44.5715 15.0373 44.5388 15.0327C44.5007 14.9842 44.4806 14.9248 44.4819 14.8641C44.4871 14.7674 44.5012 14.6712 44.524 14.5769C44.5564 14.4425 44.5749 14.3054 44.579 14.1676C44.577 14.0413 44.5483 13.9167 44.4947 13.8013C44.486 13.7594 44.4817 13.7167 44.4819 13.674C44.483 13.5987 44.5007 13.5244 44.5338 13.4561C44.5455 13.4596 44.5787 13.4666 44.6252 13.479C44.7726 13.5907 44.9545 13.6019 45.1702 13.4939C45.1702 13.4939 45.1889 13.487 45.2026 13.48C45.5574 13.5546 45.9368 13.5345 46.276 13.5113L46.6912 13.4947C46.8955 13.5887 47.1132 13.5335 47.2298 13.4992C47.2298 13.4992 47.2773 13.487 47.2837 13.4842C47.3215 13.4927 47.3604 13.4954 47.399 13.4922C47.618 13.5439 47.835 13.5238 48.0135 13.4939C48.3371 13.4387 48.3454 13.4581 48.3942 13.5775L48.4025 13.5959L48.414 13.6133C48.4625 13.6968 48.4832 13.8155 48.5063 13.9418C48.5383 14.1308 48.5754 14.3459 48.7202 14.5386C48.8056 14.6652 48.8219 14.8556 48.8393 15.0578C48.8653 15.3694 48.9037 15.7561 49.2561 16.0388C49.2852 16.0724 49.2852 16.1432 49.2821 16.2584C49.2761 16.4324 49.2668 16.6992 49.4967 16.9049L49.464 16.8713C49.6529 17.1043 49.7518 17.3351 49.772 17.5775L49.7772 17.6444L49.8107 17.7006C49.9594 17.9448 50.0352 18.2109 50.1143 18.4929C50.2052 18.8055 50.3074 19.1277 50.5036 19.4378C50.5013 19.452 50.5026 19.4652 50.5026 19.4652ZM35.4199 13.3803C35.4355 13.3741 35.4508 13.3733 35.4669 13.3654L35.429 13.3786L35.4199 13.3803ZM29.5519 19.0121C29.6798 19.211 29.7883 19.3871 29.7971 19.5716C29.5472 19.6989 29.186 19.6726 28.8548 19.6392L28.7167 19.6251C28.6007 19.6077 28.4728 19.6348 28.3716 19.6551L28.3179 19.6646C28.2579 19.6619 28.1575 19.6532 28.1575 19.6532C27.9003 19.6417 27.7718 19.6251 27.7145 19.5251L27.6517 19.4144L27.5242 19.3853C27.1837 19.3073 26.9214 19.4433 26.7117 19.5559C26.618 19.6057 26.53 19.6507 26.4521 19.6698C26.3956 19.6726 26.2736 19.6803 26.2736 19.6803C26.0717 19.6979 25.8802 19.7121 25.7491 19.6427L25.6474 19.589L25.5373 19.6139C25.4379 19.6367 25.3557 19.5937 25.1771 19.4848C25.0414 19.3995 24.8706 19.2993 24.662 19.2685C24.5094 19.2237 24.4634 19.129 24.3765 18.8758C24.3113 18.6863 24.2252 18.4615 24.0259 18.2867C23.9999 18.1594 23.9581 17.9652 23.9581 17.9652C23.9151 17.8011 23.8764 17.6534 23.8764 17.5164C23.8757 17.4523 23.886 17.3885 23.9068 17.3276L23.9361 17.2503L23.9164 17.1702C23.853 16.9096 23.8356 16.6187 23.8356 16.3185C23.8356 16.1261 23.8421 15.9319 23.8494 15.7379L23.8644 15.211L23.8408 15.1612C23.8195 15.1095 23.8088 15.0543 23.8094 14.9986C23.8094 14.9171 23.8289 14.8246 23.853 14.7079C23.8838 14.5808 23.9012 14.451 23.9049 14.3205C23.9027 14.1933 23.8727 14.0679 23.8167 13.9525C23.8144 13.9027 23.8084 13.8244 23.8084 13.8244C23.804 13.7498 23.7975 13.668 23.7975 13.5899C23.7958 13.5277 23.8035 13.4656 23.8203 13.4054C23.9585 13.4513 24.1061 13.4649 24.2509 13.4449L24.3007 13.436L24.3459 13.4124C24.669 13.2383 25.0377 13.3589 25.2282 13.4467L25.3497 13.5019L25.4737 13.4522C25.5706 13.4112 25.6752 13.39 25.781 13.3897C25.8081 13.4564 25.8219 13.5273 25.8218 13.5989C25.8177 13.7171 25.8041 13.8348 25.781 13.951C25.7528 14.0954 25.737 14.2418 25.7335 14.3886C25.7347 14.559 25.7772 14.7268 25.8576 14.8788V15.065C25.8602 15.1115 25.8625 15.1645 25.8625 15.2117C25.8625 15.2995 25.8555 15.3811 25.8311 15.4258L25.7841 15.5109L25.8005 15.6041C25.8283 15.7617 25.8421 15.9213 25.8417 16.0811C25.8405 16.2287 25.8278 16.3761 25.8036 16.5219C25.7646 16.5918 25.7429 16.6693 25.74 16.7485C25.74 16.8691 25.7802 16.9763 25.809 17.0561C25.8302 17.1046 25.8441 17.1558 25.8503 17.208C25.8509 17.2143 25.8498 17.2206 25.8472 17.2264L25.8332 17.2834L25.8521 17.3925C25.8869 17.5982 25.9531 17.9816 26.3439 18.1152L26.3159 18.103L26.359 18.1278C26.6486 18.2808 26.878 18.2658 27.047 18.0873C27.0397 18.0945 27.0366 18.1025 27.0272 18.1084L27.0644 18.0734C27.0599 18.0793 27.0535 18.0813 27.047 18.0873C27.3013 17.8662 27.3249 17.5586 27.3369 17.3075L27.3701 16.9932L27.3664 16.9106C27.313 16.6558 27.2876 16.3964 27.2907 16.1365C27.2907 15.9873 27.2984 15.8341 27.3039 15.678C27.3093 15.5218 27.3148 15.3627 27.3148 15.1985C27.3153 14.9823 27.3005 14.7663 27.2704 14.552C27.298 14.4243 27.3126 14.2943 27.314 14.1638C27.314 14.0644 27.307 13.9689 27.3021 13.8784C27.2971 13.7879 27.2925 13.7063 27.2925 13.6237C27.2961 13.538 27.3077 13.4528 27.3273 13.3691C27.4002 13.3733 27.4733 13.3685 27.545 13.3549C27.6514 13.4129 27.8538 13.5191 28.0996 13.4047L28.1302 13.3888L28.2275 13.3142C28.3108 13.3201 28.3944 13.3271 28.3944 13.3271C28.5564 13.3343 28.6957 13.3395 28.8135 13.4002L29.023 13.5071L29.1787 13.3343C29.2046 13.3062 29.27 13.2982 29.3344 13.2972C29.3622 13.3651 29.3733 13.4537 29.3733 13.5917C29.3733 13.5917 29.3866 13.7866 29.392 13.8831C29.3494 14.0423 29.328 14.2061 29.3284 14.3705C29.3323 14.568 29.3487 14.7652 29.3775 14.9608C29.4049 15.1518 29.4208 15.3442 29.4252 15.537C29.4252 15.58 29.4232 15.623 29.4219 15.6653C29.3985 15.7205 29.3269 15.9172 29.3269 15.9172L29.3772 16.323C29.4001 16.4839 29.4234 16.6331 29.4234 16.7706C29.4234 16.9295 29.3936 17.069 29.3043 17.1886L29.202 17.3256L29.2781 17.4776C29.3801 17.6787 29.3946 17.9264 29.3946 18.1776C29.3946 18.2358 29.3946 18.2934 29.3946 18.3516V18.7724L29.433 18.8221L29.5519 19.0121ZM35.3618 14.4147L35.3255 14.5035L35.3774 14.6828C35.3974 14.7468 35.4113 14.8124 35.4186 14.8788C35.3784 14.8885 35.3229 14.8892 35.1921 14.8628C34.9717 14.8191 34.5134 14.7258 34.2788 15.2406C34.2028 15.3954 34.1649 15.5649 34.168 15.7359C34.1702 15.8469 34.1789 15.9578 34.194 16.0679C34.2068 16.1591 34.2139 16.2509 34.2152 16.3429C34.2166 16.4231 34.2053 16.503 34.1818 16.5799L34.1716 16.608L34.1675 16.6378C34.1638 16.6721 34.162 16.7082 34.162 16.7433C34.1656 16.86 34.1782 16.9764 34.1997 17.0914C34.2173 17.1817 34.2279 17.2731 34.2313 17.3649C34.234 17.428 34.2194 17.4907 34.189 17.5467L34.134 17.6372L34.1555 17.7417C34.1964 17.9705 34.2154 18.2025 34.2124 18.4347C34.2124 18.6237 34.2033 18.8149 34.195 19.0012L34.1825 19.3493L34.2062 19.404C34.2373 19.4783 34.254 19.5574 34.2555 19.6375C34.252 19.6592 34.2468 19.6807 34.2399 19.7016C34.2212 19.6954 34.1997 19.686 34.1997 19.686C34.0543 19.6208 33.7816 19.5012 33.4842 19.7051C33.4281 19.7419 33.3663 19.7377 33.2031 19.7131L32.9589 19.6944C32.7736 19.6146 32.5878 19.6788 32.5021 19.7131C32.5021 19.7131 32.4653 19.7263 32.4546 19.7297C32.3803 19.7328 32.3058 19.7281 32.2325 19.7158C32.2038 19.6135 32.1889 19.508 32.1884 19.402C32.191 19.2575 32.202 19.1132 32.2216 18.9698C32.2446 18.8071 32.2575 18.6432 32.26 18.479C32.2598 18.3451 32.2444 18.2117 32.2141 18.0811C32.2798 17.904 32.3138 17.7175 32.3145 17.5295C32.3107 17.3469 32.2941 17.1647 32.2647 16.9842C32.2387 16.8258 32.2235 16.6659 32.2192 16.5055C32.2167 16.3824 32.2359 16.2597 32.2761 16.1427L32.3205 16.0127L32.2447 15.9003C32.2317 15.8801 32.2276 15.8351 32.2276 15.7861C32.2276 15.7483 32.2276 15.7088 32.2317 15.6772C32.234 15.6394 32.2353 15.5974 32.2353 15.5529C32.2353 15.356 32.1967 15.1031 31.9239 14.9511L31.8676 14.9188L31.6434 14.8967C31.4923 14.881 31.3345 14.8686 31.1557 14.9161C31.1143 14.9111 31.0722 14.9123 31.0312 14.9195C31.0052 14.8907 30.9904 14.8519 30.9904 14.7756C30.9904 14.7166 30.9977 14.6358 31.0094 14.5286C31.024 14.4268 31.0321 14.3241 31.0337 14.2213C31.0323 14.1645 31.026 14.1078 31.0151 14.0519C31.0151 14.0482 31.0306 13.6267 31.0348 13.4325C31.1324 13.3912 31.2658 13.3798 31.4256 13.4054C31.6833 13.4967 32.0083 13.5108 32.2618 13.3868C32.5917 13.4484 32.9555 13.5019 33.2714 13.4765L33.3528 13.4703L33.4208 13.4248C33.4455 13.4072 33.4881 13.4081 33.583 13.4114C33.583 13.4114 33.65 13.4096 33.7146 13.4096C33.8354 13.4662 33.97 13.4902 34.1039 13.479L34.1722 13.4765C34.2025 13.5089 34.3774 13.7003 34.3774 13.7003L34.6004 13.4586C34.6489 13.4069 34.6881 13.4017 34.8806 13.4218C35.0283 13.4377 35.2108 13.4507 35.4023 13.3865C35.4336 13.5533 35.4503 13.7223 35.4521 13.8918C35.4508 14.0706 35.428 14.2534 35.3618 14.4147ZM22.4462 15.8667C22.5637 16.0512 22.592 16.2499 22.592 16.4754C22.592 16.5781 22.5866 16.6881 22.5796 16.8049L22.57 17.0243C22.4041 17.2202 22.3779 17.4619 22.3665 17.6489C22.3509 17.8324 22.3405 17.9257 22.2793 17.9669C22.0312 18.1505 21.8615 18.3648 21.6964 18.572C21.5147 18.8012 21.3453 19.0173 21.0995 19.1481L21.1457 19.1287L20.8805 19.2518C20.7767 19.308 20.7074 19.3433 20.6427 19.3433H20.5389L20.4572 19.4065C20.0007 19.7631 19.2706 19.7297 18.7503 19.6691C18.6298 19.6203 18.4995 19.5975 18.3688 19.6024L18.2222 19.5937C18.2012 19.5883 18.0499 19.5552 18.0499 19.5552C17.7384 19.489 17.4184 19.4224 17.2277 19.2108L17.1693 19.1464L17.0824 19.1245C16.4426 18.9566 16.1224 18.2251 16.0155 17.9195L15.9983 17.866L15.9584 17.8247C15.6729 17.5074 15.627 17.0538 15.627 16.5844C15.627 16.4702 15.629 16.3543 15.6314 16.24C15.6314 16.24 15.6345 15.9607 15.6355 15.8896C15.655 15.8274 15.8123 15.3037 15.8341 15.2291C15.9293 15.1234 16.0032 15.0015 16.0518 14.8698C16.0931 14.7594 16.1175 14.7047 16.152 14.6863L16.2693 14.6293L16.3027 14.5078C16.3287 14.4192 16.4001 14.3697 16.5685 14.276C16.7369 14.1822 16.9521 14.0467 17.0709 13.7936C17.1773 13.7172 17.3175 13.6742 17.4862 13.6302C17.69 13.5805 17.8848 13.5011 18.0636 13.395C18.2453 13.395 18.3922 13.3318 18.5064 13.2836C18.6348 13.2299 18.6854 13.2124 18.7399 13.2316L18.7869 13.2465H18.9776C19.4147 13.2445 19.9106 13.2403 20.2202 13.4571L20.3113 13.5195L20.4219 13.5091C20.5029 13.5019 20.576 13.5484 20.719 13.6556C20.8428 13.7468 20.9923 13.8545 21.1875 13.8983C21.2295 13.9306 21.277 13.9657 21.277 13.9657C21.4774 14.1176 21.6531 14.2504 21.7283 14.4356L21.7615 14.5155L21.8316 14.5637C22.1968 14.8124 22.4041 15.2122 22.4041 15.667C22.4041 15.6812 22.4041 15.6969 22.4041 15.7118L22.4013 15.7953L22.4462 15.8667ZM18.1334 16.1539C18.0296 16.5545 18.1508 16.9464 18.2012 17.3547C18.3909 17.6283 18.6122 17.95 19.0249 17.8493C19.3067 17.856 19.5377 17.6191 19.7017 17.4134C19.9324 16.9104 19.9503 16.3166 19.8457 15.7456C19.5899 15.4557 19.3324 15.159 18.9218 15.107C18.5705 15.1923 18.3561 15.48 18.1334 15.7456V16.1539ZM39.2894 18.1617C39.3286 18.3902 39.586 18.3902 39.7493 18.4446C39.9258 18.4315 40.0755 18.2427 40.143 18.0943C40.2644 17.771 40.3319 17.3388 40.0755 17.0568C39.8713 16.8691 39.6278 17.0703 39.3839 16.9621C39.3019 17.3388 39.1249 17.7568 39.2894 18.1617ZM39.3029 15.6648C39.3613 15.8359 39.5328 15.865 39.6764 15.9072C40.0778 15.7359 40.307 15.3231 40.2932 14.9093C40.1495 14.5677 39.7906 14.5538 39.4765 14.595C39.0452 14.8243 39.2469 15.309 39.3029 15.6648ZM46.5472 16.6284C46.5314 16.8743 46.3617 17.1956 46.6858 17.3187C46.9791 17.6121 47.2106 17.2888 47.4737 17.1349C47.4878 16.8388 47.4457 16.5428 47.3494 16.2611C47.2728 16.0154 46.931 16.0915 46.7626 16.0758C46.7164 16.2611 46.8241 16.5369 46.5472 16.6284ZM15.8457 11.34C15.8457 11.3629 15.8475 11.3917 15.8486 11.4049C15.8496 11.4181 15.9441 11.4434 16.0591 11.4569L16.1818 11.4638C16.3043 11.47 16.4413 11.4367 16.5791 11.4367C16.7169 11.4367 16.8618 11.469 17.0029 11.4666C17.1441 11.4641 17.2843 11.4621 17.4148 11.4648C17.6619 11.4593 17.9048 11.4847 18.1503 11.484C18.3958 11.4832 18.6397 11.4576 18.8855 11.4591C19.1313 11.4606 19.3825 11.4608 19.6316 11.4626H19.8829C20.1657 11.4424 20.4279 11.4158 20.4673 11.4019H20.5073C20.5475 11.4019 20.5877 11.4283 20.6313 11.4268C20.6749 11.4253 20.7115 11.4253 20.751 11.4233L20.7894 11.4201C20.8241 11.4153 20.8574 11.4121 20.8615 11.4101C20.8702 11.41 20.8789 11.4092 20.8875 11.4076C20.8947 11.4076 20.9072 11.4049 20.9116 11.4049C20.9194 11.4039 20.9274 11.4045 20.935 11.4066C20.9443 11.4084 20.9583 11.4101 20.9671 11.4121C20.9781 11.413 20.9889 11.415 20.9993 11.4181C21.0089 11.4181 21.024 11.4225 21.0312 11.4233C21.0385 11.424 21.4086 11.4409 21.8508 11.4576H22.245C22.6374 11.4576 22.7122 11.5523 23.0983 11.5506C23.4845 11.5489 23.6841 11.4198 24.0692 11.4146C24.4543 11.4094 24.8397 11.4395 25.2288 11.4303H25.6289C25.4992 11.4303 25.5596 11.4681 25.8085 11.4656H25.8661C25.9318 11.4452 25.9886 11.4285 25.991 11.4285C25.9943 11.428 25.9977 11.428 26.0011 11.4285C26.004 11.4285 26.0084 11.4285 26.011 11.4285L26.0216 11.431C26.0245 11.4327 26.2126 11.4365 26.4405 11.4417L26.6481 11.4452C26.8544 11.4469 27.3324 11.5725 27.538 11.5732C27.7435 11.574 27.9501 11.5732 28.1549 11.5732C28.3596 11.5732 28.5667 11.5708 28.7712 11.567C29.0479 11.5611 29.3393 11.5593 29.6427 11.5593C29.9461 11.5593 29.9871 11.4372 30.305 11.438C30.6229 11.4387 30.944 11.4161 31.2652 11.4151C31.5865 11.4141 31.9024 11.438 32.2135 11.4293C32.2654 11.4293 32.3173 11.4293 32.3693 11.4293C32.4212 11.4293 32.4679 11.4317 32.5193 11.4317C32.5706 11.4317 32.6677 11.3738 32.7144 11.3721H32.7629C32.7796 11.3921 32.7978 11.4108 32.8174 11.428H32.8307C32.8359 11.428 32.8418 11.428 32.8455 11.428C32.8491 11.428 32.8556 11.428 32.8592 11.4298L33.4372 11.428H33.7227C34.0105 11.428 34.297 11.428 34.5819 11.4298C34.8669 11.4315 35.1563 11.3763 35.4384 11.3815L35.7197 11.385C36.0238 11.4263 36.3732 11.4492 36.4946 11.4377H36.6124C36.7303 11.4357 36.8541 11.4534 36.9781 11.4516C37.1022 11.4499 37.2244 11.4489 37.3453 11.4464L37.4676 11.4444C37.5509 11.4502 37.6345 11.4514 37.718 11.4482C37.7495 11.4233 37.7788 11.3959 37.8055 11.3663C37.8418 11.3251 37.8766 11.3059 37.8833 11.3216C37.8868 11.3477 37.8836 11.3742 37.874 11.3989C37.8615 11.4238 37.9967 11.4464 38.1732 11.4464C38.3497 11.4464 38.6354 11.4506 38.8111 11.4569C38.9868 11.4631 39.2731 11.4648 39.4498 11.4569C39.6265 11.4489 39.912 11.4444 40.0877 11.4444C40.2634 11.4444 40.4191 11.4429 40.4336 11.4419C40.4482 11.4409 40.4856 11.4392 40.5154 11.4377C40.5452 11.4362 40.5824 11.434 40.5979 11.4322C40.6135 11.4305 40.7959 11.4305 41.0072 11.4298H41.2018C41.397 11.4298 41.5966 11.4315 41.7972 11.435L42.2814 11.4385C42.4608 11.3639 42.7024 11.3673 42.8171 11.4492L43.0003 11.4526C43.2933 11.4499 43.5853 11.4492 43.8827 11.4499C44.1801 11.4506 44.4736 11.4499 44.77 11.4516C45.0664 11.4534 45.3646 11.4516 45.6625 11.4516C45.9604 11.4516 46.2555 11.3743 46.5511 11.3698C46.8963 11.3698 47.242 11.4444 47.584 11.4482C47.9261 11.4519 48.2647 11.4551 48.6055 11.4569C48.9462 11.4586 49.2885 11.4613 49.6327 11.4613C49.9768 11.4613 50.3233 11.434 50.6775 11.4278C50.8213 11.4278 50.963 11.4526 51.1021 11.4526C51.2412 11.4526 51.3751 11.4501 51.5129 11.4501C51.6507 11.4501 51.7841 11.4501 51.9217 11.4501H52.0577C52.2105 11.4536 52.455 11.4554 52.6026 11.4536C52.7503 11.4519 52.9873 11.4492 53.1334 11.4484C53.2795 11.4477 53.518 11.4377 53.6641 11.429C53.8102 11.4203 54.051 11.4196 54.1972 11.4263C54.3433 11.433 54.7447 11.4414 55.0886 11.4474H55.4182C55.7462 11.4492 56.0844 11.4474 56.4228 11.4474C56.7612 11.4474 57.1015 11.4449 57.4381 11.4449C57.7747 11.4449 58.104 11.48 58.4243 11.4825C58.793 11.4845 59.1621 11.4529 59.5324 11.4536C59.9027 11.4544 60.272 11.4564 60.6406 11.4581C61.0091 11.4598 61.3748 11.4626 61.7378 11.4626H62.1012C62.302 11.4626 62.389 11.4432 62.5971 11.4211L62.6231 11.4178C62.649 11.4141 62.6817 11.4427 62.7165 11.4427C62.7513 11.4427 62.786 11.4427 62.8203 11.4444H62.853C62.921 11.4423 62.9886 11.434 63.0549 11.4196H63.1299C63.2034 11.422 63.2812 11.4574 63.3583 11.4574C63.4354 11.4574 63.514 11.4591 63.5919 11.4574H63.6682C63.7541 11.4574 63.842 11.4407 63.8649 11.4206L63.8833 11.4012L63.8999 11.3818C63.911 11.3641 63.9159 11.3434 63.9137 11.3228C63.9062 11.2964 63.8967 11.2705 63.8851 11.2455C63.8732 11.2142 63.8156 11.1483 63.7605 11.1015C63.6928 11.0452 63.6164 10.9993 63.534 10.9655C63.4459 10.9331 63.3544 10.9104 63.261 10.8979C63.1686 10.8866 63.0753 10.8831 62.9822 10.8874C62.8913 10.8958 62.8013 10.9125 62.7136 10.9371C62.6394 10.9583 62.4801 10.9399 62.3599 10.8986C62.2397 10.8573 62.2883 10.7991 62.1601 10.772C62.0066 10.7431 61.8513 10.7234 61.6953 10.7131C61.5678 10.7089 61.444 10.687 61.4238 10.6659C61.4036 10.6447 61.32 10.6097 61.2406 10.5878C61.1612 10.5659 61.095 10.549 61.0893 10.549C61.0836 10.549 60.9595 10.5323 60.8163 10.5104C60.6514 10.4841 60.489 10.4454 60.3304 10.3946C60.2085 10.3523 60.0117 10.2702 59.8913 10.2153C59.7709 10.1603 59.6531 10.1073 59.6284 10.0984C59.5956 10.0894 59.5613 10.0861 59.5272 10.0887C59.4761 10.0957 59.4254 10.1055 59.3754 10.1178C59.3113 10.1331 59.2451 10.1384 59.1792 10.1335C59.1143 10.126 59.0499 10.1143 58.9866 10.0984C58.8619 10.0537 58.74 10.0021 58.6215 9.94397C58.4736 9.87186 58.1969 9.75424 58.0113 9.68287C57.8258 9.61151 57.6296 9.52845 57.5767 9.49936C57.5103 9.45926 57.4479 9.4134 57.3903 9.36234C57.3321 9.31038 57.2707 9.26173 57.2066 9.21662C57.1431 9.17413 57.0758 9.1371 57.0054 9.10597C56.928 9.07555 56.8463 9.05596 56.7631 9.04778C56.6748 9.04015 56.5872 9.02728 56.5007 9.00924C56.4283 8.99432 56.3636 8.98039 56.359 8.98039C56.3543 8.98039 56.3221 8.97144 56.2863 8.96174C56.237 8.94567 56.1869 8.93222 56.136 8.92146C56.0833 8.91102 56.0297 8.90454 55.9759 8.90206C55.8769 8.89498 55.7785 8.88211 55.6811 8.86352C55.5594 8.84238 55.2272 8.60192 54.9433 8.33212C54.6594 8.06231 54.1325 7.76367 53.7713 7.67241C53.41 7.58114 52.8629 7.73034 52.5572 8.00189C52.2515 8.27343 51.7382 8.30476 51.4153 8.06953C51.0925 7.83429 50.6427 7.56995 50.4141 7.48019C50.1855 7.39042 49.6591 7.28523 49.2424 7.24743C48.8256 7.20964 48.2017 7.13603 47.8575 7.08232C47.5134 7.02861 46.8908 7.17632 46.4727 7.41081C46.0546 7.6453 45.4048 7.83851 45.0277 7.83851C44.6506 7.83851 44.0747 8.05983 43.7529 8.33212C43.4311 8.60441 43.0816 8.71258 42.9744 8.57283C42.8672 8.43308 42.611 8.2697 42.399 8.20555C42.1896 8.14249 41.9766 8.09085 41.7611 8.05088C41.6236 8.02825 41.3866 8.00288 41.2371 7.99219C41.0876 7.9815 40.8315 7.95962 40.6693 7.94395C40.5071 7.92828 40.2367 7.91137 40.0633 7.90516C39.8899 7.89894 39.6133 7.89571 39.4475 7.89571C39.2816 7.89571 39.0164 7.90367 38.8604 7.91411C38.7045 7.92455 38.4597 7.94843 38.3154 7.96235C38.1701 7.98001 37.9978 8.00089 37.9319 8.01333C37.8659 8.02576 37.7598 8.04416 37.6983 8.05983C37.6656 8.07078 37.6361 8.08875 37.6118 8.11238C37.5876 8.136 37.5693 8.16464 37.5584 8.1961C37.5384 8.26172 37.5145 8.32622 37.487 8.38931C37.46 8.44604 37.4295 8.50117 37.3957 8.55443C37.3679 8.59744 37.3178 8.66135 37.2856 8.70014C37.2472 8.74145 37.2062 8.78047 37.1629 8.81702C37.131 8.84188 37.0661 8.89162 37.0214 8.92146C36.9768 8.9513 36.8997 9.00128 36.8499 9.02963C36.8001 9.05798 36.7139 9.10423 36.6592 9.13581C36.6283 9.15179 36.5944 9.16174 36.5595 9.16507C36.5245 9.1684 36.4893 9.16505 36.4557 9.1552C36.3873 9.1287 36.3162 9.10895 36.2437 9.09627C36.1827 9.08583 36.0817 9.06817 36.0212 9.05847C35.9608 9.04877 35.8507 9.02515 35.7789 9.00874C35.6753 8.98333 35.5738 8.95101 35.475 8.91201C35.3815 8.87545 35.2274 8.80508 35.1313 8.75684C35.0353 8.7086 34.8687 8.63922 34.7649 8.59794C34.6656 8.55658 34.564 8.52055 34.4605 8.49002C34.3995 8.4751 34.2934 8.44874 34.2269 8.43208C34.1605 8.41542 34.0141 8.54373 33.9033 8.71407C33.7925 8.88441 33.6554 9.04529 33.6004 9.0714C33.5454 9.09751 33.4447 9.14178 33.378 9.16888C33.2425 9.21477 33.1044 9.25321 32.9643 9.28401C32.8011 9.32181 32.6031 9.37005 32.5187 9.39119C32.4344 9.41232 32.3083 9.44838 32.2364 9.46852C32.1645 9.48867 32.0547 9.5292 31.9922 9.55456C31.9296 9.57993 31.8596 9.61698 31.832 9.63264C31.8018 9.65213 31.7743 9.67519 31.75 9.70128C31.7332 9.72241 31.7025 9.76643 31.68 9.79776C31.6536 9.83704 31.6331 9.87964 31.619 9.92433C31.6081 9.96113 31.5902 10.0238 31.579 10.0596C31.567 10.1005 31.5602 10.1427 31.5585 10.1852C31.5585 10.2185 31.5255 10.2349 31.4879 10.2247C31.4345 10.2133 31.3791 10.2133 31.3257 10.2247C31.2664 10.2381 31.2088 10.2576 31.1539 10.2829C31.1019 10.3087 31.0514 10.3373 31.0029 10.3687C30.9843 10.382 30.9627 10.3908 30.9398 10.3943C30.9169 10.3978 30.8935 10.3959 30.8715 10.3888C30.8376 10.3732 30.7745 10.3468 30.7288 10.3302C30.6831 10.3135 30.5713 10.2837 30.4768 10.2635C30.3823 10.2434 30.2272 10.2008 30.1335 10.1755C30.0398 10.1501 29.9297 10.1175 29.89 10.1088C29.8452 10.0949 29.8013 10.0783 29.7587 10.0591C29.7252 10.0432 29.6386 9.93875 29.569 9.8271C29.4995 9.71545 29.3663 9.63737 29.2835 9.65303C29.1862 9.67283 29.0911 9.70199 28.9999 9.74007C28.9275 9.77165 28.764 9.84103 28.6365 9.89374C28.5091 9.94646 28.3672 10.0037 28.323 10.0211C28.2706 10.0384 28.2165 10.051 28.1616 10.0589C28.1167 10.0633 28.0495 10.0728 28.0103 10.0783C27.9645 10.086 27.9198 10.099 27.8772 10.1168C27.844 10.1335 27.7591 10.1116 27.6859 10.0686C27.6127 10.0255 27.51 9.96039 27.4536 9.92358C27.3655 9.8708 27.2925 9.79771 27.2414 9.71097C27.2245 9.68387 27.1965 9.63637 27.1809 9.6038C27.1592 9.56009 27.1419 9.51455 27.129 9.46778C27.1178 9.42575 27.0405 9.37726 26.958 9.3616C26.8754 9.34593 26.728 9.32455 26.6325 9.31186C26.537 9.29918 26.3753 9.28899 26.271 9.28277C26.1667 9.27655 25.9868 9.27407 25.8763 9.27407C25.7657 9.27407 25.4919 9.28277 25.2695 9.29421C25.0471 9.30565 24.7832 9.32057 24.6832 9.33201C24.5833 9.34344 24.4279 9.36011 24.3391 9.37055C24.2504 9.38099 23.4967 9.42028 22.6626 9.45758C21.8285 9.49488 21.6071 9.53069 21.5552 9.53691C21.5033 9.54312 21.4153 9.55431 21.3531 9.56575C21.2908 9.57719 21.1376 9.59385 21.0102 9.6043C20.8828 9.61474 20.6692 9.63762 20.5335 9.65403C20.3978 9.67044 20.1881 9.70376 20.0606 9.73062C19.9332 9.75747 19.6765 9.82262 19.4941 9.87634C19.3117 9.93005 19.0724 9.99495 18.9683 10.0221C18.8642 10.0492 18.681 10.0994 18.5645 10.1379C18.448 10.1765 18.2385 10.2434 18.0989 10.2916C17.9593 10.3399 17.7195 10.4279 17.5635 10.4868C17.4075 10.5457 17.2069 10.6228 17.1184 10.6609C17.0299 10.6989 16.8797 10.7591 16.7855 10.7952C16.6913 10.8312 16.5314 10.9023 16.431 10.9498C16.3305 10.9973 16.1572 11.0774 16.0484 11.1259C15.9397 11.1744 15.8457 11.2311 15.8457 11.2557V11.34Z"
        fill="#FEFEFE"
      />
    </Svg>
  );
};