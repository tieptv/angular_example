import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { WhycmcService } from '../whycmc.service';
import { Whycmc } from 'src/app/entity/whycmc';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  constructor(
    private service: WhycmcService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.service.getWhycmcs().subscribe(res => {
      this.list = res;
      for (let i = 0; res.length; i++) {
        if (res[i].status === 'enable' && res[i].type === 'video') {
          this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
            res[i].content
          );
          break;
        }
      }
    });
  }
}
