<template>
  <header-view>
    <div class="header-subnav border-t-1px border-color2">
      <div
          class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px border-l-1px border-color2">
        <div class="section">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                    fill="#FF5C01"></path>
                <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
              </svg>
            </div>
            <div class="section pdng-l-15px" v-if="data">
              <div class="txt-size-18px">
                Сообщений о нарушений
              </div>
              <div class="txt-size-18px txt-bold">
                {{ data.commission.violations.length }}
              </div>
            </div>
          </div>
        </div>
        <div class="section pdng-l-40px">
          <div class="button medium primary">
            Сообщить о нарушении
          </div>
          <div class="button medium mrgn-l-20px">
            Стать наблюдателем
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene-wrp bg-color-1 border-b-1px border-color1">
    <div style="margin-top:170px;" class="scene" v-if="data">
      <div class="flex-row">
        <div class="section size-50">
          <h1 class="txt-size-32px">
            {{ data.commission.name }}
          </h1>
          <h2 class="txt-size-20px">
            {{ data.commission.description }}
          </h2>
          <div class="tag-wrp mrgn-t-20px">
            <a class="tag-unit">
              Минск
            </a>
          </div>
          <div class="mrgn-t-40px" v-if="data.commission.extra.area">
            {{ data.commission.extra.area }}
          </div>
          <div class="mrgn-t-40px">
            <div class="infoblock">
              <div class="infoblock-name">Адрес:</div>
              <div class="infoblock-value">{{ data.commission.address }}</div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Тип комиссии:</div>
              <div class="infoblock-value">{{ data.commission.kind }}</div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Код комиссии:</div>
              <div class="infoblock-value">{{ data.commission.code }}</div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Вышестоящая комиссия:</div>
              <div class="infoblock-value">
                <a class="txt-underline-inline" href="#">Центральная комиссия</a>
              </div>
            </div>
          </div>
        </div>
        <div class="section size-50">
          <div class="map-wrp"
               style="background:#EDEDED; width:100%; height:100%; position:absolute; left:0; top:0; border-radius:30px;">
            <location :feature="data.commission.coordinates"></location>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene" v-if="data">
    <h2 class="txt-size-36px txt-bold pdng-b-40px">
      Члены комиссии
    </h2>
    <div class="campaign-candidates-list">
      <div class="person-wrp flex-column flex-algn-itms-strch" v-for="item of data.commission.persons">
        <div class="person-photo">
          <!--          <div class="person-initials">С.Г.Т.</div>-->
          <img :src="item.person.photo_url ? item.person.photo_url : '//img/user.svg'"
               :alt="item.person.full_name">
        </div>
        <div class="person-info pdng-t-10px">
          <div class="person-name txt-size-14px txt-medium">
            {{ item.person.full_name }}
          </div>
          <!--          <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">-->
          <!--            37 лет-->
          <!--          </div>-->
          <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
            {{ item.position }}
          </div>
        </div>
        <div class="person-popover cursor-pointer">
          <div class="flex-column flex-algn-itms-strch">
            <div class="person-photo">
              <!--              <div class="person-initials">С.Г.Т.</div>-->
              <img :src="item.person.photo_url ? item.person.photo_url : '//img/user.svg'" :alt="item.person.full_name">
            </div>
            <div class="person-info pdng-t-10px">
              <div class="person-name txt-size-14px txt-medium">
                {{ item.person.full_name }}
              </div>
              <!--              <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">-->
              <!--                37 лет-->
              <!--              </div>-->
              <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                {{ item.position }}
              </div>
              <div class="infoblock txt-size-12px">
                <div class="infoblock-name">
                  Должность
                </div>
                <div class="infoblock-value ">
                  Заместитель Председателя Центральной комиссии, директор Национального центра
                  законодательства и правовых исследований Республики Беларусь
                </div>
              </div>
              <div class="infoblock txt-size-12px">
                <div class="infoblock-name">
                  Работодатель
                </div>
                <div class="infoblock-value ">
                  Центральная избирательная комиссия
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="scene" v-if="data">
    <h2 class="txt-size-36px txt-bold pdng-b-40px">
      Последние инциденты комиссии.
      <a class="txt-underline-2px" href="#">Всего 237 инцидента и нарушений</a>.
    </h2>
    <div class="incident-list">
      <div class="incident-unit cursor-pointer"
           v-for="violation of data.commission.violations"
           @click="showModal(violation)">
        <div class="size-25 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              {{ violation.categories }}
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              {{ violation.created_at }}
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline"
                 :href="'/commission/' + violation.commission.id">
                {{ violation.commission.code }},{{ violation.commission.name }}: {{ violation.commission.description }}
              </a>
            </div>
          </div>
          <!--<div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                Честные люди
              </a>
            </div>
          </div>-->
        </div>
        <div class="border-l-1px border-r-1px border-color2 pdng-20px">
          <p class="txt-size-14px txt-color-3-1">
            {{ violation.description }}
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path
                        d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z"
                        fill="#F3F3F3"/>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z"
                          fill="#C6C6C6"/>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feGaussianBlur stdDeviation="0.5"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  {{ violation.attachments.length }}
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary inline-flex flex-algn-itms-c pdng-l-40px pdng-r-40px">
        <div class="section">
          Показать все 873 нарушений и инцидентов
        </div>
        <div class="section mrgn-l-20px">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                fill="white"></path>
          </svg>
        </div>
      </a>
    </div>
  </div>
  <div class="scene">
    <h2 class="txt-size-36px txt-bold pdng-b-40px">
      Последние избирательные кампании
    </h2>
    <div>
      <!-- Archive campaigning -->
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-18px pdng-20px pdng-l-40px pdng-r-40px grayscale">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              Архив
            </div>
          </div>
          <div class="section border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg width="25" height="33" viewBox="0 0 25 33" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                      fill="#FF5C01"/>
                  <rect y="1" width="2" height="32" fill="#FF5C01"/>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-18px">
                  Нарушений
                </div>
                <div class="txt-size-18px txt-bold">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px grayscale">
          <h2 class="txt-color-1 txt-size-36px txt-lh-1_1em">
            <a class="txt-underline-inline" href="#">
              Выборы представителей нижней палаты верхнего представительства третьего созыва депутатов
            </a>
          </h2>
          <div class="tag-wrp mrgn-t-20px">
            <a class="tag-unit">
              Общереспубликанские выборы
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="displayModal"
          class="popup"
          :show-header="false"
          :modal="true">
    <template #header>
      Инцидент #{{ message.id }}
    </template>
    <template v-if="message">
      <div class="flex-row flex-algn-itms-c border-b-1px border-color1">
        <div class="section flex-grow-all pdng-l-30px pdng-r-20px pdng-t-20px pdng-b-20px">
          <div class="txt-size-14px txt-medium">
            Несоблюдение комиссией сроков вывешивания протокола
          </div>
          <div class="txt-color-3-1 txt-size-12px txt-medium">
            17 авг 2020, 02:36
          </div>
          <div class="txt-size-12px txt-medium mrgn-t-5px">
            <a class="txt-underline-inline" href="#">01-047-0056, Участок 56: ГУО "Гимназия №5 г.Барановичи"</a>
          </div>
          <div class="tag-unit  mrgn-t-20px">
            Честные люди
          </div>
        </div>
        <div class="section pdng-r-30px pdng-l-20px">
          <!-- ПОказываем кнопку в диалоге просмотра инцидента везде, кроме раздела инцидентов и подраздела инцидентов в разделе кампании -->
          <a class="button medium" href="#">Все нарушения/инциденты кампании</a>
        </div>
      </div>
      <div class="pdng-30px">
        <div class="mrgn-t-20px">
          <h3 class="txt-size-20px txt-bold">
            Описание:
          </h3>
          <div class="mrgn-t-30px">
            {{ message.description }}
          </div>
        </div>
        <div class="mrgn-t-30px" v-if="message.attachments.length > 0">
          <h3 class="txt-size-20px txt-bold">
            Прикрепленные файлы:
          </h3>
          <div class="incident-attachments mrgn-t-30px">
            <a :href="attachment.url" class="attachment-unit cursor-pointer"
               v-for="(attachment, index) of message.attachments">
              <div class="flex-row flex-algn-itms-c">
                <div class="section">
                  <svg class="block" width="24" height="34" viewBox="0 0 24 34" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <path
                          d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z"
                          fill="#F3F3F3"></path>
                    </g>
                    <g opacity="0.5">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z"
                            fill="#C6C6C6"></path>
                    </g>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="section pdng-l-10px">
                  <div class="txt-color-1 txt-bold txt-size-14px">
                    Файл #{{ index + 1 }}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="mrgn-t-20px">
          <h3 class="txt-size-20px txt-bold">
            Инцидент затрагивает:
          </h3>
          <div class="mrgn-t-30px">
            <div class="campaign-candidates-list">
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Должность
                        </div>
                        <div class="infoblock-value ">
                          Президент Республики Беларусь
                        </div>
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Субъект выдвижения
                        </div>
                        <div class="infoblock-value ">
                          Самовыдвижение
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Должность
                        </div>
                        <div class="infoblock-value ">
                          Президент Республики Беларусь
                        </div>
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Субъект выдвижения
                        </div>
                        <div class="infoblock-value ">
                          Самовыдвижение
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Должность
                        </div>
                        <div class="infoblock-value ">
                          Президент Республики Беларусь
                        </div>
                      </div>
                      <div class="infoblock txt-size-12px">
                        <div class="infoblock-name">
                          Субъект выдвижения
                        </div>
                        <div class="infoblock-value ">
                          Самовыдвижение
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mrgn-t-50px">
          <div class="txt-color-3-1 txt-size-14px">
            Поделитесь этим материалам, это поможет <br> привлечь внимание к инциденту и его решению.
          </div>
        </div>
      </div>
    </template>
  </Dialog>

</template>
<script>
import Header from './Header.vue';
import Location from './Point.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import Dialog from './Modal.vue';
import Button from 'primevue/button';

const data = ref(null)

async function fetchCommission() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/commission/' + useRoute().params.id)
    data.value = await response.json()
  } catch (e) {
    data.value = {commissions: [], pagination: {aggregate: {count: 0}}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    'header-view': Header,
    Location,
    Dialog,
    Button
  },
  setup() {
    onMounted(() => {
      fetchCommission()
    })
    const displayModal = ref(false)
    const message = ref(null)
    return {
      data,
      displayModal,
      message,
      showModal(violation) {
        message.value = violation
        displayModal.value = true
      }
    }
  }
})
</script>
