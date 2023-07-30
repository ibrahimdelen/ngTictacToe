import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  next: string = "X";
  result: string = "";

 games: string[] = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
 ]
 winners: number [] = []

 setMark(index: number){
  if(this.games[index] == "" && this.result == "")
  this.games[index] = this.next;
  
  this.checkGameResult();
  if (this.result != "") {
    return;
  }

  this.checkGameResult();

  this.checkIfGAmeFinish();
  if (this.result != "") {
    return;
  }

  if(this.next == "X")
    this.next = "0"
  else
    this.next = "X"
 }

 newGame(){
  this.next = "X"
  this.result="";
  this.winners = [];
  for (let i = 0; i < this.games.length; i++) {
      this.games[i] = "";
  }
 }
 checkGameResult(){
  if (this.games[0] != "" && this.games[0] == this.games[1] && this.games[1] == this.games[2]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(0,1,2)
  }
  else   if (this.games[3] != "" && this.games[4] == this.games[1] && this.games[4] == this.games[5]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(3,4,5)
  }
  else   if (this.games[6] != "" && this.games[6] == this.games[7] && this.games[7] == this.games[8]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(6,7,8)
  }
  else   if (this.games[0] != "" && this.games[0] == this.games[4] && this.games[4] == this.games[8]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(0,4,8)
  }
  else   if (this.games[2] != "" && this.games[4] == this.games[1] && this.games[1] == this.games[6]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(2,1,6)
  }
  else    if (this.games[0] != "" && this.games[0] == this.games[3] && this.games[4] == this.games[6]) {
    this.result = `Oyunu ${this.next}kazandı!`;
    this.winners.push(0,4,6)
  }
  
}

  checkWinnerButtonClass(index:number){
    if(this.winners.includes(index)) {
      return "btn btn-success button";
    }else
      return "btn btn-primary button"
  }

  checkIfGAmeFinish(){
    let isFinish = false;
    for (let i = 0; i < this.games.length; i++) {
      if(this.games[i] == "")
        return;
      else
        isFinish = true;
    }

    if (isFinish) {
      this.result = "Oyun berabere"
    }
  }

  checkResultClass(){
    if (this.result != "" && this.result == "Oyun berabere")
      return "alert alert-danger";
    else
    return "alert alert-success"
  }
}
