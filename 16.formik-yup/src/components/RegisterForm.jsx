import React from 'react'
import { useFormik } from 'formik'
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas'

function RegisterForm() {
    
    const submit = (values, action) => {
        setTimeout(() => {
            alert('Form Gönderildi');
            action.resetForm();
        }, 2000)
    }
   
   
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            passwordConfirm: '',
            term: ''
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    })


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="text" id='email' placeholder='Email Giriniz' value={values.email} onChange={handleChange} />
                    {errors.email ? <div className='error'>{errors.email}</div> : null}
                </div>
                <div className='inputDiv'>
                    <label>Age</label>
                    <input type="number" id='age' placeholder='Yaş Giriniz' value={values.age} onChange={handleChange} />
                    {errors.age ? <div className='error'>{errors.age}</div> : null}
                </div>
                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input type="password" id='password' placeholder='Şifre Giriniz' value={values.password} onChange={handleChange} />
                    {errors.password ? <div className='error'>{errors.password}</div> : null}
                </div>
                <div className='inputDiv'>
                    <label>Şifre Tekrar</label>
                    <input type="password" id='passwordConfirm' placeholder='Şifre Tekrar Giriniz' value={values.passwordConfirm} onChange={handleChange} />
                    {errors.passwordConfirm ? <div className='error'>{errors.passwordConfirm}</div> : null}
                </div>
                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                        <input type="checkbox" id='term' value={values.term} onChange={handleChange} style={{width:'20px', height:'12px'}}/>
                        <label>Kullanıcı sözleşmesini kabul ediyorum</label>
                    </div>
                    {errors.term ? <div className='error'>{errors.term}</div> : false}
                </div>

                <button className='saveButton' type='submit'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm
