const Header = () => (
  <header className="border-brand-main-border flex w-full items-center justify-between gap-8 border-b p-4 sm:p-8">
    <span>
      <span className="sr-only">Upbeat</span>
      <svg
        width="118"
        height="49"
        viewBox="0 0 118 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M108.097 9.95095L110.087 9.55124V16.7894C110.087 19.7915 111.889 21.2282 114.775 20.6426C115.452 20.5173 116.108 20.2962 116.724 19.9857C116.817 19.9369 116.894 19.8634 116.949 19.7732C117.003 19.683 117.032 19.5796 117.031 19.4742V17.1332C117.031 17.0444 117.01 16.9569 116.971 16.8775C116.931 16.7981 116.874 16.7289 116.803 16.6755C116.732 16.622 116.65 16.5857 116.563 16.5693C116.477 16.553 116.387 16.557 116.302 16.5812C116.138 16.6259 115.965 16.6692 115.799 16.7028C114.658 16.9348 114.057 16.6133 114.057 15.2535V8.74342L116.572 8.2333C116.701 8.20753 116.817 8.13782 116.901 8.03595C116.985 7.93409 117.031 7.80632 117.031 7.67426V5.11385C117.031 5.02902 117.011 4.94537 116.975 4.86891C116.938 4.79244 116.885 4.72507 116.82 4.67162C116.754 4.61817 116.677 4.57997 116.595 4.55978C116.513 4.53958 116.428 4.53789 116.345 4.55481L114.054 5.01462V1.07059C114.053 0.985761 114.034 0.90211 113.997 0.825646C113.961 0.749181 113.908 0.681804 113.842 0.628356C113.777 0.574905 113.7 0.53671 113.618 0.516514C113.536 0.496319 113.45 0.494624 113.367 0.511552L110.906 1.01049C110.778 1.0365 110.661 1.10628 110.578 1.2081C110.494 1.30991 110.448 1.43755 110.447 1.56954V3.2802C110.447 4.67081 109.726 5.89092 108.163 6.20818L107.87 6.26687C107.742 6.29288 107.625 6.36267 107.542 6.46448C107.458 6.56629 107.412 6.69393 107.411 6.82591V9.38632C107.411 9.47154 107.43 9.5557 107.466 9.63273C107.502 9.70976 107.555 9.77773 107.621 9.83175C107.687 9.88577 107.763 9.92448 107.846 9.94509C107.928 9.9657 108.014 9.96771 108.097 9.95095ZM105.187 19.8935V12.2472C105.187 9.11798 103.444 6.69035 98.754 7.63513C95.1515 8.36607 93.0607 11.0033 92.5275 13.3415C92.5076 13.4253 92.5065 13.5124 92.5245 13.5966C92.5424 13.6808 92.5789 13.7598 92.6312 13.8281C92.6835 13.8963 92.7503 13.9518 92.8268 13.9908C92.9033 14.0297 92.9875 14.0509 93.0732 14.0529L95.4619 14.1018C95.5956 14.1033 95.7256 14.0581 95.8297 13.974C95.9338 13.8899 96.0055 13.772 96.0326 13.6406C96.1836 12.9801 96.525 12.3788 97.0141 11.9118C97.5033 11.4447 98.1186 11.1327 98.7833 11.0145C100.466 10.6749 101.278 11.4338 101.278 12.5323C101.278 13.0704 101.008 13.5665 100.164 13.8642L96.5282 15.1696C94.0629 16.0487 92.1085 17.9928 92.1085 20.774C92.1085 23.2072 94.0323 25.0618 97.1894 24.4231C98.1057 24.2485 98.9719 23.8716 99.7254 23.3198C100.479 22.768 101.101 22.055 101.546 21.2324C101.546 21.5986 101.57 22.0542 101.608 22.4441C101.616 22.5237 101.64 22.6007 101.68 22.6702C101.72 22.7396 101.773 22.8 101.838 22.8473C101.902 22.8946 101.975 22.9278 102.053 22.9448C102.131 22.9617 102.212 22.9621 102.29 22.9459L104.839 22.4301C104.978 22.4023 105.103 22.3228 105.187 22.2074C105.271 22.092 105.309 21.9491 105.294 21.8068C105.226 21.1712 105.19 20.5327 105.187 19.8935ZM101.279 16.8607C101.279 19.6112 99.7159 20.781 98.033 21.122C96.7412 21.3833 96.1092 20.6258 96.1092 19.709C96.1092 18.5085 96.9208 17.744 97.9425 17.3792L101.283 16.1661L101.279 16.8607ZM66.4133 14.2556C64.2194 14.7 62.5964 16.0403 61.9351 17.28V8.94328C61.9346 8.85845 61.9153 8.7748 61.8787 8.69833C61.8421 8.62187 61.7891 8.55449 61.7235 8.50104C61.6579 8.44759 61.5813 8.4094 61.4992 8.3892C61.4172 8.36901 61.3317 8.36731 61.2489 8.38424L58.4565 8.94328C58.3275 8.96904 58.2113 9.03876 58.1276 9.14062C58.0439 9.24249 57.9978 9.37026 57.9971 9.50232V31.2141C57.9977 31.2989 58.0169 31.3825 58.0535 31.459C58.0901 31.5355 58.1431 31.6028 58.2088 31.6563C58.2744 31.7097 58.351 31.7479 58.433 31.7681C58.5151 31.7883 58.6006 31.79 58.6834 31.7731L61.4145 31.2141C61.5435 31.1881 61.6597 31.1184 61.7436 31.0166C61.8275 30.9148 61.874 30.7871 61.8753 30.655V29.2378C62.6562 30.4076 64.2194 31.0394 66.2629 30.6257C70.471 29.7731 73.2355 25.7047 73.2355 20.9948C73.2355 16.3813 70.7411 13.3779 66.4133 14.2556ZM65.578 27.0045C63.5652 27.4126 61.8822 26.1408 61.8822 23.3288C61.8822 20.4833 63.5652 18.5937 65.578 18.187C67.6229 17.7677 69.246 18.992 69.246 21.8362C69.246 24.6803 67.616 26.5908 65.5711 27.0045H65.578ZM19.0219 9.88945C21.9897 9.28569 23.9831 11.2577 23.9831 14.7936C23.9831 18.2555 21.8561 21.2002 18.9148 21.7956C18.3799 21.9104 17.8282 21.9223 17.2889 21.8306V32.0736C17.2889 36.9456 13.5889 41.3145 9.03978 42.2383L8.24772 42.3991C3.69999 43.3243 0 40.4592 0 35.5872V21.2687C0 14.359 5.4776 13.6532 5.4776 13.6532C5.50064 13.6479 5.52275 13.6417 5.54452 13.6355L5.54454 13.6355C5.56878 13.6287 5.5926 13.622 5.6168 13.6169C8.58459 13.0145 10.578 14.9851 10.578 18.521C10.578 21.9829 8.45095 24.9276 5.51936 25.523C4.9845 25.638 4.43275 25.6499 3.89348 25.558V34.7961C3.89348 37.3719 5.84927 39.07 8.25328 38.5808L9.04534 38.4201C11.4563 37.9309 13.4051 35.439 13.4051 32.8632V17.5413C13.4051 10.6316 18.8827 9.92439 18.8827 9.92439C18.9085 9.91922 18.9332 9.91247 18.9574 9.90581C18.979 9.89992 19.0004 9.89404 19.0219 9.88945ZM5.35092 21.8348C6.40886 21.6251 7.10487 20.6035 7.10487 19.2492C7.10487 17.9075 6.42835 17.1793 5.35092 17.3974C4.2735 17.6154 3.57749 18.6328 3.57749 19.9662C3.57749 21.2995 4.29299 22.0444 5.35092 21.8348ZM16.9896 16.236C16.9896 17.5679 17.7023 18.3198 18.763 18.1046C19.8293 17.8879 20.517 16.8607 20.517 15.519C20.517 14.1773 19.8405 13.4491 18.763 13.6672C17.6856 13.8852 16.9896 14.904 16.9896 16.236ZM17.9487 41.3005C17.5998 41.1107 17.1904 41.0669 16.8095 41.1786C16.4286 41.2904 16.1071 41.5487 15.915 41.8973C15.8412 42.0371 14.0691 45.1621 10.12 45.3424C9.9231 45.3516 9.72995 45.3996 9.55156 45.4837C9.37317 45.5678 9.21302 45.6864 9.08027 45.8327C8.94752 45.9789 8.84476 46.15 8.77786 46.3362C8.71097 46.5223 8.68124 46.7198 8.69038 46.9175C8.69952 47.1152 8.74735 47.3091 8.83113 47.4882C8.91492 47.6673 9.03302 47.8281 9.1787 47.9614C9.32438 48.0947 9.49478 48.1978 9.68016 48.265C9.86555 48.3322 10.0623 48.362 10.2592 48.3528C15.9442 48.0929 18.4512 43.5269 18.5556 43.3326C18.7425 42.9822 18.7836 42.5716 18.6699 42.1908C18.5562 41.81 18.2969 41.4899 17.9487 41.3005ZM54.5505 12.9181C54.4945 12.8762 54.4359 12.8379 54.3751 12.8035C49.4056 10.018 44.8787 12.5729 44.688 12.6833C44.3476 12.8843 44.0999 13.2119 43.9986 13.5951C43.8972 13.9783 43.9504 14.3862 44.1466 14.7303C44.3427 15.0744 44.6661 15.327 45.0466 15.4333C45.427 15.5396 45.8338 15.491 46.1789 15.2982C46.3111 15.2241 49.4612 13.5009 52.9121 15.4379C53.2437 15.6236 53.6331 15.6762 54.0018 15.585C54.3705 15.4938 54.691 15.2657 54.8988 14.9466C55.1066 14.6275 55.1862 14.2412 55.1216 13.8656C55.0569 13.4899 54.8529 13.1528 54.5505 12.9223V12.9181ZM116.044 24.1017C115.905 24.1562 112.536 25.3986 109.404 22.9836C109.104 22.7555 108.728 22.6494 108.353 22.6864C107.978 22.7234 107.631 22.9008 107.38 23.1832C107.129 23.4657 106.993 23.8326 107 24.2109C107.006 24.5893 107.154 24.9514 107.414 25.2253C107.462 25.2759 107.514 25.3226 107.57 25.3651C112.08 28.8521 116.931 26.9891 117.134 26.9025C117.48 26.7405 117.751 26.4526 117.893 26.0972C118.034 25.7418 118.036 25.3456 117.897 24.989C117.758 24.6325 117.49 24.3423 117.145 24.1775C116.801 24.0127 116.408 23.9856 116.044 24.1017ZM29.6236 21.7719C27.3963 22.2219 25.7454 23.5999 25.0842 24.9346V23.7411C25.0836 23.6562 25.0644 23.5726 25.0278 23.4961C24.9912 23.4197 24.9382 23.3523 24.8726 23.2988C24.8069 23.2454 24.7304 23.2072 24.6483 23.187C24.5662 23.1668 24.4807 23.1651 24.3979 23.182L21.6668 23.7411C21.5379 23.7671 21.4219 23.8369 21.3382 23.9387C21.2546 24.0405 21.2084 24.1681 21.2074 24.3001V44.6758C21.2082 44.7605 21.2277 44.844 21.2643 44.9204C21.301 44.9967 21.354 45.064 21.4196 45.1174C21.4851 45.1708 21.5616 45.209 21.6436 45.2293C21.7255 45.2496 21.8109 45.2515 21.8937 45.2348L24.7459 44.6562C24.8749 44.6304 24.9911 44.5607 25.0748 44.4588C25.1585 44.357 25.2046 44.2292 25.2053 44.0971V37.0476C25.9264 37.9435 27.4325 38.4928 29.4732 38.0791C33.6493 37.2321 36.4459 33.1875 36.4459 28.4803C36.4459 23.8655 33.9514 20.8956 29.6236 21.7719ZM28.8413 34.4453C26.7978 34.8646 25.1454 33.5508 25.1454 30.8018C25.1454 28.0527 26.7978 26.1044 28.8413 25.6907C30.8847 25.277 32.5092 26.56 32.5092 29.3091C32.5092 32.0904 30.8861 34.0316 28.8413 34.4453ZM48.0177 18.0445C45.7905 18.4959 44.1409 19.8739 43.4797 21.2086V20.0151C43.4789 19.9303 43.4595 19.8468 43.4228 19.7705C43.3862 19.6941 43.3332 19.6269 43.2676 19.5735C43.202 19.5201 43.1256 19.4818 43.0436 19.4615C42.9616 19.4412 42.8762 19.4394 42.7935 19.456L40.0623 20.0151C39.9336 20.0413 39.8177 20.1112 39.7341 20.2129C39.6504 20.3147 39.6042 20.4422 39.603 20.5741V40.9497C39.6036 41.0344 39.6228 41.1179 39.6593 41.1943C39.6958 41.2706 39.7487 41.3379 39.8142 41.3913C39.8796 41.4448 39.956 41.483 40.0379 41.5033C40.1198 41.5236 40.2051 41.5255 40.2878 41.5088L42.8436 40.9917C43.0568 40.9482 43.2485 40.832 43.3863 40.6629C43.524 40.4938 43.5993 40.2821 43.5995 40.0637V33.3202C44.3219 34.2175 45.8267 34.7668 47.8674 34.3517C52.0434 33.5061 54.8414 29.4601 54.8414 24.7529C54.8414 20.1395 52.3469 17.1682 48.0177 18.0445ZM47.2368 30.7193C45.1933 31.1386 43.5396 29.8248 43.5396 27.0758C43.5396 24.3267 45.1905 22.3784 47.2368 21.9647C49.2831 21.551 50.8978 22.8284 50.8978 25.5831C50.8978 28.3643 49.2803 30.3056 47.2368 30.7193ZM82.5537 10.9223C78.7661 11.6896 75.2804 15.6196 75.2804 20.5811C75.2804 25.8277 78.8565 28.1687 82.9143 27.3469C84.3908 27.0576 85.7675 26.3889 86.91 25.4062C88.0525 24.4235 88.9218 23.1603 89.4331 21.7397C89.462 21.6577 89.472 21.5702 89.4623 21.4838C89.4527 21.3973 89.4237 21.3142 89.3775 21.2407C89.3313 21.1671 89.269 21.105 89.1955 21.059C89.122 21.0131 89.039 20.9844 88.9529 20.9752L86.7549 20.732C86.6326 20.7181 86.5091 20.7446 86.4031 20.8074C86.2971 20.8701 86.2144 20.9659 86.1674 21.0801C85.6385 22.3798 84.6362 23.3931 82.9449 23.7355C80.9613 24.138 79.3075 22.9878 79.2171 20.9515L89.2396 18.9222C89.4031 18.8896 89.5511 18.8032 89.66 18.6766C89.769 18.55 89.8327 18.3905 89.841 18.2234C89.8535 18.0025 89.8632 17.744 89.8632 17.4938C89.8577 12.5072 87.1223 9.99707 82.5537 10.9223ZM79.3075 18.0584C79.398 16.6175 80.5395 14.7433 82.6136 14.3226C84.8979 13.86 85.8598 15.1822 85.9196 16.7181L79.3075 18.0584Z"
          fill="#F23D75"
        ></path>
      </svg>
    </span>
    <a
      href="https://uppbeat.io/"
      className="bg-brand-main-bg-secondary hover:bg-brand-main-bg-hover focus:ring-brand-main rounded-lg px-3 py-2 text-[13px] transition focus:outline-none focus:ring-2"
    >
      Visit main site
    </a>
  </header>
);

export default Header;