import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) {}
  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list = res as PaymentDetail[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(
      this.url + '/' + this.formData.paymentDetailsId,
      this.formData
    );
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  resetForm(Form: NgForm) {
    Form.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmitted = false;
  }
}
