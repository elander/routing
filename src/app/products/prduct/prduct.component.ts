import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prduct',
  templateUrl: './prduct.component.html',
  styleUrls: ['./prduct.component.css']
})
export class PrductComponent implements OnInit {
id: string = '';
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {this.id = params['id']});
   }

  ngOnInit(): void {
  }

  
}
