import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { WhycmcService } from '../whycmc.service';
import { Whycmc } from 'src/app/entity/whycmc';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StringifyOptions } from 'querystring';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  video: SafeResourceUrl;
  list: Whycmc[] = [];
  title: string;
  right: string[]=[];
  left: string[]=[];
  constructor(
    private service: WhycmcService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.service.getWhycmcs().subscribe(res => {
      this.list = res;
      let flag_v = false;
      let flag_title = false;
      let count_right = 0;
      let count_left = 0;
      for (let i = 0; res.length; i++) {
        if (res[i].status === "enable") {
          if(res[i].type==="video"&& flag_v ===false){
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(res[i].content);
            flag_v=true;
          }
          else if(res[i].type==="title" && flag_title===false){
            this.title=res[i].content;
            flag_title=true;
          }
          else if(res[i].type==="slogan"&&count_left<3){
            this.left.push(res[i].content);
            count_left++;
          }
          else if(res[i].type==="slogan"&&count_right<3){
            this.right.push(res[i].content);
            count_right++;
          }
        }
      }
    });
  }
}
