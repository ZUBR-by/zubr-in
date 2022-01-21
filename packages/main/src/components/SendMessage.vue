<template>
    <header-view :active="'Отправить нарушение'">
    </header-view>
    <div class="scene mrgn-t-130px mil-mrgn-t-80px">
        <h2 class="pdng-b-15px">Отправить сообщение о нарушении</h2>
        <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="Область">
                <el-input v-model="form.region"></el-input>
            </el-form-item>
            <el-form-item label="Район">
                <el-input v-model="form.district"></el-input>
            </el-form-item>
            <el-form-item label="Номер участка">
                <el-input-number
                    v-model="form.commission_number"
                    :min="0"
                    :max="150"
                ></el-input-number>
            </el-form-item>
            <el-form-item label="Есть аккредитация">
                <el-radio-group v-model="form.has_accreditation">
                    <el-radio-button label="Да" :value="true"></el-radio-button>
                    <el-radio-button label="Нет" :value="false"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Категории">
                <el-select v-model="form.region" placeholder="Категории" multiple="true" style="width: 500px">
                    <template v-if="form.has_accreditation">
                        <el-option :label="item" :value="key"
                                   v-for="(item, key) in categoriesForObservers"></el-option>
                    </template>
                    <template v-else>
                        <el-option :label="item" :value="key"
                                   v-for="(item, key) in categoriesForCivilControllers"></el-option>
                    </template>
                </el-select>
            </el-form-item>
            <el-form-item label="Дата">
                <el-input-number
                    v-model="form.date"
                    :min="12"
                    :max="27"
                ></el-input-number>
                (февраля)
            </el-form-item>
            <el-form-item label="Описание">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="Медиа-файлы">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    :limit="3"
                >
                    <el-button type="primary">Кликните для загрузки</el-button>
                    <template #tip>
                        <div class="el-upload__tip">
                            jpg/png
                        </div>
                    </template>
                </el-upload>
            </el-form-item>

            <el-form-item label="Разрешаю публиковать в медия">
                <el-radio-group v-model="form.media_consent">
                    <el-radio-button label="Да, разрешаю" :value="true"></el-radio-button>
                    <el-radio-button label="Нет, не разрешаю" :value="false"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Отправить</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
import Header from './Header.vue'
import {
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
} from 'element-plus'

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
        ElUpload
    },
    data() {
        return {
            form: {
                region: '',
                district: '',
                date: 12,
                commission_number: 0,
                media_consent: null,
                description: '',
                has_accreditation: null,
            },
            categoriesForObservers,
            categoriesForCivilControllers,
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },
}
</script>

<style scoped>

</style>
