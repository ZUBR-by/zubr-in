<template>
    <header-view :active="'Отправить нарушение'">
    </header-view>
    <div class="scene mrgn-t-50px mil-mrgn-t-90px">
        <div class="flex-row mil-flex-column">
            <div class="section size-60 mil-size-90 pdng-r-30px">
                <h2 class="pdng-b-15px">Отправить сообщение о нарушении</h2>
                <div class="flex-row flex-wrap size-100 mrgn-t-30px">
                    <div class="section pdng-7_5px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Область</div>
                        <el-input v-model="form.region"
                                  readonly
                                  @click="showRegions = true"
                                  :model-value="displayArea"></el-input>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100">
                    <div class="section pdng-7_5px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Район</div>
                        <el-input v-model="district"
                                  :disabled="!area"
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
                    <div class="section pdng-7_5px pdng-t-10px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Есть аккредитация</div>
                        <el-radio-group v-model="form.has_accreditation" size="medium">
                            <el-radio-button :label="true">Да</el-radio-button>
                            <el-radio-button :label="false">Нет</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100">
                    <div class="section pdng-7_5px pdng-t-10px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Категории</div>
                        <el-select v-model="form.categories" placeholder="Категории" :multiple="true">
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
                <div class="flex-row flex-wrap size-100 mil-size-100">
                    <div class="section pdng-7_5px pdng-t-10px mil-size-100" style="width: 350px">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Дата</div>
                        <el-input-number
                            v-model="form.date"
                            :min="12"
                            :max="27"
                        ></el-input-number>
                        <div class="pdng-t-10px">(февраля)</div>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100">
                    <div class="section pdng-7_5px pdng-t-10px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Описание</div>
                        <el-input type="textarea"
                                  rows="10"
                                  v-model="form.description"></el-input>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100">
                    <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Медиа-файлы</div>
                        <el-upload
                            class="upload-demo"
                            :auto-upload="false"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-change="onChange"
                            :on-remove="handleRemove"
                            multiple
                            :limit="3"
                            accept="image/*,video/*,audio/*"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button type="primary"><i class="el-icon-close"></i>Кликните для загрузки</el-button>
                        </el-upload>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100">
                    <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100" style="width: 350px">
                        <div class="txt-size-12px txt-color-3-1 pdng-b-5px">Разрешаете ли вы публиковать ваше сообщение
                            о
                            нарушении в медиа?
                        </div>
                        <el-radio-group v-model="form.publish_media" style="width: 300px">
                            <el-radio-button :label="true">Да, разрешаю</el-radio-button>
                            <el-radio-button :label="false">Нет, не разрешаю</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="flex-row flex-wrap size-100 mrgn-t-30px">
                    <div class="section size-33_3 pdng-7_5px pdng-t-10px mil-size-100" style="width: 300px">
                        <el-button type="primary"
                                   :disabled="!isValidForm"
                                   @click="onSubmit">
                            Отправить
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="showRegions" :custom-class="'popup'" :center="true" :width="'100%'" :show-close="false" center>
        <div class="pdng-t-10px" style="margin-right: auto;width: 350px;margin-left: auto">
            <el-radio-group v-model="area" class="pdng-l-20px choose-region"
                            style="margin-right: auto;margin-left: auto">
                <el-row v-for="item in areas">
                    <el-radio-button :label="item.code"
                                     @change="chooseRegion"
                    >{{ item.label + (item.code !== '7' ? ' область' : '') }}
                    </el-radio-button>
                </el-row>
            </el-radio-group>
        </div>
    </el-dialog>
    <el-dialog v-model="showDistricts" :custom-class="'popup'" :center="true" :width="'100%'" :show-close="false">
        <div class="pdng-t-10px" style="margin-right: auto;width: 350px;margin-left: auto">
            <el-radio-group v-model="district">
                <div class="pdng-l-20px choose-region" v-for="item in districts">
                    <el-radio-button :label="item.label"
                                     @change="chooseDistrict(item.code)"
                    >{{ item.label.replace(' район', '') }}
                    </el-radio-button>
                </div>
            </el-radio-group>
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
import {computed, reactive, ref} from "vue";

const categoriesForCivilControllers = {
    1: 'Манипуляция со списками избирателей',
    2: 'Принуждение к участию в досрочном голосовании',
    3: 'Нарушение тайны голосования',
    4: 'Невывешивание копии протокола',
    12: 'Другое'
}

const formatCode = (code) => {
    code = code.slice(1);
    return code.slice(0, 2) + code.slice(3, 6) + code.slice(-1)
}

const categoriesForObservers = {
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
        let d               = (new Date()).getDate();
        let date            = d > 27 ? 27 : d;
        const showRegions   = ref(false);
        const showDistricts = ref(false);
        const form          = reactive({
            region: '',
            district: '',
            date,
            commission_number: 0,
            publish_media: false,
            description: '',
            categories: [],
            area: null,
            has_accreditation: false,
            attachments: []
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
        const fileList      = ref([]);
        const isValidForm   = computed(() => {
            console.log(form.district)
            if (!form.district) {
                return false;
            }
            return form.categories.length !== 0;

        });
        return {
            isValidForm,
            upload,
            handleExceed(files, fileList) {
                ElMessage.error('Максимум три файла!');
            },
            handleRemove(file) {
                form.attachments = form.attachments.filter(
                    (i) => file.uid !== i.uid
                );
            },
            onChange(file) {
                form.attachments.push(file);
            },
            form,
            fileList,
            areas,
            showRegions,
            showDistricts,
            categoriesForObservers,
            area,
            district,
            displayArea,
            categoriesForCivilControllers,
            districts,
            chooseRegion(value) {
                form.region       = value;
                showRegions.value = false
            },
            chooseDistrict(value) {
                form.district       = value;
                showDistricts.value = false
            },
            onSubmit() {
                let formData = new FormData();
                formData.append('description', form.description);
                formData.append('district', formatCode(form.district));
                formData.append('day', form.date + '');
                formData.append('commission_number', form.commission_number + '');
                formData.append('publish_media', form.publish_media ? '1' : '');
                formData.append('role', form.has_accreditation ? 'observer' : 'civil_controller');
                for (let c of form.categories) {
                    formData.append('categories[]', c);
                }
                form.attachments.forEach((elem, index) => {
                    formData.append(index + '', elem.raw);
                })
                fetch(
                    import.meta.env.VITE_ZUBR_IN_API + '/api/violation?XDEBUG_SESSION=start',
                    {
                        body: formData,
                        method: "post"
                    }
                )
                // ElMessageBox.confirm(
                //     'Сообщение отправлено. Желаете ли отправить еще одно сообщение?',
                //     'Успех',
                //     {
                //         confirmButtonText: 'Да',
                //         cancelButtonText: 'Нет',
                //         type: 'success',
                //     }
                // )
                //     .then(() => {
                //         form.value.date              = 12;
                //         form.value.publish_media     = false;
                //         form.value.description       = '';
                //         form.value.area              = null;
                //         form.value.has_accreditation = false;
                //         form.value.categories        = [];
                //         upload.value.clearFiles()
                //     })
                //     .catch((e) => {
                //         ElMessage({
                //             type: 'success',
                //             message: 'Успешно завершено',
                //         })
                //         throw e
                //     })
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
