import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Policy } from '../policy/policy.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.styl']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Policy;
      });
    });
  }

  create(policy: Policy) {
    this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.firestore.doc('policies/' + id).delete();
  }
}