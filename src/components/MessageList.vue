<template>
  <div class="incident-list">
    <div class="incident-unit cursor-pointer"
         v-for="item of messages"
         @click="showModal(item)">
      <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
        <div class="flex-grow-all">
          <div class="txt-size-14px">
            <div v-for="cat of item.categories " class="pdng-t-5px">
              {{ hash[cat] }}
            </div>
          </div>
          <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
            {{ item.created_at }}
          </div>
          <div class="mrgn-t-10px">
            <a class="inline txt-size-12px txt-underline-inline"
               :href="'/commission/' + item.commission.id">
              {{ item.commission.code }},{{ item.commission.name }}: {{ item.commission.description }}
            </a>
          </div>
        </div>
        <div>
          <div class="mrgn-t-10px">
            <a class="inline txt-size-12px txt-underline-inline" href="#" v-if="'initiative' in item.extra">
              {{initiatives[item.extra.initiative]}}
            </a>
          </div>
        </div>
      </div>
      <div
          class="flex-grow-all border-l-1px border-r-1px border-color2  mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
        <p class="txt-size-14px txt-color-3-1">
          {{ item.description }}
        </p>
        <div class="tag-wrp pdng-t-10px">
          <a href="" class="tag-unit">Заметка</a>
        </div>
      </div>
      <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
        <div class="flex-grow-all">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <img src="/img/icon/attachment.svg">
            </div>
            <div class="section pdng-l-10px" v-if="item.attachments.length">
              <div class="txt-color-1 txt-bold txt-size-14px">
                {{ item.attachments.length > 0 ? item.attachments.length : 'Нет' }}
              </div>
              <div class="txt-size-14px">
                вложений
              </div>
            </div>
            <div class="section pdng-l-10px" v-else>
              <div class="txt-size-14px">
                Нет вложений
              </div>
            </div>
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
      <div class="flex-row flex-algn-itms-c border-b-1px border-color1 mil-flex-column">
        <div
            class="section flex-grow-all pdng-l-30px pdng-r-20px pdng-t-20px pdng-b-20px mil-size-100 mil-pdng-l-20px mil-pdng-r-20px">
          <div class="txt-size-14px txt-medium">
            {{ formatCategories(message.categories) }}
          </div>
          <div class="txt-color-3-1 txt-size-12px txt-medium">
            {{ message.created_at }}
          </div>
          <div class="tag-unit  mrgn-t-20px" v-if="'initiative' in message.extra">
            {{initiatives[message.extra.initiative]}}
          </div>
        </div>
        <div class="section pdng-r-30px pdng-l-20px mil-size-100 mil-pdng-b-30px mil-pdng-t-20px">
          <!-- ПОказываем кнопку в диалоге просмотра инцидента везде, кроме раздела инцидентов и подраздела инцидентов в разделе кампании -->
          <a class="button medium mil-size-100 txt-algn-c" href="#">Все нарушения/инциденты кампании</a>
        </div>
      </div>
      <div class="pdng-30px mil-pdng-20px">
        <div v-if="false">
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
        <div>
          <h3 class="txt-size-20px txt-bold">
            Описание:
          </h3>
          <div class="mrgn-t-30px">
            {{ message.description }}
          </div>
        </div>
        <div class="mrgn-t-50px" v-if="message.attachments.length > 0">
          <h3 class="txt-size-20px txt-bold">
            Прикрепленные файлы:
          </h3>
          <div class="incident-attachments mrgn-t-30px">
            <a :href="attachment.url" class="attachment-unit cursor-pointer"
               v-for="(attachment, index) of message.attachments">
              <div class="flex-row flex-algn-itms-c">
                <div class="section">
                  <img src="/img/icon/attachment.svg" alt="Иконка вложения">
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
import {ref} from "vue";
import Dialog from './Modal.vue';

const initiatives = {
  0: "ПЗСВ",
  1: "Право выбора",
  2: "Честные люди",
}
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

export default {
  name: "MessageList",
  components: {
    Dialog
  },
  props: {
    messages: Array
  },
  setup() {
    const displayModal = ref(false)
    const message = ref(null)
    return {
      displayModal,
      message,
      hash,
      formatCategories(categories) {
        return categories.map(i => hash[i]).join(',')
      },
      initiatives,
      showModal(violation) {
        message.value = violation
        displayModal.value = true
      },
    }
  }
}
</script>

<style scoped>

</style>
