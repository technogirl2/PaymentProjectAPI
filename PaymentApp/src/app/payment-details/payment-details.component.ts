import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-details',
  standalone: true,
  template: '<h1>payment</h1>',
  imports: [PaymentDetailFormComponent, NgFor, CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  // add the the service into this component
  ngOnInit(): void {
    this.service.refreshList();
  }

  // a copy of the object will be created and assign to the form data

  // Avoid the sharing of object reference
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe({
        next: (res) => {
          this.service.list = res as PaymentDetail[];
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
