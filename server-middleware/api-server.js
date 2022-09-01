import fetch from 'node-fetch';

const url = 'https://api.mindbox.ru/v3/operations/sync?endpointId=pv2-landing&operation=PV2.'
const secretKey = 'ZALxzrNjWA0WqYCce1WF'

const operationsApi = {
  start: 'MobilePhoneEnter',
  confirm: 'MobilePhoneConfirm',
  auth: 'MobilePhoneAuth',
  resend: 'MobilePhoneEnter.ReSendSMS'
}

export default async function (req, res, next) {
  const { originalUrl } = req

  if (originalUrl == '/api') {
    const { phone, operation } = req.body

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Mindbox secretKey="' + secretKey + '"'
      },
      body: JSON.stringify({
        customer: {
          mobilePhone: phone
        }
      })

    };
    const response = await fetch(url + operationsApi[operation], options)
    const fetchRes = await response.json();

    // const dataRes = await got.post(url + operationsApi[operation], options).json();

    if (fetchRes && fetchRes.status === 'Success') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(fetchRes.customer));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ status: 'Error' }));
    }
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.write(JSON.stringify(fetchRes));
    res.end();
  } else if (originalUrl == '/api/auth') {
    const { phone, code, operation } = req.body

    const dataAuth = {
      customer: {
        mobilePhone: phone
      }
    }

    if (operation === 'confirm') {
      dataAuth.smsConfirmation = {
        code: code
      }
    } else if (operation === 'auth') {
      dataAuth.authentificationCode = code
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Mindbox secretKey="' + secretKey + '"'
      },
      body: JSON.stringify(dataAuth)
    };

    const response = await fetch(url + operationsApi[operation], options)
    const dataRes_2 = await response.json();

    console.log(dataRes_2);

    if (dataRes_2 && dataRes_2.status === 'Success') {
      res.writeHead(301, { Location: 'http://ultralinzi.ru/' });
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ status: 'Invalid code' }));
    }

    res.end();
  }
}