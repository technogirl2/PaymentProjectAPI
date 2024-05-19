import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css',
})
export class PaymentDetailFormComponent {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}
  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.paymentDetailsId == 0) {
        this.insertRecord(form);
        console.log('here');
      } else {
        this.updateRecord(form);
      }
    }
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe({
      next: (res) => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        this.toastr.info('Updated successfully', 'Payment Detail Register');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe({
      next: (res) => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        this.toastr.success('Inserted successfully', 'Payment Detail Register');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
