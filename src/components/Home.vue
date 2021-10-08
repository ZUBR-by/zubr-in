<script>
import Header from './Header.vue';
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    'header-view': Header
  }
})
</script>
<template>
  <header-view></header-view>
  <div class="scene" style="margin-top:170px;">
    <h1 class="txt-color-2 txt-size-18px txt-normal pdng-l-40px pdng-r-40px">
      <dl>
        <dt class="txt-color-1 txt-inline txt-bold">
          ZUBR
        </dt>
        —
        <dd class="txt-inline">
          это платформа для наблюдателей и избирателей в Беларуси. Здесь можно узнать о любом из кандидатов и их
          кампаниях, любой из задействованных в выборах организациях, любом из членов избирательных комиссий на любом из
          работающих на этих выборах участков для голосования.
        </dd>
      </dl>
    </h1>
  </div>
  <div class="scene pdng-t-0">
    <div class="election-campaign-list">
      <!-- Current campaigning -->
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-20px pdng-20px pdng-l-40px pdng-r-40px">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              <div class="elect-camp-dot"></div>
              Кампания уже начата, 2 дня до окончания
            </div>
          </div>
          <div
              class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                      fill="#FF5C01"/>
                  <rect y="1" width="2" height="32" fill="#FF5C01"/>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-20px">
                  Нарушений
                </div>
                <div class="txt-size-20px txt-bold">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-30px pdng-b-50px pdng-l-40px pdng-r-40px">
          <h2 class="txt-color-1 txt-size-48px txt-lh-1_1em">
            <a class="txt-underline-2px" href="/campaign/1">Выбор президента Республики Беларусь 2020</a>
          </h2>
          <div class="tag-wrp mrgn-t-20px">
            <a class="tag-unit">
              Общереспубликанские выборы
            </a>
          </div>
        </div>
        <div class="elect-camp-unit-candidates border-t-2px border-color2">
          <div class="elect-camp-unit-candds-wrp flex-row">
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
            <div class="person-wrp flex-row flex-algn-itms-c cursor-pointer">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="/imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
              <div class="person-info pdng-l-10px">
                <div class="chart-wrp">
                  <div class="chart-unit" style="width:67%;"></div>
                  <div class="chart-value">
                    67%
                  </div>
                </div>
                <div class="person-name txt-size-14px txt-medium">
                  Светлана Георгиевна
                  <br>
                  Тихановская
                </div>
                <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                  37 лет
                </div>
                <!--<div class="infoblock txt-size-12px">
        <div class="infoblock-name">
          Должность
        </div>
        <div class="infoblock-value">
          Президент Республики Беларусь
        </div>
        </div>-->
              </div>
            </div>
          </div>
          <div class="elect-camp-unit-candds-mask">
            <div class="button primary flex-row flex-algn-itms-c">
              <div class="section">
                Все кандидаты
              </div>
              <div class="section mrgn-l-10px">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                      fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming secondary campaigning -->
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-18px pdng-20px pdng-l-40px pdng-r-40px">
            <div class="txt-color-1 txt-medium">
              11—15 сентября 2021
            </div>
            <div class="txt-bold">
              23 дня до начала
            </div>
          </div>
          <div class="section border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px">
          <h2 class="txt-color-1 txt-size-36px txt-lh-1_1em">
            <a class="txt-underline-inline" href="/campaign/1">
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
                <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary inline-flex flex-algn-itms-c pdng-l-40px pdng-r-40px">
        <div class="section">
          Показать все 15 электоральных компании
        </div>
        <div class="section mrgn-l-20px">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                fill="white"/>
          </svg>
        </div>
      </a>
    </div>
  </div>
  <div class="scene">
    <div class="pdng-b-40px">
      <h3 class="txt-size-36px txt-bold">
        Последние новости.
        <a class="txt-underline-2px" href="#">Всего 73 новости</a>.
      </h3>
    </div>
    <div class="">
      <div class="article-preview-unit">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
            Вброшенный президент
          </a>
        </h4>
        <h5 class="txt-size-28px txt-bold mrgn-t-15px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы.
          Исследование «Новой».
        </h5>
        <div class="pdng-t-30px pdng-b-30px">
          <p>
            <a class="txt-underline" href="#">По версии белорусской ЦИК</a>, более 80% избирателей проголосовали за то,
            чтобы Александр Лукашенко стал главой государства в шестой раз и остался у власти еще на пять лет, а его
            главную соперницу — Светлану Тихановскую — поддержали скромные 10%.
          </p>
          <p>
            Чтобы защитить свой реальный выбор, белорусы не только выходят на улицы, но и пытаются организовать
            «народный Центризбирком» — ведут подсчет голосов своими силами. Собрать полные данные по всей стране
            невозможно, однако даже доступная часть протоколов показывает, что участковые комиссии «рисовали» спущенные
            сверху результаты во время досрочного голосования.
          </p>
        </div>
        <div class="article-preview-image pdng-b-20px">
          <img src="https://novayagazeta.ru/static/records/60a0cf3c93f24e15a5f398d5adb530f0.webp" alt="">
        </div>
        <div class="tag-wrp">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
      <div class="article-preview-unit">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
            Вброшенный президент
          </a>
        </h4>
        <h5 class="txt-size-28px txt-bold mrgn-t-15px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы.
          Исследование «Новой».
        </h5>
        <div class="pdng-t-30px pdng-b-30px">
          <p>
            <a class="txt-underline" href="#">По версии белорусской ЦИК</a>, более 80% избирателей проголосовали за то,
            чтобы Александр Лукашенко стал главой государства в шестой раз и остался у власти еще на пять лет, а его
            главную соперницу — Светлану Тихановскую — поддержали скромные 10%.
          </p>
          <p>
            Чтобы защитить свой реальный выбор, белорусы не только выходят на улицы, но и пытаются организовать
            «народный Центризбирком» — ведут подсчет голосов своими силами. Собрать полные данные по всей стране
            невозможно, однако даже доступная часть протоколов показывает, что участковые комиссии «рисовали» спущенные
            сверху результаты во время досрочного голосования.
          </p>
        </div>
        <div class="tag-wrp">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
