# rumahotp

Unofficial module untuk integrasi layanan RumahOTP (virtual SIM, topup game, e-wallet, dan produk digital).

## Instalasi

```bash
npm install rumahotp

Import

CommonJS

const RumahOTP = require("rumahotp");
const client = new RumahOTP("YOUR_API_KEY");

ESM

import RumahOTP from "rumahotp";
const client = new RumahOTP("YOUR_API_KEY");

Contoh Penggunaan

(async () => {
  const client = new RumahOTP("YOUR_API_KEY");

  const balance = await client.getBalance();
  console.log("Balance:", balance);

  const services = await client.getServicesV2();
  console.log("Services V2:", services);

  const countries = await client.getCountriesV2("wa");
  console.log("Countries V2:", countries);

  const operators = await client.getOperatorsV2("thailand", 2887);
  console.log("Operators V2:", operators);

  const orders = await client.getOrdersV2(2398, 2887, 1);
  console.log("Orders V2:", orders);

})();

Method

Method	Keterangan

getBalance()	Mendapatkan saldo user
createDepositV2(amount, paymentId)	Membuat deposit
cancelDeposit(depositId)	Membatalkan deposit
getDepositStatus(depositId)	Status deposit
getCountriesV2(serviceId)	List negara berdasarkan service
getServices()	List layanan V1
getServicesV2()	List layanan V2
getOperatorsV2(country, providerId)	List operator berdasarkan negara & provider
getOrdersV2(numberId, providerId, operatorId)	List order V2
getOrderStatus(orderId)	Status order V1
createOrdersV2(numberId, providerId, operatorId)	Membuat order V2


Lisensi

ISC
Author: gilangf3000



