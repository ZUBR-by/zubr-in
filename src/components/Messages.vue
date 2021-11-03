<template>
  <header-view>
    <div class="sticky-wrp">
      <div class="header-subnav border-t-1px border-color2">
        <a  :href="'/campaign/' + campaign"
            class="section flex-algn-slf-strch flex-row flex-algn-itms-c pdng-l-30px pdng-r-30px mil-pdng-l-15px mil-pdng-r-15px txt-algn-c border-r-1px border-color2 hovered">
          <div class="inline-block">
            <svg class="mil-zoom-0_8" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM18 10.5L2 10.5V13.5L18 13.5V10.5Z" fill="#FF6C1A"/>
            </svg>
          </div>
        </a>
        <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
          <div class="txt-color-1 txt-size-15px mil-txt-size-14px txt-bold">
            Выбор президента Республики Беларусь 2020
          </div>
          <div class="txt-size-15px mil-txt-size-14px">
            Общереспубликанские выборы
          </div>
        </div>
        <div class="section flex-row flex-algn-itms-c flex-noshrink flex-algn-slf-strch pdng-l-20px pdng-r-30px mil-pdng-r-20px border-l-1px border-color2">
          <div class="section">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_75" width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z" fill="#FF5C01"></path>
                  <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-18px mil-txt-size-14px">
                  Нарушений
                </div>
                <div class="txt-size-18px mil-txt-size-14px txt-bold">
                  1 337
                </div>
              </div>
            </div>
          </div>
          <div class="section pdng-l-20px">
            <div class="button medium mil-txt-size-12px primary">
              Сообщить о нарушении
            </div>
          </div>
        </div>
      </div>
      <div class="header-subnav border-color2">
        <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
          <div class="inline-block">
            <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
              Избирательная инициатива
            </div>
            <div class="buttongroup">
              <div class="buttongroup-unit active">
                Все
              </div>
              <div class="buttongroup-unit">
                Зубр
              </div>
              <div class="buttongroup-unit">
                Честные люди
              </div>
              <div class="buttongroup-unit">
                Права выбару
              </div>
            </div>
          </div>
          <div class="inline-block mrgn-l-30px mil-mrgn-l-20px">
            <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
              Тип нарушения
            </div>
            <div class="buttongroup">
              <div class="buttongroup-unit active">
                Все
              </div>
              <div class="buttongroup-unit">
                Зубр
              </div>
              <div class="buttongroup-unit">
                Честные люди
              </div>
              <div class="buttongroup-unit">
                Права выбару
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-170px mil-mrgn-t-120px">
    <div class="incident-list">
      <div class="incident-unit cursor-pointer">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              Несоблюдение комиссией
              сроков вывешивания протокола
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              17 авг 2020, 02:36
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            1. меня допустили на участок для голосования в период с 10.00 - 12.00. Все остальное время я проводил на улице под окном. Подсчет голосов был затруднён, поскольку был большой наплыв людей, которые стоя в очереди закрывали собой урну. До 10.00, находясь на улице, я видел из окна 2 кабинки и считал людей по двум кабинкам ...
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"></path>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  25
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="persons-preview-list">
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="incident-unit cursor-pointer">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              Несоблюдение комиссией
              сроков вывешивания протокола
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              17 авг 2020, 02:36
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            1. меня допустили на участок для голосования в период с 10.00 - 12.00. Все остальное время я проводил на улице под окном. Подсчет голосов был затруднён, поскольку был большой наплыв людей, которые стоя в очереди закрывали собой урну. До 10.00, находясь на улице, я видел из окна 2 кабинки и считал людей по двум кабинкам ...
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"></path>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  25
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="persons-preview-list">
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="incident-unit cursor-pointer">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              Несоблюдение комиссией
              сроков вывешивания протокола
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              17 авг 2020, 02:36
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            1. меня допустили на участок для голосования в период с 10.00 - 12.00. Все остальное время я проводил на улице под окном. Подсчет голосов был затруднён, поскольку был большой наплыв людей, которые стоя в очереди закрывали собой урну. До 10.00, находясь на улице, я видел из окна 2 кабинки и считал людей по двум кабинкам ...
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"></path>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  25
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="persons-preview-list">
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="incident-unit cursor-pointer">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              Несоблюдение комиссией
              сроков вывешивания протокола
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              17 авг 2020, 02:36
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            1. меня допустили на участок для голосования в период с 10.00 - 12.00. Все остальное время я проводил на улице под окном. Подсчет голосов был затруднён, поскольку был большой наплыв людей, которые стоя в очереди закрывали собой урну. До 10.00, находясь на улице, я видел из окна 2 кабинки и считал людей по двум кабинкам ...
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"></path>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  25
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="persons-preview-list">
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="incident-unit cursor-pointer">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              Несоблюдение комиссией
              сроков вывешивания протокола
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              17 авг 2020, 02:36
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            1. меня допустили на участок для голосования в период с 10.00 - 12.00. Все остальное время я проводил на улице под окном. Подсчет голосов был затруднён, поскольку был большой наплыв людей, которые стоя в очереди закрывали собой урну. До 10.00, находясь на улице, я видел из окна 2 кабинки и считал людей по двум кабинкам ...
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"></path>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  25
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="persons-preview-list">
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <img src="/img/person-photo.png" alt="">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
              <div class="persons-preview-unit">
                <div class="tooltip">
                  Светлана Георгьевна
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 100 из 773 нарушений
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import {defineComponent, ref} from "vue";
import SelectButton from 'primevue/selectbutton';
import {useRoute} from "vue-router";

const hash = {
  0: "Отказ в аккредитации наблюдателя",
  1: "Допуск аккредитованного наблюдателя на участок",
  2: "Недопуск аккредитованного наблюдателя на участок",
  3: "Лишение наблюдателя аккредитации (удаление с участка)",
  4: "Принуждение избирателей к досрочному голосованию",
  5: "Несоблюдение комиссией сроков вывешивания протокола",
  6: "Нарушение порядка голосования избирателя по месту нахождения",
  7: "Несовпадение количества проголосовавших по подсчётам наблюдателя с данными из протокола комиссии",
  8: "Несоответствие оформления помещения участка  нормам медицинской безопасности",
  9: "Непрозрачный подсчёт голосов",
  10: "Ограничение прав наблюдателя",
  11: "Другое",
}

export {hash}
export default defineComponent({
  components: {
    'header-view': Header,
    SelectButton
  },
  setup() {
    const filter = ref('Все');
    const options = ref(['Все', 'Честные Люди', 'Право Выбора']);
    const campaign = ref(useRoute().params.id)
    return {filter, options, campaign}
  }
})
</script>
