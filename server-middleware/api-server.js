import got from 'got'

const url = 'https://api.mindbox.ru/v3/operations/sync?endpointId=pv2-landing&operation=PV2.'

const operationsApi = {
  start: 'MobilePhoneEnter',
  confirm: 'MobilePhoneConfirm',
  auth: 'MobilePhoneAuth',
  resend: 'MobilePhoneEnter.ReSendSMS'
}

export default async function (req, res, next) { 
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Mindbox secretKey=""'
    },
    json: req.body
  };
  const data = await got('https://jsonplaceholder.typicode.com/posts/1').json();
  // const dataRes = await got.post(url + operationsApi.start, options).json();
  console.log(data);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end()
}