<template>
  <header-view>
  </header-view>
  <div class="scene-wrp bg-color-1 border-b-1px border-color1" v-if="data">
    <div class="scene mrgn-t-130px mil-mrgn-t-170px">
      <div class="flex-row mil-flex-column">
        <div class="section pdng-r-30px mil-pdng-0 mil-flex-column flex-algn-itms-c">
          <div class="person-view mil-size-100">
            <div class="person-photo">
              <div class="person-initials">С.Г.Т.</div>
              <img :src="data.member.photo_url ? data.member.photo_url : '/img/user.svg'" :alt="data.member.full_name">
            </div>
            <div class="txt-size-12px">
              <div class="mrgn-t-10px">
                <a class="txt-underline-inline" href="#">Источник фото</a>
              </div>
              <div class="mrgn-t-10px">
                <a class="txt-underline-inline" href="#">Это мой профиль. Почему я здесь?</a>
              </div>
            </div>
          </div>
        </div>
        <div class="section flex-grow-all mil-size-100 mil-pdng-t-30px">
          <h1 class="txt-size-32px">
            {{ data.member.full_name }}
          </h1>
          <div class="mrgn-t-40px txt-size-14px mil-mrgn-t-20px">
            <div class="infoblock">
              <div class="infoblock-name">Должность:</div>
              <div class="infoblock-value">Заместитель Председателя Центральной комиссии, директор Национального центра законодательства и правовых исследований Республики Беларусь</div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Работодатель:</div>
              <div class="infoblock-value">
                <a class="txt-underline-inline" href="#">
                  Центральная избирательная комиссия
                </a>
              </div>
            </div>
          </div>
<!--          <div class="tag-wrp mrgn-t-20px">-->
<!--            <a class="tag-unit">-->
<!--              Фальсификации-->
<!--            </a>-->
<!--            <a class="tag-unit">-->
<!--              Санкции-->
<!--            </a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
  <div class="scene">
    <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
      Участие в <a class="txt-underline-2px" href="#">комиссиях</a> избирательных кампаний
    </h2>
    <div class="election-campaign-list">
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-18px mil-txt-size-14px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px grayscale">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              Архив
            </div>
          </div>
          <div class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-r-20px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_65" width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z" fill="#FF5C01"></path>
                  <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-20px mil-txt-size-14px mil-notdisplay">
                  Нарушений
                </div>
                <div class="txt-size-20px mil-txt-size-14px txt-bold txt-nowrap">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px grayscale">
          <h2 class="txt-color-1 txt-size-36px mil-txt-size-30px txt-lh-1_1em">
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
  <div class="scene">
    <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
      Участие <a class="txt-underline-2px" href="#">кандидатом</a> в избирательных кампанях
    </h2>
    <div class="election-campaign-list">
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-18px mil-txt-size-14px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px grayscale">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              Архив
            </div>
          </div>
          <div class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-r-20px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_65" width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z" fill="#FF5C01"></path>
                  <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-20px mil-txt-size-14px mil-notdisplay">
                  Нарушений
                </div>
                <div class="txt-size-20px mil-txt-size-14px txt-bold txt-nowrap">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px grayscale">
          <h2 class="txt-color-1 txt-size-36px mil-txt-size-30px txt-lh-1_1em">
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
  <div class="scene">
    <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
      Последние инциденты в которых отмечен.
      <br>
      Всего <a class="txt-underline-inline-2px" href="#">81 инцидента и нарушений</a>.
    </h2>
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
          <!--<div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                Честные люди
              </a>
            </div>
          </div>-->
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
                    <path d="M1 2C1 0.895431 1.89543 0 3 0H21C22.1046 0 23 0.895431 23 2V30C23 31.1046 22.1046 32 21 32H3C1.89543 32 1 31.1046 1 30V2Z" fill="#F3F3F3"/>
                  </g>
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21V7H3V5ZM4 11H20V12H4V11ZM20 20H4V21H20V20ZM4 13H20V14H4V13ZM20 22H4V23H20V22ZM4 15H20V16H4V15ZM20 24H4V25H20V24ZM4 17H16V18H4V17ZM8 26H4V27H8V26Z" fill="#C6C6C6"/>
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="24" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
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
                  25
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
          Все 873 нарушений и инцидентов
        </div>
        <div class="section mrgn-l-20px">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z" fill="white"></path>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import {defineComponent, ref} from "vue";
import {useRoute} from "vue-router";
const data = ref(null)

async function fetchMember() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/member/' + useRoute().params.id)
    data.value = await response.json()
  } catch (e) {
    data.value = {member: {}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    'header-view': Header
  },
  setup() {
    fetchMember()
    return {
      data
    }
  }
})
</script>
