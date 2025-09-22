const { BASE_URL } = require("./config.cjs");
const axios = require("axios");

class RumahOTP {
  constructor(apiKey) {
    if (!apiKey) throw new Error("API key wajib diisi!");
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
      headers: {
        "x-apikey": this.apiKey,
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
        "Connection": "keep-alive"
      }
    });
  }

  async getBalance() {
    const res = await this.client.get("/v1/user/balance");
    return res.data;
  }

  async createDepositV2(amount, paymentId = "qris") {
    const res = await this.client.get(`/v2/deposit/create?amount=${amount}&payment_id=${paymentId}`);
    return res.data;
  }

  async cancelDeposit(depositId) {
    const res = await this.client.get(`/v1/deposit/cancel?deposit_id=${depositId}`);
    return res.data;
  }

  async getDepositStatus(depositId) {
    const res = await this.client.get(`/v1/deposit/get_status?deposit_id=${depositId}`);
    return res.data;
  }

  async getCountriesV2(serviceId) {
    const res = await this.client.get(`/v2/countries?service_id=${serviceId}`);
    return res.data;
  }

  async getServices() {
    const res = await this.client.get(`/v1/services`);
    return res.data;
  }

  async getServicesV2() {
    const res = await this.client.get(`/v2/services`);
    return res.data;
  }

  async getOperatorsV2(country, providerId) {
    const res = await this.client.get(`/v2/operators?country=${country}&provider_id=${providerId}`);
    return res.data;
  }

  async createOrdersV2(numberId, providerId, operatorId) {
    const res = await this.client.get(
      `/v2/orders?number_id=${numberId}&provider_id=${providerId}&operator_id=${operatorId}`
    );
    return res.data;
  }

  async getOrderStatus(orderId) {
    const res = await this.client.get(`/v1/orders/get_status?order_id=${orderId}`);
    return res.data;
  }
}

module.exports = RumahOTP;