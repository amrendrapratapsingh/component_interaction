import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleApp';

  serverElements = [
    {type:'server',name:'Angular',content:'I am Programmer'},
    {type:'bluePrint',name:'Angular',content:'I am Programmer'},
  ];


  onServerAdded(serverData:{serverName:string,serverContent:string}){

    console.log(serverData)

    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent,
    })

  }
  onBluePrintAdded(serverData:{serverName:string,serverContent:string}){

    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent,
    })

  }

  }


