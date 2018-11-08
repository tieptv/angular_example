import { Component, OnInit } from '@angular/core';
import { WhycmcService } from '../whycmc.service';
import { Whycmc } from 'src/app/entity/whycmc';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  video:string;
  list:Whycmc[]=[];
  constructor(private service : WhycmcService) { }

  ngOnInit() {
    this.service.getWhycmcs().subscribe(res => (this.list = res));
    // for (let i = 0,len=this.list.length; i < len; i++) {
    //   let tem=this.list[i];
    //   if(tem.type==="video" && tem.status==="enable" ){
    //     this.video=tem.content;
    //     break;
    //   }
    //this.video=this.list[0].content;
    //console.log(this.list);
  }

}
