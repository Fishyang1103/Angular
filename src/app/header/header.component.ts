import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyword:string = '';
  // 也可以寫成 keyword = ''; (因為會自動判別''就是字串的屬性，所以 string 可不寫。)
  // 先預設 Hightlight 為 false
  isHighlight = false;
  // 文字預設 24，px 要另外處理
  fontSize= 24;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(event: MouseEvent) {
    // 每按一下搜尋就 keyword 就會加上一個 ! (注意要使用 +=)
    this.keyword += '!' ;
    // 每按一下搜尋就會 換顏色
    this.isHighlight = !this.isHighlight ;
    // 每按一下搜尋字就會 +2
    this.fontSize += 2 ;
    // console.log(event.altKey);
  }

}
