<template>
    <header-view :active="'Отправить нарушение'">
    </header-view>
    <div class="scene mrgn-t-20px mil-mrgn-t-80px" style="width: 700px;margin-left: auto;margin-right: auto">
        <div class="committee-list mil-flex-column ">
            <h2 class="pdng-b-15px">Отправить сообщение о нарушении</h2>
            <div class="flex-row flex-wrap size-100 mrgn-t-30px">
                <div class="section size-33_3 pdng-7_5px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Область</div>
                    <el-input v-model="form.region"
                              readonly
                              style="width: 500px"
                              @click="showRegions = true"
                              :model-value="displayArea"></el-input>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Район</div>
                    <el-input v-model="district"
                              :disabled="!area"
                              style="width: 500px"
                              readonly
                              @click="showDistricts = true"></el-input>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Номер участка</div>
                    <el-input-number
                        v-model="form.commission_number"
                        :min="0"
                        :max="150"
                    ></el-input-number>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Есть аккредитация</div>
                    <el-radio-group v-model="form.has_accreditation" style="width: 500px" size="medium">
                        <el-radio-button :label="true">Да</el-radio-button>
                        <el-radio-button :label="false">Нет</el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Категории</div>
                    <el-select v-model="form.categories" placeholder="Категории" :multiple="true" style="width: 500px">
                        <template v-if="form.has_accreditation">
                            <el-option :label="item" :value="key"
                                       v-for="(item, key) in categoriesForObservers"></el-option>
                        </template>
                        <template v-else>
                            <el-option :label="item" :value="key"
                                       v-for="(item, key) in categoriesForCivilControllers"></el-option>
                        </template>
                    </el-select>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100" style="width: 300px">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Дата</div>
                    <el-input-number
                        v-model="form.date"
                        :min="12"
                        :max="27"
                    ></el-input-number>
                    (февраля)
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Описание</div>
                    <el-input type="textarea"
                              style="width: 500px"
                              rows="5"
                              v-model="form.description"></el-input>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Медиа-файлы</div>
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                        :limit="3"
                    >
                        <el-button type="primary">Кликните для загрузки</el-button>
                        <!--                        <template #tip>-->
                        <!--                            <div class="el-upload__tip">-->
                        <!--                                jpg/png-->
                        <!--                            </div>-->
                        <!--                        </template>-->
                    </el-upload>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100" style="width: 500px">
                    <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Разрешаете ли вы публиковать ваше сообщение о
                        нарушении в медиа?
                    </div>
                    <el-radio-group v-model="form.media_consent" style="width: 300px">
                        <el-radio-button :label="true">Да, разрешаю</el-radio-button>
                        <el-radio-button :label="false">Нет, не разрешаю</el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex-row flex-wrap size-100 mrgn-t-30px">
                <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100" style="width: 300px">
                    <el-button type="primary" @click="onSubmit">Отправить</el-button>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="showRegions" :custom-class="'popup'" :center="true" :width="'100%'" :show-close="false">
        <div class="pdng-t-10px">
            <el-row v-for="item in areas">
                <div class="pdng-l-20px choose-region" style="margin-right: auto;margin-left: auto">
                    <el-radio-button :label="item.code"
                                     v-model="area"
                                     @click="showRegions = false"
                    >{{ item.label + (item.code !== '7' ? ' область' : '') }}
                    </el-radio-button>
                </div>
            </el-row>
        </div>
    </el-dialog>
    <el-dialog v-model="showDistricts" :custom-class="'popup'" :center="true" :width="'100%'" :show-close="false">
        <div class="pdng-t-10px">
            <el-row v-for="item in districts">
                <div class="pdng-l-20px choose-region" style="margin-right: auto;margin-left: auto">
                    <el-radio-button :label="item.label.replace(' район', '')"
                                     v-model="district"
                                     @click="showDistricts = false"
                    >{{ item.label }}
                    </el-radio-button>
                </div>
            </el-row>
        </div>
    </el-dialog>
</template>

<script>
import Header from './Header.vue'
import areas from "../areas";
import {
    ElDialog,
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElInputNumber,
    ElRadioButton,
    ElUpload,
    ElRadioGroup,
    ElCol,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElRow,
    ElMessage,
    ElMessageBox
} from 'element-plus'
import {computed, ref} from "vue";

const categoriesForCivilControllers = {
    1: 'Манипуляция со списками избирателей',
    2: 'Принуждение к участию в досрочном голосовании',
    3: 'Несоблюдение условий, обеспечивающих тайну голосования',
    4: 'Невывешивание копии протокола',
    12: 'Другое'
}
const categoriesForObservers        = {
    ...categoriesForCivilControllers,
    5: 'Отказ в аккредитации наблюдателя',
    6: 'Ограничение прав наблюдателя ',
    7: 'Необеспечение сохранности ящика для голосования',
    8: 'Несоответствие данных явки данным протокола',
    9: 'Нарушение порядка подсчета голосов',
    10: 'Непрозрачный подсчет голосов',
    11: 'Манипуляции при подсчете бюллетеней',
}

export default {
    components: {
        'header-view': Header,
        ElDatePicker,
        ElForm,
        ElFormItem,
        ElButton,
        ElInput,
        ElInputNumber,
        ElRadioButton,
        ElRadioGroup,
        ElCol,
        ElSelect,
        ElOption,
        ElUpload,
        ElDialog,
        ElRow
    },
    setup() {
        const showRegions   = ref(false);
        const showDistricts = ref(false);
        const form          = ref({
            region: '',
            district: '',
            date: 12,
            commission_number: 0,
            media_consent: false,
            description: '',
            categories: [],
            area: null,
            has_accreditation: false
        })
        const area          = ref();
        const district      = ref();
        const districts     = computed(() => {
            if (!area.value) {
                return [];
            }
            return areas[area.value].regions;
        })
        const upload        = ref();
        const displayArea   = computed(() => {
            if (!area.value) {
                return '';
            }
            return areas[area.value].label;
        })
        return {
            form,
            areas,
            showRegions,
            showDistricts,
            categoriesForObservers,
            area,
            district,
            displayArea,
            categoriesForCivilControllers,
            districts,
            onSubmit() {
                ElMessageBox.confirm(
                    'Сообщение отправлено. Желаете ли отправить еще одно сообщение?',
                    'Успех',
                    {
                        confirmButtonText: 'Да',
                        cancelButtonText: 'Нет',
                        type: 'success',
                    }
                )
                    .then(() => {
                        form.value.date              = 12;
                        form.value.media_consent     = false;
                        form.value.description       = '';
                        form.value.area              = null;
                        form.value.has_accreditation = false;
                        form.value.categories        = [];
                        // upload.value.clearFiles()
                    })
                    .catch((e) => {
                        ElMessage({
                            type: 'success',
                            message: 'Успешно завершено',
                        })
                        throw e
                    })
            }
        }
    }
}
</script>

<style>
.choose-region .el-radio-button .el-radio-button__inner {
    width: 300px;
}
</style>
