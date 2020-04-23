import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  arrPhotos: any[];
  infoPhoto: any;
  constructor( private authService: AuthService) {

   }

  ngOnInit(): void {
    this.post();
  }

  post() {
    this.authService.getListPhotos(1)
    .subscribe(response => {
      this.arrPhotos = response;
      console.log(response);
    });
  }

  postNext() {
    const numPage = (this.arrPhotos.length / 20) + 1;
    this.authService.getListPhotos(numPage)
    .subscribe(response => {
      this.arrPhotos = this.arrPhotos.concat(response);
    });
  }

  onScrollDown() {
    this.postNext();
  }

  onScrollUp() {
    console.log('scrollUp funcionando');
    if (this.arrPhotos.length >= 40) {
      this.arrPhotos.length = this.arrPhotos.length - 20;
    }
  }

  saveIdPhoto(id) {
    this.authService.getPhotoById(id).subscribe(data => {
      console.log(data);
      this.infoPhoto = data;
    });
  }
}
