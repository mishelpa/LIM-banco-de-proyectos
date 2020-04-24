import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  collection = new FormControl('');
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getCollectionbyInput(event) {
    console.log(event.target.value);
    if (event.target.value === '') {
      this.authService.getListPhotos(1)
      .subscribe(response => {
        this.authService.changeString(response);
      });
    }
    this.authService.getCollection(event.target.value).subscribe(response => {
      this.authService.changeString(response['results']);
    });
  }

}
