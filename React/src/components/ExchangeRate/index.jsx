import styles from './ExchangeRate.module.scss'
import { useState, useEffect } from 'react';

export const ExchangeRate = () => {
  const [valuta, setValuta] = useState([]);

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setValuta(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.exchangeRateWrapper}>
      <h2>Exchange Rate</h2>
      {valuta.map(val => {
        if (val.cc == 'USD' || val.cc == 'EUR' || val.cc == 'JPY' || val.cc == 'PLN'|| val.cc == 'XAU' || val.cc == 'XAG' || val.cc == 'XPD' ) {
            return(
                <div key={val.cc} className={styles.exchangeRateWrapper__valuta}>
                <h4>|{val.txt}| {val.cc}</h4>
                <p>Rate: {val.rate} ₴ </p>
                <div>{val.exchangedate}</div>
            </div>
            ) 
        }
      })}
    </div>
  );
};