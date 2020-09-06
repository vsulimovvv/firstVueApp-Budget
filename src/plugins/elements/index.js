import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import { Input, Button, Card, Form, FormItem, Select, Option, Alert } from 'element-ui';

const elements = [Input, Button, Card, Form, FormItem, Select, Option, Alert];

locale.use(lang);

elements.forEach((El) => Vue.use(El, { locale }));

