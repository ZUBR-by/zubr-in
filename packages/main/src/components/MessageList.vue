<template>
    <div class="incident-list">
        <div class="incident-unit cursor-pointer"
             v-for="item of modelValue"
             @click="showModal(item)">
            <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
                <div class="flex-grow-all">
                    <div class="txt-size-14px">
                        <div v-for="cat of item.categories " class="pdng-t-5px">
                            {{ hash[cat] }}
                        </div>
                    </div>
                    <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
                        {{ formatTime(item.created_at) }}
                    </div>
                    <div class="mrgn-t-10px" v-if="showCommission">
                        <a class="inline txt-size-12px txt-underline-inline"
                           :href="'/commission/' + item.commission.id">
                            {{ item.commission.code }},{{ item.commission.name }}: {{ item.commission.description }}
                        </a>
                    </div>
                </div>
                <div>
                    <div class="mrgn-t-10px">
                        <a class="inline txt-size-12px txt-underline-inline" href="#" v-if="item.initiative">
                            {{ initiatives[item.initiative] }}
                        </a>
                    </div>
                </div>
            </div>
            <div
                class="flex-grow-all border-l-1px border-r-1px border-color2  mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
                <p class="txt-size-14px txt-color-3-1">
                    {{ item.description }}
                </p>
                <div class="tag-wrp pdng-t-10px" v-if="false">
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
    <el-dialog v-model="displayModal" :title="modalTitle" :custom-class="'popup'" :top="'10vh'" :width="'100%'">
        <template v-if="message">
            <div class="flex-row flex-algn-itms-c border-b-1px border-t-1px border-color1 mil-flex-column">
                <div
                    class="section flex-grow-all pdng-r-20px pdng-l-20px pdng-t-15px pdng-b-20px size-60 mil-size-100 mil-pdng-r-20px">
                    <div class="txt-size-14px txt-medium">
                        {{ formatCategories(message.categories) }}
                    </div>
                    <div class="txt-color-3-1 txt-size-12px txt-medium">
                        {{ formatTime(message.created_at) }}
                    </div>
                    <div class="mrgn-t-10px" v-if="showCommission">
                        <a class="inline txt-size-12px txt-underline-inline"
                           :href="'/commission/' + message.commission.id">
                            {{ message.commission.code }}, {{ message.commission.name }}:
                            {{ message.commission.description }}
                        </a>
                    </div>
                    <div class="tag-unit mrgn-t-20px" v-if="message.initiative">
                        {{ initiatives[message.initiative] }}
                    </div>
                </div>
                <div class="section pdng-r-30px pdng-l-5px mil-pdng-l-20px mil-size-100 mil-pdng-b-30px mil-pdng-t-20px"
                     v-if="showButtonAll"
                >
                    <!-- ПОказываем кнопку в диалоге просмотра инцидента везде, кроме раздела инцидентов и подраздела инцидентов в разделе кампании -->
                    <a class="button medium mil-size-100 txt-algn-c"
                       :href="'/campaign/' + message.commission.campaign_id + '/messages'">
                        Все сообщения кампании
                    </a>
                </div>
            </div>
            <div class="pdng-t-25px pdng-l-20px pdng-b-20px pdng-r-20px mil-pdng-20px">
                <div v-if="false">
                    <h3 class="txt-size-20px txt-bold">
                        Инцидент затрагивает:
                    </h3>
                    <div class="mrgn-t-30px">
                        <div class="campaign-candidates-list">
                            <div class="person-wrp flex-column flex-algn-itms-strch">
                                <div class="person-photo">
                                    <div class="person-initials">С.Г.Т.</div>
                                    <img src="/img/icon/person-placeholder.png" alt="Светлана Георгиевна Тихановская">
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
                                            <img src="/img/icon/person-placeholder.png"
                                                 alt="Светлана Георгиевна Тихановская">
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
                                    <img src="/img/icon/person-placeholder.png" alt="Светлана Георгиевна Тихановская">
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
                                            <img src="/img/icon/person-placeholder.png"
                                                 alt="Светлана Георгиевна Тихановская">
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
                                    <img src="/img/icon/person-placeholder.png" alt="Светлана Георгиевна Тихановская">
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
                                            <img src="/img/icon/person-placeholder.png"
                                                 alt="Светлана Георгиевна Тихановская">
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
                    <div class="mrgn-t-30px txt-size-16px">
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
    </el-dialog>
</template>

<script>
import {computed, ref} from "vue";

const initiatives = {
    0: "ПЗСВ",
    1: "Право выбора",
    2: "Честные люди",
}
const hash        = {
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
import {ElDialog} from 'element-plus';

const MessageList = {
    name: "MessageList",
    components: {
        ElDialog
    },
    props: {
        modelValue: Array,
        showCommission: {
            type: Boolean,
            default: true
        },
        showButtonAll: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const displayModal = ref(false)
        const message      = ref(null)
        const modalTitle   = computed(() => {
            return message.value ? `Инцидент #${message.value.id}` : ''
        })
        return {
            displayModal,
            message,
            hash,
            modalTitle,
            formatCategories(categories) {
                return categories.map(i => hash[i]).join(',')
            },
            formatTime(raw) {
                let d = new Date(raw);
                return d.toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                })
            },
            initiatives,
            showModal(violation) {
                message.value      = violation
                displayModal.value = true
            },
        }
    }
}
export {hash, initiatives, MessageList}
export default MessageList
</script>

