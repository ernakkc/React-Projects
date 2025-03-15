import React from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'

let API_KEY = 'fca_live_2RFedqeXGYGoB7tOyzKTf6E2RjgjR92u6BCQx056'
let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'

function Currency() {
    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const exchange = async() => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency] * amount).toFixed(2))
    }        


  return (
    <div className='currency-div'>
        <div>
            <h3 style={{margin: '30px'}}>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div>
            <input type="number"
             className='amount'
             value={amount}
             onChange={(e) => setAmount(e.target.value)}/>
            <select className='from-currency-options' onChange={(e) => setFromCurrency(e.target.value)}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='TRY'>TRY</option>
            </select>

            <FaRegArrowAltCircleRight className='arrow' style={{fontSize: '25px', marginRight: '10px'}}/>
            
            <select className='to-currency-options' onChange={(e) => setToCurrency(e.target.value)}>
                <option value='TRY'>TRY</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
            </select>

            <input type="number" className='result' value={result} onChange={e => setResult(e.target.value)}/>
        </div>

        <div>
            <button 
            className='convert-button'
            onClick={exchange}
            >Dönüştür</button>
        </div>
        
    </div>
  )
}

export default Currency
