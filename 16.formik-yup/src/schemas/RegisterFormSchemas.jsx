import * as yup from 'yup';

export const RegisterFormSchemas = yup.object().shape({
    email : yup.string().email('Geçerli bir email adresi giriniz').required('Email alanı zorunludur'),
    age : yup.number().required('Yaş alanı zorunludur').min(18, 'Yaşınız 18 den küçük olamaz').integer('Yaşınız tam sayı olmalıdır'),
    password : yup.string().required('Şifre alanı zorunludur').min(6, 'Şifreniz en az 6 karakter olmalıdır').max(12, 'Şifreniz en fazla 12 karakter olmalıdır'),
    passwordConfirm : yup.string().oneOf([yup.ref('password'), yup.password], 'Şifreler uyuşmuyor'),
    term : yup.bool().oneOf([true], 'Kullanıcı sözleşmesini kabul etmelisiniz')
});