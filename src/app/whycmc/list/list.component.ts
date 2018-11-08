import { Component, OnInit } from '@angular/core';
import { Whycmc } from 'src/app/entity/whycmc';
import { WhycmcService } from '../whycmc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Whycmc[] = [];
  constructor(private service: WhycmcService, private router: Router) { }

  ngOnInit() {
    this.service.getWhycmcs().subscribe(res => (this.list = res));
  }
  apply(l :Whycmc){
    if(l.status==="enable")l.status="disable";
    else l.status="enable";
    this.service.updateWhycmc(l.id , l);
  }

}
